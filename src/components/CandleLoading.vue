<template>
    <div>
        <div class="wrap">
            <div class="candle">L
                <div class="fire"></div>
            </div>
            <div class="candle">O
                <div class="fire"></div>
            </div>
            <div class="candle">A
                <div class="fire"></div>
            </div>
            <div class="candle">D
                <div class="fire"></div>
            </div>
            <div class="candle">i
                <div class="fire"></div>
            </div>
            <div class="candle">N
                <div class="fire"></div>
            </div>
            <div class="candle">G
                <div class="fire"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
    body{
        margin: 0 auto;
    }
    .bg{
        background: #aaa;
        z-index: 999;
    }
    .wrap{
        height: 100vh;
        font-family: 微軟正黑體;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .candle{
        height: 80px;
        width: 50px;
        position: relative;
        
        color: #F2C640;
        background-color: #cf455c;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px; 
        
        font-size: 45px;
        text-align: center;
        padding-top: 20px;
        margin-right: 5px;
        
        animation: jump 2s infinite;
    }
    @keyframes jump{
        0%{
            transform: translateY(0px);  
        }
        50%{
            transform: translateY(40px);  
            box-shadow:0 15px 0 rgb(242, 198, 64);
        }
        100%{
            transform: translateY(0px);  
        }
    }
    .candle span{
        display: block;
        font-size: 45px;
        margin-top: 20px;
        margin-left: 50%;
        transform: translateX(-50%);
        color: #F2C640;
    }
    .wrap div:nth-child(1){
        animation-delay: 0s;
    }
    .wrap div:nth-child(2){
        animation-delay: .1s;
    }
    .wrap div:nth-child(3){
        animation-delay: .2s;
    }
    .wrap div:nth-child(4){
        animation-delay: .3s;
    }
    .wrap div:nth-child(5){
        animation-delay: .4s;
    }
    .wrap div:nth-child(6){
        animation-delay: .5s;
    }
    .wrap div:nth-child(7){
        animation-delay: .6s;
    }
    .fire{
        height: 25px;
        width: 20px;
        clip-path: polygon(50% 0%, 76% 80%, 50% 99%, 20% 80%);
        background: #ff8a5c;
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 415px){
        .candle{
            width: 30px;
            height: 50px;
            font-size: 24px;
            padding-top: 10px;
        }
        .candle span{
            margin-top: 10px;
        }

    }
</style>




