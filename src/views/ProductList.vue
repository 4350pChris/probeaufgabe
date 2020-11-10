<template>
  <section>
    <h1 class="text-2xl">{{ title }}</h1>
    <h2 class="text-lg text-gray-700">{{ description }}</h2>
    <ul class="mt-4">
      <router-link tag="li" :to="`/${product.id}`" class="my-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out" v-for="product in products" :key="product.id">
        <ProductListItem :product="product" />
      </router-link>
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
      description,
    };
  },
});
</script>
