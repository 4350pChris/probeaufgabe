import { ref, computed } from '@vue/composition-api';

export default function useFilters(products, remembered) {

  const availableFilter = ref(false);
  const rememberedFilter = ref(false);

  const filteredProducts = computed(() => {
    return products.value.filter(
      p => availableFilter.value ? p.available : true
    ).filter(
      p => rememberedFilter.value ? remembered.value.includes(p.id) : true
    )
  })

  return { availableFilter, rememberedFilter, filteredProducts }
}