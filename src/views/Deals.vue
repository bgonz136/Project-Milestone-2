<template>
  <mdi:fire class="mt-8 w-40 h-40 40 mx-auto  text-blue-800"/>
    <p class="text-3xl mx-auto text-center m-16 tracking-wider font-thin">
      User: {{ user?.displayName || 'New User' }}
    </p>
    <Games />
</template>