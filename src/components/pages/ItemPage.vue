<template>
    <div>
<<<<<<< HEAD
        <loading :active.sync="isLoading"></loading>
        <div class="container py-5">
            <div class="row d-flex justify-content-center mt-5">
                <div class="col-12 col-md-5" >
                    <div class="itemImg mt-4 mt-md-0" :style="{ backgroundImage: `url(${product.imageUrl})`}"></div>
                    <div class="mt-4 text-center text-md-left ">
=======
        <loading :active.sync="isLoading" :is-full-page="true">
            <template>
                <CandleLoading/>
            </template>
        </loading>
        <div class="container py-5">
            <div class="row d-flex justify-content-center mt-5">
                <div class="col-12 col-md-6 col-lg-5" >
                    <div class="itemImg mt-4 mt-md-0" :style="{ backgroundImage: `url(${product.imageUrl})`}"></div>
                    <div class="mt-4 text-center text-md-left ">
                        <div class="d-md-none">
                            <h2 class="mt-4 mt-md-0 text-center text-md-left"><strong>{{ product.title }}</strong></h2>
                        </div>
>>>>>>> rwd
                        <h5 class="text-info"><strong>商品介紹</strong></h5>
                        <hr>
                        <p>{{ product.content }}</p>
                        <p>香氛調性<br>{{ product.description }}</p>
                        <p>持續燃燒時間：54 hr</p>
                        <p>使用期限：2年</p>
                        <p>製造：台灣</p>
                        <p>重量：300g±10%</p>
                        <hr>
                        <p><strong>注意事項：</strong><br>第一次點燃大豆蠟燭時，請先修剪燭芯至0.5公分左右。如果燭芯過長，將容易加速燃燒您的蠟燭。<br>
                            在您第一次點燃大豆蠟燭時，請完全使表層的大豆蠟融化。如此一來，不但能夠預防中心點過低也能夠使所有的蠟完全的被燃燒，更可以延長您的蠟燭壽命。
                            請您避免將蠟燭放置在下風處、風扇或冷氣機出風口；風速將會加速蠟燭的燃燒速度，也會縮短您享受大豆蠟燭的時光。
                        </p>
                        
                    </div>
                </div>
<<<<<<< HEAD
                <div class="col-12 col-md-5">
=======
                <div class="col-12 col-md-6 col-lg-5">
>>>>>>> rwd
                    <h2 class="mt-4 mt-md-0 text-center text-md-left"><strong>{{ product.title }}</strong></h2>
                    <div class="text-center text-md-left">
                        <span class="h3 text-info"><strong>NT {{ product.price | currency }}</strong></span>
                        <span class="h5 text-secondary ml-2"><del>NT {{ product.origin_price | currency }}</del></span>
                    </div>
                    <div class=" mt-3 text-center text-md-left">
                        <span class="h6 bg-text-light text-light border border-text-light py-1 px-2">9折</span><span class="h6 border border-text-light py-1 px-2">結帳金額滿 $999</span>
                        
                    </div>
                    <div class="mt-3 text-center text-md-left">
                        <span class="h6 bg-text-light text-light border border-text-light py-1 px-2">8折</span><span class="h6 border border-text-light py-1 px-2 ">結帳金額滿 $1399</span>
                        
                    </div>
                    <div class="mt-4">
                        <label for="num" class="h6">數量</label>
                        <select name="" id="num" v-model="product.num" class="form-control" >
                            <option :value="num" v-for="num in 10" :key="num.id">
                                選購 {{ num }} {{ product.unit }}
                            </option>
                        </select>
                    </div>
                    <button class="btn btn-main mt-3 w-100" @click="addCart(product.id,product.num)">加入購物車</button>
                    <hr>
                    <p class="text-center text-md-left ">付款後，備貨到寄出商品為 2~6 個工作天。（不包含假日）</p>
                    <p class="text-center text-md-left ">統一發票中獎另會通知並寄送紙本發票</p>
                    <hr>    
                    <div class="text-center text-md-left ">
                        <h5 class="text-info"><strong>優惠活動</strong></h5>
                        <li class="text-text-light"><i class="fas fa-sun mr-2"></i>新加入會員首次購物享95折</li>
                        <li class="text-text-light"><i class="fas fa-sun mr-2"></i>當月壽星結帳可折扣NT$50</li>
                    </div>
                    <hr>
                    <div>
                        <h5 class="text-center text-md-left text-info"><strong>商品資訊</strong></h5>
                        <table class="table">
                            <tr>
                                <th width="10%">商品材質</th>
                                <td width="30%">蠟</td>
                            </tr>
                            <tr>
                                <th>製造方式</th>
                                <td>手工製造</td>
                            </tr>
                            <tr>
                                <th>商品產地</th>
                                <td>台灣</td>
                            </tr>
                            <tr>
                                <th>商品摘要</th>
                                <td>100%大豆蠟，用精油及香氛菁華配製而成。 天然純手工，燃燒時不會產生煙，適合任何空間。</td>
                            </tr>
                        </table>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .itemImg{
        height: 500px;
        width: 440px;
        background-size: cover;
        background-position: center center;
        margin: 0 auto;
    }
    li{
        list-style: none;
    }
<<<<<<< HEAD
=======
    @media (max-width: 420px){
        .itemImg{
            width: 100%;
        }
    }
    @media (min-width: 768px) and (max-width: 1200px){
        .itemImg{
            width: 100%;
        }
    }
>>>>>>> rwd
</style>

<script>

export default {
    data(){
        return{
            product: {},
            itemID: '',
            isLoading: false,
            
        }
    },
    methods: {
        getItemInfo(id){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
            vm.isLoading = true;
            vm.$http.get(api).then((response)=>{
                //console.log(response.data);
                vm.product = response.data.product;
                vm.isLoading = false;
            })
        },
        addCart(id,qty=1){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const cart = {
                product_id: id,
                qty,
            }
            vm.$http.post(api,{ data: cart }).then((response)=>{
                //console.log(response.data);
                vm.$bus.$emit('updateCart');
<<<<<<< HEAD
=======
                vm.$bus.$emit('message:push', response.data.message,'success');
>>>>>>> rwd
            })
        },
    },
    created(){
        const vm = this;
        vm.itemID = vm.$route.params.itemID;//須和路由設置一樣id名稱
        vm.getItemInfo(vm.itemID);
    }
}
</script>