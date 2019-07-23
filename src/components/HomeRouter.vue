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
<<<<<<< HEAD
=======
import Alert from './AlertMessage';
>>>>>>> rwd

export default {
    components:{
        Nav,
        Footer,
<<<<<<< HEAD
=======
        Alert,
>>>>>>> rwd
    }
}
</script>