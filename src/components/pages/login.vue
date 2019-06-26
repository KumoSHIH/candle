<template>
  <div>
    <div class="loginImg"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-md-5" style="margin-top: 250px;">
          <div class="shadow">
            <ul class="nav nav-tabs" id="myTab" role="tablist" >
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab"
                  href="#signIn" role="tab"><font-awesome-icon icon="sign-in-alt" class="mr-1"/>登入</a> 
              </li>
              <li class="nav-item">
                <a class="nav-link "  id="profile-tab" data-toggle="tab" 
                  href="#register" role="tab"><font-awesome-icon icon="user-plus" class="mr-1"/>註冊</a>
              </li>
            </ul>
            <div class="tab-content bg-white pt-3" id="myTabContent">
              <div class="tab-pane fade show active" id="signIn" role="tabpanel">
                <div class="form-group px-4">
                  <label for="user">帳號</label>
                  <input type="text" class="form-control" id="user" placeholder="abc@email.com"
                    v-model="user.username">
                </div>
                <div class="form-group px-4">
                  <label for="password">密碼</label>
                  <input type="password" class="form-control" id="password"
                  v-model="user.password">
                </div>
                <input type="button" class="btn btn-outline-main col-3 ml-4 mb-4" value="登入"
                  @click.prevent="signIn">
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
export default {
  name: "HelloWorld",
  data() {
    return {
      user:{
        username: '',
        password: '',
      }
    };
  },
  methods:{
    signIn(){
      const api = `${process.env.APIPATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then((response) => {
        console.log(response.data);
        if(response.data.success){
          vm.$router.push('/admin/products'); //登入成功回到首頁
        }
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    //@import "~bootstrap/scss/bootstrap";
    //@import "../../assets/helpers/_variables.scss";
    @import "../../assets/_font.scss";
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

        background-color: $main;
        color: #fff;
        
        font-size: $font-m;
        font-weight: bold;
        letter-spacing: 2px;
        text-align: center;
        
        transition: .3s;
        &:hover{
            color: darken($text-main,20%);   
        }
    }
    .nav-link.active{
        color: $main;
        background-color: #fff;
        opacity: 1;
        &:hover{
            color: darken($main,20%);   
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
