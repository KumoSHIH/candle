<template>
    <div>
        <ul class="sticky-top">
            <li>
                <a class="list text-white">產品列表</a> 
            </li>
            <li>
                <a class="list list-item">全部商品</a> 
            </li>
            <li>
                <a class="list list-item">新品上市</a> 
            </li>
            <li>
                <a class="list list-item">大豆系列</a> 
            </li>
            <li>
                <a class="list list-item">水晶系列</a> 
            </li>
            <li>
                <a class="list list-item">特色系列</a> 
            </li>
            <li>
                <a class="list list-item">材料專區</a> 
            </li>
            <li>
                <a class="list list-item">即將推出</a> 
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
//side Menu
    ul{
        list-style: none;
        padding: 0;
        border: solid 2px #574f7d;
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
        border-bottom: solid 2px #574f7d;
        cursor: pointer;
        transition: .2s;  
        &:hover,:focus{
            background-color: #95adbe;
            color: #574f7d;
        }
    }
    .active{
        background-color: #95adbe;
        color: #fff;
        border-bottom: solid 0.5px #aaa;
    }
    
</style>