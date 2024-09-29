<script setup lang="ts">
    import FAQ from '../components/FAQ.vue';
    import { useQuestionsStore } from '../stores/questions';

    const store = useQuestionsStore();

    const questions = store.questions;

</script>

<template>
    <section id="veelgestelde vragen" class="max-w-screen-2xl m-auto mb-20 lg:mb-40">
        <div class="bg-grey rounded-lg p-8 lg:p-16">
            <h2 class="text-2xl lg:text-4xl font-title font-bold mb-4">Veelgestelde vragen</h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FAQ 
                    v-for="(question, index) in questions"
                    :key="index"  
                    :question="question.question"
                    :answer="question.answer"
                />
            </div>
        </div>
    </section>
</template>

