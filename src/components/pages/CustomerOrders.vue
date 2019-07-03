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
                            <tr v-for="item in cartDetail.carts" :key="item.id" >
                                <td>
                                    <button class="btn btn-outline-main"
                                    @click="delCartItem(item.id)"
                                    ><i class="fas fa-trash-alt"></i></button>
                                </td>
                                <td class="align-middle">
                                    {{ item.product.title }}
                                    <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                                </td>
                                <td>{{ item.qty }} {{ item.product.unit }}</td>
                                <td class="text-right">{{ item.final_total | currency}}</td>
                            </tr>
                            <tr class="text-right">
                                <th colspan="3">總計</th>
                                <th ><strong>{{ cartDetail.total | currency }}</strong></th>
                            </tr>
                            <tr class="text-right text-success" v-if="cartDetail.final_total !== cartDetail.total">
                                <th colspan="3">折扣價</th>
                                <th ><strong>{{ cartDetail.final_total | currency }}</strong></th>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                    <!-- 套用優惠券 -->
                    <div class="input-group mb-5">
                        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary"
                            @click="addCouponCode">套用優惠碼</button>
                        </div> 
                    </div>
                </div>
            </div>

            <!-- 訂單詳細資訊 -->
            <div class="my-5 row justify-content-center">
                <form class="col-md-6" @submit.prevent="createOrder">
                    <div class="form-group">
                        <label for="useremail">Email</label>
                        <input type="email" class="form-control" name="email" id="useremail" placeholder="請輸入 Email"
                        v-validate="'required|email'"> 
                        <span class="text-danger" v-if="errors.has('email')">
                            {{ errors.first('email') }}
                        </span>
                    </div>                            

                    <div class="form-group">
                        <label for="username">收件人姓名</label>
                        <input type="text" class="form-control" name="name" id="username" placeholder="輸入姓名"
                        v-model="form.user.name"
                        :class="{'is-invalid': errors.has('name')}"
                        v-validate="'required'">
                        <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
                    </div>
                            
                    <div class="form-group">
                        <label for="usertel">收件人電話</label>
                        <input type="tel" class="form-control" id="usertel" name="tel" placeholder="請輸入電話"
                        v-model="form.user.tel"
                        v-validate="'required'">
                        <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
                    </div>
                            
                    <div class="form-group">
                        <label for="useraddress">收件人地址</label>
                        <input type="text" class="form-control" name="address" id="useraddress" placeholder="請輸入地址"
                        v-model="form.user.address"
                        v-validate="'required'">
                        <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                    </div>
                            
                    <div class="form-group">
                        <label for="comment">留言</label>
                        <textarea name="" id="comment" class="form-control" cols="30" rows="10"
                        v-model="form.message"></textarea>
                    </div> 

                    <div class="text-right">
                        <button class="btn btn-danger" >送出訂單</button>
                    </div>
                </form>
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
            coupon_code: '',  
            form:{
                user:{
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                }
            },
        }
    },
    methods:{
        getOrders() {
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            this.$http.get(api).then(response => {
                //console.log(response.data);
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
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`; 
            this.$http.get(api).then(response => {
                //console.log(response.data);
                vm.cartDetail = response.data.data;
                console.log(vm.cartDetail);
            });
        },
        delCartItem(id){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            this.$http.delete(api).then(response => {
                console.log(response);
                vm.getCart();
            });
        },
        addCouponCode(){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
            const coupon = {
                code: vm.coupon_code
            };
            this.$http.post(api,{ data: coupon }).then((response) => {
                console.log(response);
                vm.getCart();
            });
        },
        createOrder(){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
            const order = vm.form;

            this.$validator.validate().then((valid) => {
                if (valid ) { //通過驗證才建立訂單
                    this.$http.post(api,{ data: order }).then(response => {
                        if(response.data.success){
                            console.log('訂單已建立',response);
                            vm.$router.push(`customer_checkout/${response.data.orderId}`);
                        };
                    });
                }else{
                    alert('欄位不完整');
                }
            });
        },

    },
    created(){
        this.getOrders();
        this.getCart();
    },
}
</script>