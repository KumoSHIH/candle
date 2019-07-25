<template>
    <div>
        <loading :active.sync="isLoading" :is-full-page="true">
            <CandleLoading/>
        </loading>
        <div class="jumbotron banner">
            <div class="text-right mt-5">
                <h2 class="display-3 text-white d-none d-md-block text-shadow"><strong>炎日”靈魂特賣</strong></h2>
                <h2 class="text-center text-white d-md-none">夏日の靈魂特賣</h2>
                <h4 class="d-inline-block text-main bg-text-main p-2 mt-2"><strong>單筆消費滿999(含)以上，9折優惠 / 1399(含)以上，8折優惠 !!</strong></h4> 
                <p class="d-none d-md-block mt-4 text-white text-shadow">西元前三千年的古埃及，世界上第一支蠟燭出現，在人類生活中扮演重要的照明角色，直至愛迪生發明燈泡。<br>
                        天然植物香氛加入創意去滿足想像， 賦予蠟燭更多重的感官享受，如甜點般的療癒視覺、嗅覺與心靈。<br>
                        經由設計師的手工找回最純粹的溫度，提醒我們那個，被遺忘的美好大自然。     
                </p>    
            </div>
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10 col-md-4 col-lg-3">
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
                
                <div class="col-md-8 col-lg-9">
                    <div class="form-row justify-content-center justify-content-md-start mt-4 mt-md-0 mb-4">
                        <div class="col-10 col-md-4 mb-4 mb-md-0" v-for="item in filteredData" :key="item.id">                            
                            <Card :card-item="item" />
                        </div>
                        
                    </div>

                    <!-- pagenaiton -->
                    <!-- <nav class="my-5">
                        <ul class="pagination border-0">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
                            </li>
                            <li class="page-item" v-for="item in pages" :key="item.id" 
                                :class="{activePage: currentPage === page -1}">
                                <a class="page-link activePage" href="#" @click.prevent="currentPage = (page-1)">{{page}}</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </nav> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .banner{
        background: url(../../assets/images/bg3.jpg);
        background-position: 0 2%;
        background-size: cover;
        height: 450px;
    }
    
    @media (max-width: 768px){
        h2{
            margin-top: 100px;
        }
    }
    @media (max-width: 420px){
        .banner{
            background-position: 80% 0;
            background-size: cover;
            height: 400px;
        }
        h2{
            font-size: 40px;
            text-align: center;
            margin-top: 150px;
            color: #f76262;
        }
        h4{
            font-size: 20px;
            text-align: center;
        }
        
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
//pagination bs4
    
    .page-link{
        color: #574f7d;
        border: solid 2px #574f7d;
    }   
    .page-item:last-child .page-link{
        border-radius: 0;
    }
    .page-item:first-child .page-link{
        border-radius: 0;
    }
    .activePage{
        background-color: #574f7d;
        color: #fff;
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
            filteredData : {},//過濾後的資料 
            currentPage: 0,//目前所在的頁數
            pages: 0,

        }
    },
    methods:{
        getProduct(){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
            vm.isLoading = true;
            vm.$http.get(api).then((response) =>{
                //console.log(response.data);
                vm.products = response.data.products;
                //console.log(vm.products); 
                if(vm.listItem === '全部商品'){
                    //vm.filteredData = Object.assign({}, vm.products);
                    vm.filteredData = vm.products;
                }else{
                    vm.filteredData = vm.products.filter((item) => item.category === vm.listItem  
                    );
                };
                vm.isLoading = false;
            });
            
        },
        filterItem(name){
            //const newData = [];
            const vm = this;
            vm.listItem = name;
            vm.getProduct(vm.listItem);

            // vm.filteredData.forEach((item,i)=>{
            //     if(i % 9 ===0){
            //         newData.push([]) //每九筆資料新增一個空陣列
            //     }
            //     const page = parseInt(i / 9)
            //     newData[page].push(item)
            // })
            // vm.pages = newData.length;
            // vm.currentPage = 0;
            // return newData;
            
            
            //console.log(vm.filteredData);
        }
        
        
    },
    computed:{
        
    },
    created(){
        this.getProduct();
    },
}
</script>