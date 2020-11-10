<template>
  <p class="font-light">{{ time }}</p>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'product-release-date',
  props: {
    timestamp: {
      type: Number,
      required: true
    }
  },
  computed: {
    time() {
      const date = new Date(this.timestamp * 1000);
      return date.toLocaleDateString();
    },
  },
})
</script>

<style>

</style>