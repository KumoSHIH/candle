<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="row mt-4" >
            <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
                <div class="card border-0 shadow-sm">
                    <div style="height: 150px; background-size: cover; background-position: center"
                    :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>  
                    <div class="card-body">
                    <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                    <h5 class="card-title">
                        <a href="#" class="text-dark">{{ item.title }}</a>
                    </h5>
                    <p class="card-text">{{ item.content }}</p>
                    <div class="d-flex justify-content-between align-items-baseline">
                        <!-- <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div> -->
                        <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                        <div class="h5" v-if="item.price">現在只要 <strong class="text-danger">{{ item.price }}</strong>元</div>
                    </div>
                    </div>
                    <div class="card-footer d-flex">
                    <button type="button" class="btn btn-outline-secondary btn-sm"
                        @click="getProduct(item.id)">
                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                        查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
                    @click="addCart(item.id)">
                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                        加到購物車
                    </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img :src="product.imageUrl" class="img-fluid" alt="">
                        <blockquote class="blockquote mt-3">
                            <p class="mb-0">{{ product.content }}</p>
                            <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                        </blockquote>
                        <div class="d-flex justify-content-between align-items-baseline">
                            <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
                            <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                            <div class="h4" v-if="product.price">現在只要 <strong class="text-danger">{{ product.price }}</strong> 元</div>
                        </div>
                        <select name="" class="form-control mt-3" v-model="product.num">
                            <option :value="num" v-for="num in 10" :key="num">
                                選購 {{ num }} {{ product.unit }}
                            </option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <div class="text-muted text-nowrap mr-3">
                        小計 <strong>{{ product.num * product.price }}</strong> 元
                        </div>
                        <button type="button" class="btn btn-primary"
                        @click="addCart(product.id, product.num)">
                        <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                        加到購物車
                        </button>
                    </div>
                </div>    
            </div>
        </div>  
        
        <!-- 購物車明細   -->
        <hr>
        <div class="container m-5">
            <div class="row d-flex justify-content-center ">
                <div class="col-md-6">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th width="60"></th>
                                <th width="200">品名</th>
                                <th width="80">數量</th>
                                <th width="80">單價</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="item in cartDetail.carts" :key="item.id" class="">
                                <td>
                                    <button class="btn btn-outline-main"><i class="fas fa-trash-alt"></i></button>
                                </td>
                                <td>{{ item.product.title }}</td>
                                <td>{{ item.qty }} {{ item.product.unit }}</td>
                                <td class="text-right">{{ item.final_total | currency}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

    </div>    
</template>

<script>
import $ from 'jquery';

export default {
    data(){
        return{
            products: [],
            isLoading: false,
            product: {}, //存放單一筆 Modal的資料   
            status:{  //判斷畫面上是哪一筆資料正在讀取中
                loadingItem:'',
            },
            cartDetail: [],    
        }
    },
    methods:{
        getOrders() {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            const vm = this;
            vm.isLoading = true; 
            this.$http.get(api).then(response => {
                //console.log(response.data);
                vm.isLoading = false; 
                vm.products = response.data.products;
            });
        },
        getProduct(id){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
            vm.status.loadingItem = id; 
            this.$http.get(api).then(response => {
                vm.product = response.data.product;
                $('#productModal').modal('show');
                //console.log(response);
                vm.status.loadingItem = '';  
            });
        },
        addCart(id, qty = 1){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.status.loadingItem = id; 
            const cart = {
                product_id: id,
                qty,
            }
            this.$http.post(api, { data:cart }).then(response => {
                //console.log(response);
                vm.status.loadingItem = ''; 
                vm.getCart(); //重新取得購物車內容 
                $('#productModal').modal('hide');
            });
        },
        getCart(){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this;
            vm.isLoading = true; 
            this.$http.get(api).then(response => {
                //console.log(response.data);
                vm.isLoading = false;
                vm.cartDetail = response.data.data;
                console.log(vm.cartDetail);
            });
        },
    },
    created(){
        this.getOrders();
        this.getCart();
    },
}
</script>