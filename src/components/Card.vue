<template>
    <div>
        <div class="card h-100 border-0 mb-3">
            <div class="img-top" 
            @click="itemPage(cardItem.id)"
            :style="{ backgroundImage: `url(${cardItem.imageUrl})` }"><div class="mask"></div></div>
            <div class="card-body">
                <span class="badge badge-pill badge-info float-right p-2">{{cardItem.category}}</span>
                <h4 class="card-title"><strong>{{cardItem.title}}</strong></h4>
                <p class="card-text"><small class="text-muted">{{cardItem.content}}</small></p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-baseline">
                <div class="price h5">限時優惠 <strong class="text-danger">{{cardItem.price | currency}}</strong></div>
                <button class="btnCart" @click="addCart(cardItem.id,cardItem.qty)"
                ><i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
// card
    .card{
        box-shadow: 0px 3px 5px #aaa;
    }
    .img-top{
        height: 150px;
        background-size: cover;
        background-position: center center;
        cursor: pointer;
        position: relative;
        overflow: hidden; 
    }
    
    .img-top:hover .mask{
        top: 0;
        &:after{
            content: '查看商品細節';
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            border: solid 2px #fff;
            padding: 5px 10px;
        }
    }   
    .mask{
        position: absolute;
        top: 150px;
        left: 0;
        width: 100%;
        height: 150px; 
        background-color: rgba(0,0,0,.5); 
        transition: .3s;
    }
    .card-footer{
        background-color: #fff;
        border-top: 0;
    }
    .btnCart{
        width: 40px;
        height: 40px;
        border: 0;
        border-radius: 100%;
        color: #574f7d;
        background-color: #fdef96;
        font-size: 16px;
        transition: .5s;

        &:hover{
            //color: darken(#574f7d,10%);
            //background-color: darken(#fdef96,10%);
            color: #fff;
            background-color: #eb5f5d;
        }
    }
    
</style>

<script>
export default {
    props: ['cardItem'],
    data(){
        return{
            cartDetail : [],

        }
    },
    methods:{
        addCart(id, qty = 1){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const cart = {
                product_id : id,
                qty,
            };
            vm.$http.post(api, {data:cart}).then((response)=>{
                vm.cartDetail = response.data.data;
                //console.log(vm.cartDetail);
                vm.$bus.$emit('updateCart');
                vm.$bus.$emit('message:push', '已加入購物車', 'success');
            })
        },
        itemPage(id){
            const vm = this;
            vm.$router.push(`item_page/${id}`);

        },
    },
}
</script>