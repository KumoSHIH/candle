import Vue from 'vue';

Vue.prototype.$bus = new Vue();

//EventBus 主要是可以跨元件傳遞資料
//直接將bus掛在Vue的原型下 所以可以直接使用
//在哪個元件會觸發事件，就在那個元件寫 $bus.$on
//把使用方法寫在bus.js檔案 

//Message
//vm.$bus.$emit('message:push', message, status);
//message(String): 訊息內容
//status(String): Alert 樣式