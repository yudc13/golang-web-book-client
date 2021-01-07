<template>
  <div class="home">
    <form class="mb-8 text-center">
      <input
        placeholder="输入书名搜索"
        class="flex-1 appearance-none border border-transparent w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none ring-2 ring-purple-600 focus:border-transparent mr-4"
      />
      <button
        class="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
      >
        搜索
      </button>
    </form>
    <div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-10">
      <book-item v-for="book in bookList" :book="book" :key="book.id" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue'
import { Book, BookParams, queryBookList } from '@/api/book'
import BookItem from '@/components/BookItem/BookItem.vue'
export default defineComponent({
  name: 'Home',
  components: {
    BookItem
  },
  setup() {
    const bookList = ref<Book[]>([])
    const search = reactive<BookParams>({
      bookName: '',
      currentPage: 1,
      pageSize: 6
    })
    const fetchBookList = async (params: BookParams) => {
      try {
        const { data } = await queryBookList(params)
        bookList.value = data
      } catch (e) {
        console.log(e)
      }
    }
    onMounted(async () => {
      await fetchBookList(search)
    })
    return {
      search,
      bookList
    }
  }
})
</script>
