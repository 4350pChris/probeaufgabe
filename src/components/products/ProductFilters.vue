<template>
  <div class="flex w-full">
    <button
      v-for="filter in filters"
      :key="filter.text"
      class="flex-grow bg-transparent font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
      :class="[filter.active ? 'text-white bg-blue-700' : 'text-blue-700 border border-blue-500']"
      @click="filter.fn"
    >
      {{ filter.text }}
    </button>
  </div>
</template>

<script>
import { defineComponent, computed } from "@vue/composition-api";
import useFilters from '@/composables/useFilters';
import useApi from '@/composables/useApi';

export default defineComponent({
  name: "product-filters",
  setup() {
    const { filters: filterTexts } = useApi();

    const { availableFilter, rememberedFilter } = useFilters();

    const filters = computed(() => filterTexts.value.length > 0 ? [
      {
        text: filterTexts.value[0],
        active: !(availableFilter.value || rememberedFilter.value),
        fn() {
          availableFilter.value = false;
          rememberedFilter.value = false;
        }
      },
      {
        text: filterTexts.value[1],
        active: availableFilter.value,
        fn() {
          availableFilter.value = !availableFilter.value
        }
      },
      {
        text: filterTexts.value[2],
        active: rememberedFilter.value,
        fn() {
          rememberedFilter.value = !rememberedFilter.value
        }
      }
    ] : [])

    return { filters };
  },
});
</script>
