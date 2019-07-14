<template>
    <div>
        <div class="card h-100 border-0 mb-3">
            <div class="img-top" :style="{ backgroundImage: `url(${cardItem.imageUrl})` }"></div>
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
                //console.log(response);
                vm.cartDetail = response.data.data;
                console.log(vm.cartDetail);
                vm.$bus.$emit('updateCart');

            })
        },
    },
}
</script>