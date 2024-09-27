<template>
    <div class="w-screen h-screen flex flex-col items-center justify-center">
        <h1 class="headliner font-title font-bold text-dark-grey"><span class="opacity-25">GREEN</span>HOME<span class="opacity-25">S</span></h1>
        <router-link to="/">
            <Button variant="accent">Ga terug naar de feature pagina</Button>
        </router-link>
    </div>    
</template>

<script setup>
    import Button from "../components/Button.vue";
</script>

<style lang="scss">
    .headliner {
        font-size: 10vh;
    }
</style>