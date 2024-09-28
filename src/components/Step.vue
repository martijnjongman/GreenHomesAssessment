<template>
    <div     
        :class="[
        'relative group flex flex-col gap-4 rounded-lg p-4 lg:p-8 border-2 border-secondary-green hover:scale-105 hover:shadow-xl', 
        props.step === 1  ? 'variant1' : 'variant2'
        ]">
            <span class="font-title font-extrabold text-4xl"># {{ props.step }}</span>

            <h3 class="font-title font-bold text-xl">{{ props.title }}</h3>

            <p>{{ props.text }}</p>

            <img :class="['hidden absolute -bottom-2 right-2 w-12 h-12 opacity-20', props.step === 4 ? 'group-hover:hidden' : 'group-hover:block']" src="/public/arrow-right-round.svg/" alt="icon"/>
    </div>  
</template>

<script setup lang="ts">
    const props = defineProps({
        step: { type: Number },
        title: { type: String },
        text: { type: String },
    });
</script>

<style lang="scss">
    .variant1 {
        @apply bg-secondary-green text-white
    }

    .variant2 {
        @apply bg-white text-dark-grey
    }
</style>