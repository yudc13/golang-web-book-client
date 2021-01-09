<template>
  <div class="menu">
    <div
      v-if="isLogin"
      class="text-md font-medium rounded-md border-purple-200 ring-1 py-2 px-4"
    >
      欢迎：{{ user.username }}
    </div>
    <button
      v-if="!isLogin"
      @click="goLoginPage"
      class="py-2 px-4 text-purple-500 rounded-lg hover:shadow-md focus:outline-none mr-4"
    >
      登陆
    </button>
    <button
      v-if="!isLogin"
      @click="goRegisterPage"
      class="py-2 px-4 bg-purple-500 text-white rounded-lg  hover:shadow-md focus:outline-none"
    >
      注册
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { State } from '@/store'
export default defineComponent({
  name: 'Menu',
  setup() {
    const store = useStore<State>()
    const router = useRouter()
    const user = store.state.user
    const isLogin = store.getters.isLogin
    const goLoginPage = () => {
      router.push('/login')
    }
    const goRegisterPage = () => {
      router.push('/register')
    }
    return {
      user,
      isLogin,
      goLoginPage,
      goRegisterPage
    }
  }
})
</script>
