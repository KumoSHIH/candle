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
                <a class="nav-link" href="#">大豆蠟燭</a>
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
        height: 50px;
        background-color: #000;
        z-index: 99;
        //opacity: .8;
        .nav-link{
            display: flex;
            align-items: center;
            justify-content: center;

            width: 120px;
            height: 50px;
            text-align: center;
            
            color: #fff;
            transition: .2s;
            &:hover{
                background-color: #fdef96;
                color: #574f7d;
            }
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
   
}
</script>