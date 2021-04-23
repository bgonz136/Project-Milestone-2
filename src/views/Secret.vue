<template>
  <div class="mt-8">
    <ic:baseline-shopping-cart class="w-40 h-40 40 mx-auto  text-blue-800"/>
    <p class="text-3xl mx-auto text-center m-16 tracking-wider font-semibold">
      USER: {{ user?.displayName || 'New User' }}
    </p>
    <RemoveGame />
  </div>
</template>


<script setup>
import { user } from '../helpers/useAuth'
</script>