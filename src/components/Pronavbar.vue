<template>
    <div>
        <ul class="nav proNav d-flex justify-content-end align-items-center">
            
            <li class="nav-item ">
                <router-link class="nav-link" to="/list">全部商品</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">新品上市</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/list"
                :class="{'active': listItem === '大豆蠟燭'}"
                @click.prevent="filterItem('大豆蠟燭')">大豆蠟燭</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">水晶蠟燭</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">創意蠟燭</a>
            </li>
            <li class="nav-item mr-4">
                <a class="nav-link" href="#">香氛蠟燭</a>
            </li>
        </ul>
        
    </div>
</template>

<style lang="scss" scoped>
    .proNav{
        position: fixed;
        top: 50px;
        width: 100%;
        height: 60px;
        background-color: #000;
        z-index: 99;
        opacity: .7;
        transition: .2s;
        &:hover{
            opacity: 1;
        }
        .nav-link{
            float: left;
            width: 120px;
            height: 30px;
            text-align: center;
            
            color: #fff;
            transition: .2s;
        }
        .nav-link::after{
            content:'';
            display: block;
            clear: both;
            width: 0%;
            border-bottom: solid 2px #fdef96;

            margin: auto;
            position: relative;
            top: 5px;
            transition: .3s;
            
        }
        .nav-link:hover::after{
            width: 100%;
            
        }
    }
    .navHide{
        opacity: .5;
    }
    
</style>

<script>
import $ from 'jquery';
$(document).scroll(function(e){
    e.preventDefault();
    let scrollPos = $(window).scrollTop();
    let windowHeight = $(window).height();

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        $('.proNav').each(function(){
            //console.log(scrollPos,windowHeight,thisPos);
            let thisPos = $(this).offset().top; //proNav的位置
            //console.log("proNav",thisPos);
            // if(scrollPos >= thisPos){
            //     $(this).addClass('navHide');
            // }else if (scrollPos <= thisPos){
            //     $(this).removeClass('navHide');
            // }
        })

})
})



export default {
    data(){
        return{
            products: [],
            listItem: '',
            filterData: {},
        }
    },
    methods: {
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
            //vm.$router.push('/list');
            vm.listItem = name;
            vm.getProduct(vm.filterName);
            console.log(vm.filteredData);
            vm.$bus.$on('toCategory', ()=>{
                vm.getProduct();
                
            });
            vm.$router.push('/list');
            
        }
    },
    created(){
        this.getProduct();
    },
}
</script>