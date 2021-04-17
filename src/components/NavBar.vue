<template>
  <Alert v-if="isError" />
  <div class="navbar mb-2 shadow-lg bg-blue-800 text-content-100">
    <div class="flex-1 px-2 mx-2">
      <dashicons:games />
      <span class="text-3xl font-bold tracking-tighter"> BG </span>
      <span class="text-3xl font-thin tracking-tighter"> AMEZ </span>
    </div>
    <div class="flex-none flex px-2 mx-2">
      <div class="flex">
        <router-link
          to="/"
          class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
        >
          Home
        </router-link>
        <router-link
          to="/BestSellers"
          class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
        >
          Best Sellers
        </router-link>
        <router-link
          to="/Deals"
          class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
        >
          Deals
        </router-link>
        <div v-if="!isAuthenticated">
          <router-link
            to="/login"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            Login
          </router-link>
          <router-link
            to="/signup"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            SignUp
          </router-link>
        </div>
        <div v-else>
          <router-link
            to="/secret"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            Account
          </router-link>
          <button
            class="btn btn-error btn-sm rounded-btn hover:text-content-100"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { isAuthenticated, signOut } from '../helpers/useAuth.js'
import { isError } from '../helpers/useError'

const router = useRouter()
const logout = async () => {
  await signOut()
  router.push('/')
}
</script>
