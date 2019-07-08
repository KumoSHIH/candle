<template>
    <div>
        <ul class="nav py-2 pr-5 bg-main ">
            <li class="logo mr-auto ml-4 d-flex align-items-center" >
                <router-link to="/home">
                    <img src="../assets/images/title02.png" height="30">
                </router-link>
            </li>
            
            <li class="nav-item searchWrap">
                <div class="icon d-inline-flex align-items-center">
                    <input type="text" class="searchInput">
                    <a class="nav-link " href="#"><i class="fas fa-search "></i></a>
                </div>
            </li>

            <li class="nav-item ">
                <a class="nav-link " href="#"><i class="far fa-comment"></i></a>
            </li>

            <li class="nav-item">
                <router-link to="/login">
                    <a class="nav-link" href="#"><i class="far fa-user"></i></a>
                </router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></a>
            </li>
            
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .nav{
        position: fixed;
        z-index: 99;
        width: 100%;
    }
    .far,.fas{
        font-size: 18px;
        color: #fff;
        &.far:hover,&.fas:hover{
            color: #fdef96;
        }
    }
    .icon:hover .searchInput{
        border: solid 1px #f4f4f4;
        padding-left: 10px;
        //position: relative;
        animation: move .8s;
        animation-fill-mode: forwards;
        //animation-play-state: move 2s;

    }
    .searchInput{
        border-radius: 5px;
        border: 0;
        height: 30px;
        
        width: 0;
    }
    @keyframes move{
        0% {opacity: .0; width: 0;}
        100% {opacity: .8; width: 150px;}
    }
    
</style>