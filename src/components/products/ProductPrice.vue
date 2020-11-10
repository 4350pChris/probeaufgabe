<template>
  <p>Preis:
    <span class="font-mono text-gray-700">
      {{value}} {{currency}}
    </span>
  </p>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    value: Number,
    currency: String
  }
})
</script>

<style>

</style>