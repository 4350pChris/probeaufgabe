<template>
  <section>
    <h1 class="text-2xl">{{ title }}</h1>
    <h2 class="text-lg text-gray-700">{{description}}</h2>
    <ul class="mt-4">
      <ProductListItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
    <footer>© 2020 LexMea</footer>
  </section>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import ProductListItem from "@/components/products/ProductListItem.vue";
import useApi from "@/composables/useApi";

export default defineComponent({
  name: "Home",
  components: {
    ProductListItem,
  },
  setup() {
    const { products, title, description } = useApi();

    return {
      products,
      title,
      description
    };
  },
});
</script>
