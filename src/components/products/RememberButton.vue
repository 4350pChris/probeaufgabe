<template>
  <button
    class="rounded h-12 transition-colors duration-300 ease-in-out"
    :class="[active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500']"
    @click="handleClick"
  >
    {{ active ? "Vergessen" : "Vormerken" }}
  </button>
</template>

<script>
import { defineComponent, computed } from "@vue/composition-api";
import useRemembering from "@/composables/useRemembering";

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { remembered } = useRemembering();

    const active = computed(() => remembered.value.some((id) => id === props.value))

    const handleClick = () => {
      if (active.value) {
        remembered.value = remembered.value.filter(id => id !== props.value)
      } else {
        remembered.value.push(props.value);
      }
    }

    return { active, handleClick };
  }
});
</script>
