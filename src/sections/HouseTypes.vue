<template>
    <section class="max-w-screen-2xl m-auto px-4 mb-20 lg:mb-40">
        <div class="flex flex-col max-w-2xl mb-10">
            <h2 class="relative w-fit mr-6 text-2xl lg:text-4xl font-title font-bold mb-4">Start met het samenstellen van jouw woning!</h2>

            <p class="font-text leading-8 mb-4">Begin met het bepalen van een type woning en start daarna met het samenstellen van je eigen modulaire woning.</p>
        </div>

        <div class="flex flex-col lg:flex-row lg:gap-5">
            <div class="bg-white border-2 border-grey rounded-lg p-4 min-w-56 h-full ">
                <details open>
                    <summary class="font-bold font-title text-dark-grey cursor-pointer">Filters</summary>
                    
                    <div class="pl-4 mt-4">
                        Type:
                        <div v-for="(type, index) in houseTypes" :key="index" class="mb-4 mt-2 cursor-pointer">
                            <label class="inline-flex items-center">
                            <input
                                type="checkbox"
                                :value="type"
                                v-model="selectedTypes"
                                class="mr-2"
                            />
                            {{ type }}
                            </label>
                        </div>
                    </div>
                </details>
            </div>

            <div class="mt-8 lg:mt-0">
                <span class="font-title font-bold text-sm">Woningen ({{ filteredHouses.length }})</span>

                <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <HouseCard 
                        v-for="(house, index) in filteredHouses"
                        :key="index" 
                        :name="house.name"
                        :type="house.type"
                        :image="house.image"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import HouseCard from '../components/HouseCard.vue';
    import { useHouseStore } from '../stores/houses';

    const store = useHouseStore();

    const selectedTypes = ref<string[]>([]);

    const houseTypes = computed(() => {
        const types = store.houses.map(house => house.type);
        return [...new Set(types)];
    });

    const filteredHouses = computed(() => {
        if (selectedTypes.value.length === 0) {
            return store.houses;
        }

        return store.houses.filter(house => selectedTypes.value.includes(house.type));
    });
</script>