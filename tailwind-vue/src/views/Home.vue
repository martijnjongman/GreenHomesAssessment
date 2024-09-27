<script setup>
    import Button from "../components/Button.vue";
</script>


<template>
    <div class="w-screen h-auto flex flex-col items-center justify-center mt-32">
        <h1 class="headliner font-title font-bold text-dark-grey"><span class="opacity-25">GREEN</span>HOME<span class="opacity-25">S</span></h1>
        <router-link to="/">
            <Button variant="primary">Ga terug naar de feature pagina</Button>
        </router-link>
    </div>    
</template>

<style lang="scss">
    .headliner {
        font-size: 10vh;
    }
</style>