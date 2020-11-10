<template>
  <button
    class="rounded h-12 transition-colors duration-300 ease-in-out"
    :class="[active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500']"
    @click="$emit('click')"
  >
    {{ active ? "Vergessen" : "Vormerken" }}
  </button>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
