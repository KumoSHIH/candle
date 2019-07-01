<template>
  <div>
    <div class="d-flex justify-content-center mt-5">
      <div class="row">
        <div class="col-6 wrap text-center py-2">
          <div class="dashLine text-center">
            <i class="fas fa-hand-holding-usd fa-4x text-info mt-3"></i>
            <p class="h6 mt-3">結帳金額滿 999 (含)以上</p>
            <p class="h6">輸入專屬優惠碼 , 即可享有優惠價!</p>
          </div>
        </div>
        <div class="col-3 code text-center">
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
    </div>

    <div class="text-right">
      <button class="btn btn-main" @click="openCouponModal">建立優惠券</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>名稱</th>
          <th width="15%">折扣百分比</th>
          <th width="15%">到期日</th>
          <th width="15%">是否啟用</th>
          <th width="20%">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }} %</td>
          <td>{{ item.due_date }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn btn-outline-main btn-sm" @click="openCouponModal(false,item)">編輯</div>
            <div class="btn btn-outline-danger btn-sm" @click="delCoupon(item.id)">刪除</div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pageNum="pagination" @getPage="getCoupon" />
    

    <!-- Modal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <div class="col-sm-8">

                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title" placeholder="請輸入標題"
                  v-model="tempCoupon.title" />
                </div>

                <div class="form-group">
                  <label for="code">優惠代碼</label>
                  <input type="code" class="form-control" id="code" placeholder="請輸入代碼 : coupon88"
                  v-model="tempCoupon.code"/>
                </div>

                <div class="form-group">
                  <label for="date">優惠到期日</label>
                  <input type="date" class="form-control" id="date"
                  v-model="tempCoupon.due_date"/>
                </div>

                <div class="form-group">
                  <label for="percent">優惠折數</label>
                  <input type="text" class="form-control" id="percent" placeholder="請輸入折數  ex : 8折輸入80"
                  v-model="tempCoupon.percent" />
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="is_enabled"
                    v-model="tempCoupon.is_enabled"
                    :true-value="1" :false-value="0"/>
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" >取消</button>
            <button type="button" class="btn btn-primary" 
            @click="addCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  background-color: #eadca6;
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

<script>
import $ from 'jquery';
import Pagination from "../Pagination";

export default {
  components:{
    Pagination,
  },
  data() {
      return{
          coupons: [], //for loop
          tempCoupon: {}, //Modal input
          isNew: false,
          pagination: {}, 
      };
  },
  methods: {
    getCoupon(page=1){
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
      const vm = this;
     
      this.$http.get(api).then(response => {
        console.log(response.data);
        
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
        console.log(vm.coupons);
      });
    },
    openCouponModal(isNew, item){
      if(isNew){
        this.tempCoupon = {};
        this.isNew = true
      }else{
        this.tempCoupon = Object.assign( {},item );
        this.isNew = false;
      }
      $("#couponModal").modal('show');
    },
    addCoupon() {
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
      let httpMethod = 'post';
      const vm = this;
      
      if(!vm.isNew){
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
        httpMethod = 'put';
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then(response => {
        console.log(response.data);
        if(response.data.success){
          $("#couponModal").modal('hide');
          vm.getCoupon();
        }else{
          alert(response.data.message);
        }  
      });
    },
    delCoupon(id){
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${id}`;
      const vm = this;
      this.$http.delete(api).then(response => {
        if(response.data.success){
          vm.getCoupon();
        }
      });
    },
  },
  
  created(){
    this.getCoupon();
  }
};
</script>