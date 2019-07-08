<template>
    <div>
        <Nav/>
        <div class="jumbotron banner">
            <div class="text-right mt-5">
                <h1 class="display-3 text-dark">炎 ~ 夏日，特賣優惠</h1>
                <span class="lead text-main bg-text-main p-1"><strong>單筆消費滿999(含)以上，9折優惠 / 1599(含)以上，8折優惠 !!</strong></span> 
                <p class="d-none d-md-block mt-3 text-main">西元前三千年的古埃及，世界上第一支蠟燭出現，在人類生活中扮演重要的照明角色，直至愛迪生發明燈泡。<br>
                        天然植物香氛加入創意去滿足想像， 賦予蠟燭更多重的感官享受，如甜點般的療癒視覺、嗅覺與心靈。<br>
                        經由設計師的手工找回最純粹的溫度，提醒我們那個，被遺忘的美好大自然。     
                </p>    
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <SideMenu/>
                </div>
                
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .banner{
        background: url(../../assets/images/bg1.jpg);
        background-position: 10% ;
        background-size: cover;
        height: 400px;
    }

// card

</style>

<script>
import Nav from '../Nav';
import SideMenu from '../SideMenu';

export default {
    components:{
        Nav,
        SideMenu,
    },
    data(){
        return{
            products: [],

        }
    },
    methods:{
        getProduct(){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            vm.$http.get(api).then((response) =>{
                console.log(response.data);
                vm.products = response.data.products;
                console.log(vm.products);
            });
        },
    },
    created(){
        this.getProduct();
    },
}
</script>