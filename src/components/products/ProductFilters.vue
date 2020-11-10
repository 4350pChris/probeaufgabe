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
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "product-filters",
  props: {
    filters: Array
  }
});
</script>
