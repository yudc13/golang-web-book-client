<template>
  <div class="login">
    <div class="login__content rounded-md shadow-md p-12">
      <h3 class="text-center mb-6 font-bold text-xl">用户注册</h3>
      <div
        v-show="showErrorMsg"
        class="mb-6 text-sm bg-red-100 py-2 px-4 rounded text-red-400"
      >
        {{ errorMsg }}
      </div>
      <input
        v-model="loginForm.username"
        class="border border-gray-400 bg-white text-gray-900 appearance-none inline-block w-full rounded py-3 px-4 focus:outline-none"
        type="text"
        placeholder="请输入用户名"
      />
      <input
        v-model="loginForm.password"
        class="border border-gray-400 bg-white text-gray-900 appearance-none inline-block w-full rounded py-3 px-4 focus:outline-none mt-12"
        type="password"
        placeholder="请输入密码"
      />
      <button
        @click="handleLogin"
        class="py-4 px-4 bg-green-500 text-white text-xl rounded-lg w-full hover:shadow-md focus:outline-none mt-12"
      >
        登 陆
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { login } from '@/api/user'
export default defineComponent({
  name: 'Login',
  setup() {
    const loginForm = reactive({
      username: '',
      password: ''
    })
    const errorMsg = ref('')
    const showErrorMsg = computed(() => errorMsg.value !== '')
    const handleLogin = async () => {
      try {
        const { data } = await login(loginForm.username, loginForm.password)
        console.log(data)
      } catch (e) {
        errorMsg.value = e
      }
    }
    return {
      loginForm,
      errorMsg,
      showErrorMsg,
      handleLogin
    }
  }
})
</script>

<style lang="less" scoped>
.login {
  position: relative;
  &__content {
    position: absolute;
    top: 200px;
    left: 50%;
    margin-left: -250px;
    width: 500px;
  }
}
</style>
