<template>
    <div class="p-8 bg-accent-purple text-white rounded-xl max-w-xl w-full">
        <h3 class="font-bold font-title text-2xl mb-4 text">Offerte aanvragen</h3>

        <p v-if="submitted" class="text-green-500 font-semibold flex justify-center items-center w-full h-96">Offerte succesvol verzonden!</p>

        <form v-else @submit.prevent="handleSubmit" class="space-y-10 flex flex-col items-center">
            <div class="w-full">
                <label class="block text-sm font-medium text-gray-700">Name</label>
                <input
                v-model="form.name"
                type="text"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Voor- en achternaam"
                />
            </div>
    
            <div class="w-full">
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input
                v-model="form.email"
                type="email"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
                />
            </div>
    
            <div class="w-full">
                <label class="block text-sm font-medium text-gray-700">Bericht(optioneel)</label>
                <textarea
                v-model="form.message"
                type="text"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Typ hier je bericht"
                />
            </div>
    
            <div>
                <Button variant="secondary-accent">
                    Vraag offerte aan
                </Button>
            </div>
        </form>
    </div>
</template>
  
<script setup>
    import Button from './Button.vue';

    import { reactive, ref } from 'vue';

    const form = reactive({
        name: '',
        email: '',
        message: ''
    });

    const submitted = ref(false);

    const handleSubmit = () => {
        console.log('Form data:', form);
        submitted.value = true;
        form.name = '';
        form.email = '';
        form.message ='';
    };
</script>
