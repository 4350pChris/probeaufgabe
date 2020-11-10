import { ref, computed } from '@vue/composition-api';

export default function useFilters(products, remembered) {

  const availableFilter = ref(false);
  const rememberedFilter = ref(false);

  const filteredProducts = computed(() => {
    let res = products.value;
    
    if (availableFilter.value) {
      res = res.filter(p => p.available)
    }

    if (rememberedFilter.value) {
      res = res.filter(p => remembered.value.includes(p.id))
    }

    return res;
  })

  return { availableFilter, rememberedFilter, filteredProducts }
}