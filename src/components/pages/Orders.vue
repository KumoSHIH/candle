<template>
    <div>
        <!-- Loading 效果 -->   
        <loading :active.sync="isLoading"></loading>

        <table class="table mt-4">
            <thead>
                <tr>
                    <th>訂單編號</th>
                    <th>購買項目</th>
                    <th>購買時間</th>
                    <th>姓名</th>
                    
                    <th width="120" class="title" @click="isReverse = !isReverse, value = 'total'">應付金額
                        <span class="icon isReverse" :class="{'rotate': isReverse}" v-if="value === 'total'">
                            <i class=" fas fa-angle-up text-info ml-1"></i> 
                        </span>
                    </th>
                    <th width="120" class="title" @click="isReverse = !isReverse, value = 'is_paid'">是否付款
                        <span class="icon isReverse" :class="{'rotate': isReverse}" v-if="value === 'is_paid'">
                            <i class=" fas fa-angle-up text-info ml-1"></i> 
                        </span>
                    </th>
                    <th >修改訂單</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filterArray" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>
                        <li v-for="item in item.products" :key="item.id" class="list-unstyled">
                            {{ item.product.title }} {{ item.qty }} {{ item.product.unit }}
                        </li>
                    </td>    
                    <td>{{ item.create_at | date}}</td>

                    <td>
                        <span v-text="item.user.name" v-if="item.user"></span>
                    </td>
                
                    <td class="text-right">{{ item.total |currency}}</td>
                    <td>
                        <span v-if="item.is_paid" class="text-success">已經付款</span>
                        <span v-else class="text-danger">尚未付款</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-second" @click="editOrder(item)">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal -->

        <div class="modal fade" id="editOrderModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle"><strong>{{ tempOrder.id }}</strong>  修改訂單</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="col-sm-8">
                            <div class="form-group">
                                <h6><strong>購買項目</strong></h6>     
                                <li class="list-unstyled d-flex justify-content-between align-items-center border-bottom">
                                    <span class="">山中修行者</span>
                                    <div class="d-inline-flex align-items-center">
                                        <button class="counter">-</button>
                                        <input type="text" class="counterInput text-center" value="1">
                                        <button class="counter">+</button>
                                    </div> 
                                </li>

                                <li class="list-unstyled d-flex justify-content-between align-items-center border-bottom">
                                    <span class="">玫瑰牛奶糖</span>
                                    <div class="d-inline-flex align-items-center">
                                        <button class="counter">-</button>
                                        <input type="text" class="counterInput text-center" value="1">
                                        <button class="counter">+</button>
                                    </div> 
                                </li>
                            </div>

                            <div class="form-group">
                                <label for="pay" class="h6"><strong>應付金額</strong></label>
                                <input type="text" class="form-control" id="pay"
                                v-model="tempOrder.total"/>
                            </div>

                            <div class="form-group">
                                <label for="is_paid" class="h6"><strong>是否付款</strong></label>
                                <input type="text" class="form-control" id="is_paid"
                                v-model="tempOrder.is_paid" />
                            </div>
                        </div>   
                    </div>     
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-main">送出</button>
                </div>
                </div>
            </div>
        </div>

        <Pagination :pageNum="pagination" @getPage="getOrders" ></Pagination>
        
    </div>
</template>

<style lang="scss" scoped>
    .title{
        cursor: pointer;
        &:hover{
            color: #17a2b8;
        }
    }
    .icon{
        display: inline-block;
        transition: .3s;
    }  
    .icon.rotate{
        transform: rotate(180deg);
    } 
    .counter{
        width: 25px;
        height: 25px;
        background-color: #fff;
        border: solid 1px gray;
        &:hover,:focus{
            background-color: rgb(221, 221, 221);
        }
    } 
    .counterInput{
        width: 30px;
        height: 25px;
    }
</style>

<script>
import $ from "jquery";
import Pagination from "../Pagination";

export default {
  components:{
    Pagination,    
  },
  data (){
    return{
        isLoading: false,
        pagination: {}, 
        orders: [],
        tempOrder: {},
        tempProduct: {
            product:{},
        },
        value : '',
        isReverse : false,
    }
  },
  methods:{
    getOrders(page = 1) {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders?page=${page}`;
        const vm = this;
        vm.isLoading = true; 
        this.$http.get(api).then((response) => {
            //console.log(response.data);
            vm.isLoading = false; 
            vm.orders = response.data.orders;
            vm.pagination = response.data.pagination; 
            console.log(vm.orders);
        });
    },
    editOrder(item){
        const vm = this;
        $('#editOrderModal').modal('show');
        vm.tempOrder = Object.assign( {} ,item );
        vm.tempProduct = Object.assign( {}, item.products);
        console.log(vm.tempOrder);   
        console.log(vm.tempProduct);   
    },
    updateOrder(id){
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/order/${id}`;
        this.$http.put(api, { data: vm.tempOrder }).then(response => {
            //console.log(response.data);
            vm.isLoading = false; 
            if(response.data.success){
                $('#editOrderModal').modal('hide');
            }
        });
    }

  },
  computed:{
    filterArray(){
        const vm = this;
        let newArray = vm.orders.sort((a,b)=>{
            a = a[vm.value];
            b = b[vm.value];
            if(vm.isReverse === true){
                return a - b;
            }else{
                return b - a;
            }
        });
        return newArray;
    }
  },
  created(){
      this.getOrders();
  }
}
</script>