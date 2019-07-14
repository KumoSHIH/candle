<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="jumbotron banner">
            <div class="text-right mt-5">
                <h1 class="display-3 text-dark">炎〞夏日，特賣優惠</h1>
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
                    <ul>
                        <li>
                            <a href="#" class="list text-white">產品列表</a> 
                        </li>
                        <li>
                            <a href="#" class="list list-item"
                            :class="{'active': listItem === '全部商品'}"
                            @click.prevent="filterItem('全部商品')">全部商品</a> 
                        </li>
                        <li>
                            <a href="#" class="list list-item"
                            :class="{'active': listItem === '新品上市'}"
                            @click.prevent="filterItem('新品上市')">新品上市</a> 
                        </li>
                        <li>
                            <a href="#" class="list list-item"
                            :class="{'active': listItem === '大豆蠟燭'}"
                            @click.prevent="filterItem('大豆蠟燭')">大豆蠟燭</a> 
                        </li>
                        <li>
                            <a href="#" class="list list-item"
                            :class="{'active': listItem === '果凍蠟燭'}"
                            @click.prevent="filterItem('果凍蠟燭')">果凍蠟燭</a> 
                        </li>
                        <li>
                            <a href="#" class="list list-item"
                            :class="{'active': listItem === '創意蠟燭'}"
                            @click.prevent="filterItem('創意蠟燭')">創意蠟燭</a> 
                        </li>
                        <li>
                            <a href="#" class="list list-item"
                            :class="{'active': listItem === '香氛蠟燭'}"
                            @click.prevent="filterItem('香氛蠟燭')">香氛蠟燭</a> 
                        </li>
                    </ul>
                </div>
                
                <div class="col-md-9">
                    <div class="form-row">
                        <div class="col-md-4" v-for="item in filteredData" :key="item.id">                            
                            <Card :card-item="item" />
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
//side Menu
    ul{
        position: sticky;
        top: 70px;
        list-style: none;
        padding: 0;
        border: solid 1px #574f7d;
    }
    ul:last-of-type{
        border-bottom: 0;
    }
    li:first-child{
        background-color: #574f7d;
    }
    .list{
        display: block;
        padding: 10px 0;

        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        letter-spacing: 1.5px;
        
    }
    .list-item{
        color: #000;
        border-bottom: solid 1px #574f7d;
        cursor: pointer;
        transition: .2s;  
        &:hover,&:active{
            background-color: #95adbe;
            color: #574f7d;
        }
    }
    .active{
        background-color: #95adbe;
        color: #fff;
        border-bottom: solid 0.5px #574f7d;
    }

</style>

<script>
import Card from '../Card';

export default {
    components:{
        Card,
    },
    data(){
        return{
            products: [],
            isLoading: false,
            listItem : '全部商品',
            filteredData : {},

        }
    },
    methods:{
        getProduct(){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            vm.isLoading = true;
            vm.$http.get(api).then((response) =>{
                //console.log(response.data);
                vm.products = response.data.products;
                //console.log(vm.products);
                if(vm.listItem === '全部商品'){
                    vm.filteredData = Object.assign({}, vm.products);
                }else{
                    vm.filteredData = vm.products.filter(function(item){
                        if(item.category === vm.listItem){
                            return true;
                        }
                    });
                };
                vm.isLoading = false;
            });
            
        },
        filterItem(name){
            const vm = this;
            vm.listItem = name;
            vm.getProduct(vm.filterName);
            console.log(vm.filteredData);
        }
        
    },
    created(){
        this.getProduct();
    },
}
</script>