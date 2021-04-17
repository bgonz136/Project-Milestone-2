<template>
  <div class="mt-8">
    <p class="text-3xl mx-auto text-center m-16 tracking-wider font-thin">
      Welcome {{ user?.displayName || 'New User' }}
    </p>
    <img class="h-60 mx-auto" src="../assets/games.png" alt="Home Image" />
  </div>
  <Games />
</template>

