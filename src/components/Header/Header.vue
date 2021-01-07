<template>
  <div class="header shadow-md-b">
    <div class="flex justify-between items-center h-9 pt-10 pb-10 pl-12 pr-12">
      <comp-logo />
      <comp-menu />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CompLogo from '@/components/Logo/Logo.vue'
import CompMenu from '@/components/Menu/Menu.vue'
export default defineComponent({
  name: 'Header',
  components: {
    CompLogo,
    CompMenu
  }
})
</script>
