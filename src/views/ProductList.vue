<template>
  <section>
    <h1 class="text-2xl">{{ title }}</h1>
    <h2 class="text-lg text-gray-700">{{ description }}</h2>
    <ul class="mt-4">
      <router-link tag="li" :to="`/${product.id}`" class="my-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out" v-for="product in products" :key="product.id">
        <ProductListItem :product="product" />
      </router-link>
    </ul>
    <div class="mb-12">
      <LexmeaFooter />
    </div>
    <div class="container fixed bottom-0 bg-white">
      <ProductFilters />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import ProductListItem from "@/components/products/ProductListItem.vue";
import ProductFilters from "@/components/products/ProductFilters.vue";
import LexmeaFooter from "@/components/LexmeaFooter.vue";
import useApi from "@/composables/useApi";

export default defineComponent({
  name: "Home",
  components: {
    ProductListItem,
    ProductFilters,
    LexmeaFooter,
  },
  setup() {
    const { products, title, description } = useApi();

    return {
      products,
      title,
      description,
    };
  },
});
</script>
