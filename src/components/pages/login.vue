<template>
  <div>
    <Nav/>
    <div class="loginImg"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-md-5" style="margin-top: 250px;">
          <div class="shadow">
            <ul class="nav nav-tabs" id="myTab" role="tablist" >
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab"
                  href="#signIn" role="tab"><i class="fas fa-sign-in-alt mr-1"></i>會員登入</a> 
              </li>
              <li class="nav-item">
                <a class="nav-link "  id="profile-tab" data-toggle="tab" 
                  href="#register" role="tab"><i class="fas fa-user-plus mr-1"></i>註冊會員</a>
              </li>
            </ul>
            <div class="tab-content bg-white pt-3" id="myTabContent">
              <div class="tab-pane fade show active" id="signIn" role="tabpanel">
                <div class="form-group px-4">
                  <label for="user">帳號</label>
                  <input type="text" class="form-control" id="user" placeholder="abc@email.com">
                    
                </div>
                <div class="form-group px-4">
                  <label for="password">密碼</label>
                  <input type="password" class="form-control" id="password">
                  
                </div>
                <input type="button" class="btn btn-outline-main col-3 ml-4 mb-4" value="登入">
              </div>
              <div class="tab-pane fade " id="register" role="tabpanel">
                  <div class="form-group px-4">
                    <label for="setUser">帳號</label>
                    <input type="text" class="form-control" id="setUser" placeholder="abc@email.com">
                  </div>
                  <div class="form-group px-4">
                    <label for="setPassword">密碼</label>
                    <input type="password" class="form-control" id="setPassword" placeholder="8~12位元英文+數字">
                  </div>
                  <div class="form-group px-4">
                    <label for="recheck">再次確認密碼</label>
                    <input type="password" class="form-control" id="recheck" placeholder="8~12位元英文+數字">
                  </div>
                  <input type="button" class="btn btn-outline-main col-3 ml-4 mb-4 " value="註冊">
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../Nav';

export default {
  name: "HelloWorld",
  components:{
    Nav,
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//@import "../../assets/_font";
    //login background
    .loginImg{
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-image: url('../../assets/images/login2.jpg');
        background-position: center center;
        background-size: cover;
        opacity: .9;
    }
    // bs4
    .nav-item{
      width: 50%;
    }
    .nav-tabs{
        border-bottom: 0;
        .nav-item{
            margin-bottom: -2px;
        }
        .nav-link{
            border: 0;
        }
    }
    .nav-link{
        padding-top: 12px;
        padding-bottom: 12px;

        background-color: #574f7d;
        color: #fff;
        
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 2px;
        text-align: center;
        
        transition: .3s;
        &:hover{
            color: darken(#fdef96,20%);   
        }
    }
    .nav-link.active{
        color: #574f7d;
        background-color: #fff;
        opacity: 1;
        &:hover{
            color: darken(#574f7d,20%);   
        }
    }
    .tab-content{
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    //
    label{
      cursor: pointer;
    }
    .shadow{
      box-shadow: 4px 5px 5px 4px rgba( 0, 0, 0, .8);
    }
</style>
