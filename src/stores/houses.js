import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useHouseStore = defineStore('houses', () => {
    const houses = ref([
      {
        name: 'Standaard huis',
        type: '2-onder-1 kap'
      },
      {
        name: 'Gezinswoning',
        type: 'Gezinswoning'
      },
      {
        name: 'Mini tiny house',
        type: 'Kleine woning'
      },
      {
        name: 'Tiny house',
        type: 'Kleine woning'
      },
      {
        name: 'Grote woning',
        type: 'Gezinswoning'
      },
      {
        name: 'Vrijstaand huis',
        type: 'Gezinswoning'
      }
    ])

    return { houses }
  })