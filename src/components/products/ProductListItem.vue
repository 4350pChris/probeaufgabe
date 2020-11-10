<template>
  <div>
    {{ product.id }}
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    product: Object,
  },
});
</script>
