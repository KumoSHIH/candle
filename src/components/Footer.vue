<template>
    <div>
        <div class="footer container-fluid bg-main">
            <div class="row justify-content-center text-light">
                <div class="col-md-4 d-flex flex-column text-center mt-5">
                    <h6>關於我們</h6>
                    <a href="#">實體店面</a>
                    <a href="#">一般問題</a>
                    <a href="#">人才招募</a>
                </div>
                <div class="col-md-4 d-flex flex-column text-center mt-5">
                    <h6>顧客服務</h6>
                    <a href="#">運送方式</a>
                    <a href="#">付款方式</a>
                    <a href="#">會員優惠</a>
                </div>
                <div class="col-md-4 text-center mt-5">
                    <h6>聯絡我們</h6>
                    <span>tel : 02-22345678</span>
                    <p>聯絡時間：AM 10:00~PM 17:00</p>
                    <a href="#"><i class="fab fa-facebook-square fa-3x mr-2"></i></a>
                    <a href="#"><i class="fab fa-instagram fa-3x mr-2"></i></a>
                    <a href="#"><i class="fab fa-line fa-3x"></i></a>
                </div>
                
                <p class="col-12 text-center mt-3">僅做為個人學習使用，非商業用途。</p>
                <p class="col-12 text-center">2019 © canMade｜手工蠟燭</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer{
        height: 280px;
    }
    a{
        text-decoration: none;
        color: #ebebeb;
        transition: .2s;
        &:hover{
            color: #f76262;
        }
    }
    @media (max-width:765px) {
        .footer{
            height: 100%;
        }
    }
    
</style>