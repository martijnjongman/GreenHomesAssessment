<template>
    <div class="w-screen h-screen flex flex-col items-center justify-center">
        <h1 class="headliner font-title font-bold text-dark-grey">Bizar goede keuze!</h1>
    
        <p class="mb-4">Helaas moet ik je wel terugsturen.</p>

        <router-link to="/GreenHomesAssessment">
            <Button variant="accent">Ga terug naar de feature pagina</Button>
        </router-link>
    </div>
</template>

<script setup>
    import Button from "../components/Button.vue";
</script>