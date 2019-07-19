<template>
    <div>
        <div class="finBanner">
            <div class="row d-flex justify-content-center no-gutters">
                <div class="wrap col-md-8 col-lg-4 px-5">
                    <div class="row no-gutters flex-column">
                        <div class="col mt-4">
                            <h2 class="text-center text-main mt-5"><strong>訂購完成</strong></h2>
                            <div class="step-wrap d-flex justify-content-between mt-4">
                                <div class="step1"><i class="fas fa-check success"></i></div>
                                <div class="step1"><i class="fas fa-check success"></i></div>
                                <div class="step1"><i class="fas fa-check success"></i></div>
                            </div>
                        </div>

                        <div class="col text-center mt-4">
                            <h4 class="text-main">感謝您的購買！<br>商品將會在2~6個工作天內送達！</h4>
                            <router-link to="/">
                                <button class="btn btn-main my-4 ">回到首頁</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .finBanner{
        background-image: url('../../assets/images/bg2.jpg');
        background-position: 0 0;
        background-size: cover;
        height: 100%;
        width: auto;
    }
    .wrap{
        background-color: rgba(255,255,255,.5);
        border-radius: 6px;
        padding: 0 20px;
        //padding: 0 20px;
        position: absolute;
        top: 20%;
        box-shadow: 0px 3px 8px rgba(0,0,0,.6);
        box-shadow: 0px 3px 5px rgba(0,0,0,.6);
    }
    @media (min-width: 320px) and (max-width: 420px){
        .finBanner{
            height: 650px;
            width: 100%;
        }
        .wrap{
            top: 25%;
            width: 80%;
        } 
    }
    @media (min-width: 767px){
        .finBanner{
            height: 780px;
            width: 100%;
        }
        .wrap{
            top: 25%;
        } 
    }
</style>