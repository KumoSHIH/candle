<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="container pt-5">
            <div class="row d-flex justify-content-center mt-5">
                <div class="col-md-8 text-center ">
                    <h2 class="text-main mt-4 mt-md-0"><strong>8月優惠活動</strong></h2>
                    <hr>
                    <h6 class="text-text-light"><i class="fas fa-sun mr-2"></i>新加入會員首次購物享95折。</h6>
                    <h6 class="text-text-light"><i class="fas fa-sun mr-2"></i>當月壽星結帳可再折扣NT $50。</h6>
                    <h6 class="text-text-light"><i class="fas fa-sun mr-2"></i>結帳額滿指定價格可使用以下優惠券！</h6>
                    <hr>
                </div>
                
            </div>
            
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-7 col-md-4 wrap text-center py-2">
                    <div class="dashLine text-center">
                        <i class="fas fa-hand-holding-usd fa-4x text-info mt-3"></i>
                        <p class="h6 mt-3">結帳金額滿 999 (含)以上</p>
                        <p class="h6">輸入專屬優惠碼 , 即可享有優惠價!</p>
                    </div>
                </div>
                <div class="col-4 col-md-2 code text-center">
                    <div class="h1 mt-4 text-danger">
                        <strong>9折</strong>
                    </div>
                    <div class="text-white">結帳時請輸入優惠碼</div>
                    <div class="h6 text-danger mt-2">
                        <strong>candle90</strong>
                    </div>
                </div>
                <div class="grad"></div>
            </div>
            <div class="row d-flex justify-content-center my-5">
                <div class="col-7 col-md-4 wrap text-center py-2">
                    <div class="dashLine text-center">
                        <i class="fas fa-hand-holding-usd fa-4x text-info mt-3"></i>
                        <p class="h6 mt-3">結帳金額滿 1399 (含)以上</p>
                        <p class="h6">輸入專屬優惠碼 , 即可享有優惠價!</p>
                    </div>
                </div>
                <div class="col-4 col-md-2 code text-center">
                    <div class="h1 mt-4 text-danger">
                        <strong>8折</strong>
                    </div>
                    <div class="text-white">結帳時請輸入優惠碼</div>
                    <div class="h6 text-danger mt-2">
                        <strong>candle80</strong>
                    </div>
                </div>
                <div class="grad"></div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
  background-color: #f6e5e5;
  width: 500px;
}
.dashLine {
  border: dashed 2px #ca3e47;
}
.code {
  position: relative;
  background-color: #ff9776;
  cursor: pointer;
}
.grad {
  box-sizing: border-box;
  width: 5px;
  background-size: 10px 15px;
  background-image: radial-gradient(
    transparent 0px,
    transparent 3px,
    rgb(255, 151, 118) 3px,
    rgb(255, 151, 118)
  );
  background-position: 0 7px;
  
}
</style>