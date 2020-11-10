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
      <ProductFilters :filters="filters"/>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed } from "@vue/composition-api";
import ProductListItem from "@/components/products/ProductListItem.vue";
import ProductFilters from "@/components/products/ProductFilters.vue";
import LexmeaFooter from "@/components/LexmeaFooter.vue";
import useApi from "@/composables/useApi";
import useFilters from '@/composables/useFilters';
import useRemembering from '@/composables/useRemembering';

export default defineComponent({
  name: "Home",
  components: {
    ProductListItem,
    ProductFilters,
    LexmeaFooter,
  },
  setup() {
    const { filters: filterTexts, products, title, description } = useApi();
    const { remembered } = useRemembering();
    const { filteredProducts, availableFilter, rememberedFilter } = useFilters(products, remembered);

    const filters = computed(() => filterTexts.value.length > 0 ? [
      {
        text: filterTexts.value[0],
        active: !(availableFilter.value || rememberedFilter.value),
        fn() {
          availableFilter.value = false;
          rememberedFilter.value = false;
        }
      },
      {
        text: filterTexts.value[1],
        active: availableFilter.value,
        fn() {
          availableFilter.value = !availableFilter.value
        }
      },
      {
        text: filterTexts.value[2],
        active: rememberedFilter.value,
        fn() {
          rememberedFilter.value = !rememberedFilter.value
        }
      }
    ] : [])

    return {
      products: filteredProducts,
      title,
      description,
      filters
    };
  },
});
</script>
