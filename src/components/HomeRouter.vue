<template>
    <div>
        <Nav/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Nav from './Nav';
import Footer from './Footer';
import Alert from './AlertMessage';

export default {
    components:{
        Nav,
        Footer,
        Alert,
    },
    // created(){
    //     window.onload = function(){
    //         if(document.body.scrollTop > 0){
    //             window.scrollTo(0, -1);
    //             document.body.scrollTop = 0;
    //         }
    //         window.scrollTo(0, -1);
    //         document.body.scrollTop = 0;
    //     }
    // }
}
</script>