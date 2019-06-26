<template>
  <div>
    <Navbar/>  
    <div class="container-fluid">
      <div class="row">
        <Sidebar/>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './NaVbar';
import Sidebar from './Sidebar';

export default {
    //匯入元件
    components:{
        Navbar,
        Sidebar,
    },
    
};
</script>