<template>
    <div>
        <div class="text-right mt-4">
            <div class="btn btn-main">建立新的產品</div>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">分類</th>
                    <th>產品名稱</th>
                    <th width="120">原價</th>
                    <th width="120">售價</th>
                    <th width="120">是否啟用</th>
                    <th width="100">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in products" :key="item.id">
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td class="text-right">{{item.origin_price}}</td>
                    <td class="text-right">{{item.price}}</td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <div class="btn btn-outline-info btn-sm">編輯</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    data(){
        return{
            products: [],//儲存新增的資料
        };
    },
    methods: {
        getProducts(){
            //取得遠端資料
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            const vm = this;
            this.$http.get(api).then((response) => {
                console.log(response.data);
                vm.products = response.data.products;
            });
        },
    },
    created(){
        this.getProducts();
    },
}
</script>
