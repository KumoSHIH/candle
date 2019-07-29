<template>
    <div>
        <loading :active.sync="isLoading">
            <CandleLoading/>
        </loading>
        <Nav/>
        <div class="bgImg"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10 col-md-5 bg-white shadow" style="margin-top: 250px;">
                    <h3 class="text-center text-main pt-5">管理員登入</h3>
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
                    <div class="form-group px-4">
                        <button class="btn btn-outline-second form-control my-4" 
                        @click.prevent="signIn" @keyup.enter="signIn">登入</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .bgImg{
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-image: url('../../assets/images/bg4.jpg');
        background-position: 40% 20%;
        background-size: cover;
    }
    .shadow{
        box-shadow: 4px 5px 5px 4px rgba( 0, 0, 0, .8);
        border-radius: 5px;
        opacity: .9;
    }

    
</style>


<script>
import Nav from '../Nav';
export default {
    components:{
        Nav,
    },
    data() {
        return {
            user:{
                username: '',
                password: '',
            },
            isLoading : false,
        };
    },
    methods:{
        signIn(){
            const api = `${process.env.APIPATH}/admin/signin`;
            const vm = this;
            vm.isLoading = true;
            this.$http.post(api, vm.user).then((response) => {
                //console.log(response.data);
                vm.isLoading = false;
                if(response.data.success){
                    vm.$router.push('/admin/products'); 
                }
            });
        },
    }
}
</script>