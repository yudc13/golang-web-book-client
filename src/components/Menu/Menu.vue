<template>
  <div class="menu">
    <button
      class="py-2 px-4 text-green-500 rounded-lg hover:shadow-md focus:outline-none mr-4"
    >
      登陆
    </button>
    <button
      class="py-2 px-4 bg-green-500 text-white rounded-lg  hover:shadow-md focus:outline-none"
    >
      注册
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Menu'
})
</script>
