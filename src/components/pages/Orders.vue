<template>
    <div>
        <!-- Loading 效果 -->   
        <loading :active.sync="isLoading"></loading>

        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="150">購買時間</th>
                    <th>Email</th>
                    <th>購買款項</th>
                    <th width="120">應付金額</th>
                    <th width="120">是否付款</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in orders" :key="item">
                    <td>{{ orders.create_at }}</td>
                    <td>{{ orders.user.email }}</td>
                    <td>{{  }}</td>
                    <td>{{ orders.total }}</td>
                    <td>{{ orders.is_paid }}</td>
                </tr>
            </tbody>
        </table>

        <Pagination :pageNum="pagination" @getPage="getOrders" ></Pagination>
        
    </div>
</template>

<script>
import $ from "jquery";
import Pagination from "../Pagination";

export default {
  components:{
    Pagination,    
  },
  data (){
      return{
          isLoading: false,
          pagination: {}, 
          orders: [],
          messages: [],
      }
  },
  methods:{
      getOrders(page = 1) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true; 
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false; 

        vm.products = response.data.products;
        vm.pagination = response.data.pagination; 
      });
    },

  },
}
</script>