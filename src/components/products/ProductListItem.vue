<template>
  <div class="flex border p-4">
    <img
      class="object-contain"
      :class="{ 'order-2': !product.available }"
      :src="product.imageURL"
      :alt="`image for ${product.name}`"
    />
    <div class="flex flex-col flex-grow justify-center mx-4">
      <div class="flex justify-between">
        <p class="font-bold">{{ product.name }}</p>
        <ProductReleaseDate :timestamp="product.releaseDate" />
      </div>
      <p class="mt-2">{{ product.description }}</p>
      <div class="flex justify-between mt-2">
        <ProductPrice
          :currency="product.price.currency"
          :value="product.price.value"
        />
        <ProductRating :rating="product.rating" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import ProductPrice from "./ProductPrice.vue";
import ProductRating from "./ProductRating.vue";
import ProductReleaseDate from "./ProductReleaseDate.vue";

export default defineComponent({
  name: 'product-list-item',
  components: { ProductPrice, ProductRating, ProductReleaseDate },
  props: {
    product: Object,
  }
});
</script>

<style scoped>
img {
  min-width: 120px;
  min-height: 120px;
}
</style>
