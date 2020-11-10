<template>
  <p>Rating: {{rating}}</p>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'product-rating',
  props: {
    rating: Number
  }
})
</script>
