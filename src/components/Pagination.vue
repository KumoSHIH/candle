<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled': !pageNum.has_pre }">
                <a class="page-link" href="#" aria-label="Previous" @click.prevent="getPage(pageNum.current_page - 1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>

                <li class="page-item" v-for="page in pageNum.total_pages" :key="page"
                 :class="{'active': pageNum.current_page === page}">
                    <a class="page-link" href="#" @click.prevent="getPage(page)">{{ page }}</a></li>
        
                <li class="page-item" :class="{'disabled': !pageNum.has_next }">
                <a class="page-link" href="#" aria-label="Next" @click.prevent="getPage(pageNum.current_page + 1)">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
//Vue的資料和 元件的資料是分開的
//需要使用 props 來傳入資料
export default {
    //先在元件內設定型別
    props:{
        pageNum:{
            type: Object,
        }
    },
    methods:{
        getPage(page){
            this.$emit('getPage',page); //向外層傳遞
        },
    }
    
}
</script>