 <template>
  <div class="message-alert">
      <div class="candle-alert alert-dismissible"
        :class="'alert-' + item.status"
        v-for="(item, i) in messages" :key="i">
          <i class="far fa-check-circle"></i>
          <span class="d-block mt-3">{{ item.message }}</span>
          <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
  .message-alert{
    max-width: 100vw;
    top: 40%;
    right: 50%;
    transform: translate(50%);
  }
  .candle-alert{
    width: 300px;
    height: 150px;
    border-radius: 10px;
    background-color: lighten(#95adbe,25%);
    text-align: center;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.4);

    .fa-check-circle{
      font-size: 50px;
      text-align: center;
      margin-top: 10%;
    }
  }
  //bs4
  .alert-dismissible {
    padding-right: 0;
  // Adjust close link position
  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    color: inherit;
  }
}
  
</style>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      messages: [
        //   {
        //     message: '訊息內容',
        //     status: 'danger',
        //     timestamp: 123,
        // }
      ],
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) { //5秒後自行移除
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
  },
  created() {
    const vm = this;

    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    vm.$bus.$on('message:push', (message, status = 'warning') => { //外層用on去註冊
      vm.updateMessage(message, status);
    });
    //vm.$bus.$emit('message:push'); //內層用emit去觸發
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>