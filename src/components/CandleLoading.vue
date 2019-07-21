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
    // .candle{
    //     height: 180px;
    //     width: 50px;
    //     position: fixed;
    //     margin-top: 5%;
    //     top: 30%;
    //     left: 50%;
    //     z-index: 1000;
    // }
    // .candle:after{
    //     content: '';
    //     display: block;
    //     width: 50px;
    //     height: 180px;
    //     border-top-right-radius: 7px;
    //     border-top-left-radius: 7px;
    //     position: absolute;
    //     max-height: 0;
    //     background-color: #cf455c;
    //     box-shadow: 0px 5px 8px #aaa;
    //     animation: load 2s linear infinite;
    // }

    // .fire{
    //     height: 25px;
    //     width: 20px;
    //     clip-path: polygon(50% 0%, 76% 80%, 50% 99%, 20% 80%);
    //     background: #ff8a5c;
    //     position: absolute;
    //     top: 0%;
    //     left: 50%;
    //     transform: translateX(-50.5%);
    //     z-index: 1000;
        
    //     animation: fire 2s linear infinite;
    // }

    // @keyframes load{
    //     0%{
    //         max-height: 100%;
    //         top: 0;
    //         background: #8559a5;
    //     }
    //     50%{
    //         max-height: 50%;
    //         top: 50%;
    //     }
    //     100%{
    //         max-height: 50px;
    //         top: 90%;
    //         background: #cf455c;
    //     }
    // }
    // @keyframes fire{
    //     0%{
    //         top: -15%;
    //     }
    //     30%{
    //         top: 15%;
    //     }
    //     50%{
    //         top: 35%;
    //     }
    //     80%{
    //         top: 60%;
    //     }
    //     100%{
    //         top: 76%;
    //     }
    // }
</style>




