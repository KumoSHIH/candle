<template>
    <div>
        <div class="container">
            <div class="row justify-content-center no-gutters">
                <div class="col-md-7 mt-5">
                    <h2 class="text-center text-main mt-5"><strong>訂單確認</strong></h2>
                    <div class="step-wrap d-flex justify-content-between mt-4">
                        <div class="step1"><i class="fas fa-check success"></i></div>
                        <div class="step1"></div>
                        <div class="point"></div>
                    </div>
                </div>

                <div class="col-md-7 mt-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>品項</th>
                                <th>數量</th>
                                <th class="text-right">單價</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in order.products" :key="item.id">
                                <td>{{ item.product.title }}</td>
                                <td>{{ item.qty }}{{ item.product.unit }}</td>
                                <td class="text-right">NT {{ item.product.price | currency}}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <th colspan="2" class="text-right">總計</th>
                            <td class="text-right">NT {{ order.total | currency }}</td>
                        </tfoot>
                    </table>
                </div> 

                <div class="col-md-7 mt-5">
                    <h2 class="text-center text-main">付款</h2>
                    <form class="candle-form mt-3">
                        <div class="form-group">
                            <label for="card">信用卡卡號</label>
                            <input v-validate="'required'" name="card" :class="{'is-invalid': errors.has('card')}"
                            type="text" id="card" class="form-control" placeholder="1234-5678-9012-1234">
                            <span v-if="errors.has('card')" class="text-danger">請輸入正確卡號</span>
                        </div>
                        <div class="form-group">
                            <label for="firstName" class="">持卡人姓名</label>
                            <div class="d-flex justify-content-between">
                                <input v-validate="'required'" name="firstName" :class="{'is-invalid': errors.has('firstName')}"
                                type="text" id="firstName" class="form-control col-md-6" placeholder="姓">
                                
                                <input v-validate="'required'" name="lastName" :class="{'is-invalid': errors.has('lastName')}"
                                type="text" class="form-control col-md-6" placeholder="名">
                            </div>
                            <div class="d-flex">
                                <span v-if="errors.has('firstName')" class="text-danger mr-2">請輸入姓</span>
                                <span v-if="errors.has('lastName')" class="text-danger ">請輸入名字</span>    
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="isAvailable">有效期限</label>
                            <input v-validate="'required'" name="isAvailable" :class="{'is-invalide': errors.has('isAvailible')}"
                            type="month" id="isAvailable" class="form-control" placeholder="年/月"> 
                            <span v-if="errors.has('isAvailable')" class="text-danger">請輸入有效年/月</span>
                        </div>

                        <div class="form-group">
                            <label for="last3">背面末三碼</label>
                            <input v-validate="'required'" name="last3" :class="{'is-invalid': errors.has('last3')}"
                            type="text" id="last3" class="form-control" placeholder="123"> 
                            <span v-if="errors.has('last3')" class="text-danger">請輸入卡片背面末三碼</span>
                        </div>
                    </form>
                </div>

                <div class="col-md-7 mt-4">
                    <h2 class="text-center text-main">收件人資訊</h2>
                    <table class="table mt-3">
                        <tr>
                            <th>Email</th>
                            <td>{{ order.user.email }}</td>
                        </tr>
                        <tr>
                            <th>姓名</th>
                            <td>{{ order.user.name }}</td>
                        </tr>
                        <tr>
                            <th>收件人電話</th>
                            <td>{{ order.user.tel }}</td>
                        </tr>
                        <tr>
                            <th>收件人地址</th>
                            <td>{{ order.user.address }}</td>
                        </tr>
                        <tr>
                            <th>付款狀態</th>
                            <td v-if="!order.is_paid">未付款</td>
                            <td v-if="order.is_paid" class="text-success">付款完成</td>
                        </tr>
                    </table>
                </div>
                
                <button class="col-md-7 btn btn-main my-3" @click="payOrder">確認付款</button>
                
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    
</style>

<script>


export default {
    data(){
        return{
            order: {
                user:{},
            },
            orderID: '',
        }
    },
    methods:{
        getOrders(id){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderID}`;
            vm.$http.get(api).then((response)=>{
                //console.log(response.data);
                vm.order = response.data.order;
                //console.log(vm.order);
            })
        },
        payOrder(){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderID}`;
            vm.$validator.validate().then(valid => {
                if (valid) {
                    vm.$http.post(api).then((response)=>{
                        if(response.data.success){
                            vm.getOrders();
                            vm.$bus.$emit('updateCart');
                            vm.$router.push('/cart_fin');
                        }
                    })
                }else{
                    alert('欄位不完整');
                }
            });
        }
    },
    created(){
        //取得ID
        this.orderID = this.$route.params.orderID;//orderID>對應路由所自訂義的名稱
        this.getOrders();
    },
}
</script>