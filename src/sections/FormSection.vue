<template>
    <section id="offerte aanvragen" class="max-w-screen-lg m-auto px-4 mb-20 lg:mb-40">
        <div class="flex flex-col items-center">
            <h2 class="font-title text-2xl lg:text-4xl font-bold mb-4 text-center">Ben jij op zoek naar een nieuwe woning?</h2>

            <div class="flex gap-1 justify-center items-center mb-4">
                <p class="text-lg">Vul vrijblijvend het offerte formulier in</p>
                <img class="w-3 h-3" src="/arrow-down.svg" alt="icon" />
            </div>

            <Form />
        </div>
    </section>
</template>

<script setup lang="ts">
    import Form from '../components/Form.vue';
</script>