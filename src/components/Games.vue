<template>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 container mx-auto">
        <Game v-for="n in 10" :key="n"/>
    </div>
</template>

