<template>
    <div class="bg-textures">
        <NavBar />
      
        <router-view />

        <Footer />
    </div>
</template>

<script setup>
    import Footer from "./sections/Footer.vue";
    import NavBar from "./sections/Navbar.vue";
</script>

<style lang="scss">
    .bg-textures {
        width: 100vw;
        height: 100%;
        background-image: url('/bg-textures.svg');
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>