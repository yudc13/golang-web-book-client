<template>
  <div class="layout">
    <comp-header />
    <div class="container mx-auto mt-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CompHeader from '@/components/Header/Header.vue'
export default defineComponent({
  name: 'Layout',
  components: {
    CompHeader
  }
})
</script>
