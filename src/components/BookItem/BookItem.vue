<template>
  <div class="home">
    <div
      class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
    >
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:w-48"
            :src="book.cover"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="py-4 px-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
          >
            {{ book.name }}·{{ book.author }}
          </div>
          <div class="block mt-1 text-md leading-tight font-medium">
            <span class="text-red-500 text-lg">¥49.00</span>
          </div>
          <p class="mt-2 mb-6 text-gray-500 text-sm">
            <span>销量：{{ book.sales }}</span>
            <span class="ml-6">库存：{{ book.stock }}</span>
          </p>
          <button
            class="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg--700 focus:outline-none"
          >
            加入购物车
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Book } from '@/api/book'
export default defineComponent({
  name: 'BookItem',
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true
    }
  }
})
</script>
