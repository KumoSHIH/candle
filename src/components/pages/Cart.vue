<template>
    <div>
<<<<<<< HEAD
        <loading :active.sync="isLoading"></loading>
        <Nav/>
=======
        <loading :active.sync="isLoading">
            <CandleLoading/>
        </loading>
        
>>>>>>> rwd
        <div class="cartWrap container pt-5">
            <div class="row">
                <div class="col-md-8 mt-5">
                    <h3 class="text-center text-main bg-text-main py-2 mb-4 mt-4 mt-md-0">我的購物車</h3>
                    <tr v-for="item in cart.carts" :key="item.id"
                    class="d-flex justify-content-around align-items-center mb-3">
                        <th width="20%" class="itemImg" :style="{backgroundImage:`url(${item.product.imageUrl})`}"></th>
                        <th class="align-middle">{{item.product.title}}
                            <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                        </th>
                        <th width="5%">{{item.qty}}{{item.product.unit}}</th> 
                        <th width="10%" >
                            <div :class="{'delLine': item.coupon}">NT{{(item.product.price)*(item.qty) | currency}}</div> 
                            <div class="text-danger" v-if="item.coupon">NT{{ item.final_total | currency }}</div>
                        </th>
                        <th width="5%">
                            <button class="btn text-main" @click="delCart(item.id)">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </th>
                    </tr>
                    <div class="input-group col-md-8 mt-5 ml-3 mb-4">
                        <input class="form-control" v-model="coupon_code"
                        type="text" id="coupon" placeholder="請輸入優惠券代碼">
                        <div class="input-group-append">
                            <button class="btn btn-outline-main" @click="addCoupon">套用優惠碼</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-5">
                    <h3 class="text-center bg-main text-light py-2">訂單小計</h3>
                    <div class="d-flex justify-content-between mt-3 px-2">
                        <span class="h6">小計</span>
                        <span class="h6">NT{{ cart.total |currency }}</span>
                    </div>
                    <div class="d-flex justify-content-between px-2" v-if="cart.final_total !== cart.total">
                        <span class="h6 text-danger">優惠券</span>
                        <span class="h6 text-danger">NT{{ cart.final_total |currency }}</span>
                    </div>
                    <div class="d-flex justify-content-between mt-3 px-2">
                        <span class="h5"><strong>總計</strong></span>
                        <span class="h5"><strong>NT{{ cart.final_total |currency }}</strong></span>
                    </div>
                    <router-link to="cart_address">
                        <button class="btn btn-second w-100 py-2 mt-3 mb-5 mb-md-0">送出訂單 ></button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
    .cartWrap{
        min-height: calc(100vh - 280px);
    }
    .itemImg{
        width: 150px;
        height: 100px;
        background-image: url(../../assets/images/h1.jpg);
        background-position: center center;
        background-size: cover;
    }
    .delLine{
        text-decoration: line-through;
    }
</style>
    
<script>
import Nav from '../Nav';

export default {
    components:{
        Nav,
    },
    data(){
        return{
            cart:[],
            isLoading: false,
            coupon_code: '',
        }
    },
    methods:{
        getCart(){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.isLoading = true;
            vm.$http.get(api).then((response)=>{
                //console.log(response.data);
                vm.cart = response.data.data;
                //console.log(vm.cart);
                vm.$bus.$emit('updateCart');
                vm.isLoading = false;
            })
        },
        delCart(id){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            vm.$http.delete(api).then((response)=>{
                //console.log(response);
                vm.$bus.$emit('updateCart');
                vm.getCart();
            })
        },
        addCoupon(){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
            const coupon = {
                code : vm.coupon_code
            }
            vm.$http.post(api, { data: coupon }).then((response)=>{
                //console.log(response);
                vm.getCart();
            })
        },
    },
    created(){
        this.getCart();
    }
}
</script>