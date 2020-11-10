<template>
  <div class="flex w-full">
    <button
      class="flex-grow bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
      v-for="filter in filters"
      :key="filter"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import useApi from "@/composables/useApi";

export default defineComponent({
  name: "product-filters",
  setup() {
    const { filters } = useApi();
    return { filters };
  },
});
</script>
