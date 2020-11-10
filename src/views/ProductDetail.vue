<template>
  <article class="flex flex-col" v-if="product !== undefined">
    <div class="flex">
      <img
        class="object-contain"
        :src="product.imageURL"
        :alt="`image for ${product.name}`"
      />
      <div class="flex flex-col ml-4">
        <h1 class="font-bold">{{ product.name }}</h1>
        <ProductPrice
          :value="product.price.value"
          :currency="product.price.currency"
        />
        <ProductRating :rating="product.rating" />
        <ProductReleaseDate :timestamp="product.releaseDate" />
      </div>
    </div>
    <h2 class="my-2">{{ product.description }}</h2>
    <RememberButton :value="product.id" />
    <p class="mt-2">{{ product.longDescription}} </p>
  </article>
</template>

<script>
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import useApi from "@/composables/useApi";
import ProductPrice from "@/components/products/ProductPrice.vue";
import ProductRating from "@/components/products/ProductRating.vue";
import ProductReleaseDate from "@/components/products/ProductReleaseDate.vue";
import RememberButton from "@/components/products/RememberButton.vue";


export default defineComponent({
  name: "product-detail",
  components: {
    ProductPrice,
    ProductRating,
    RememberButton,
    ProductReleaseDate,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { products } = useApi();
    const { id } = toRefs(props);
    const product = computed(() =>
      products.value.find((p) => p.id === parseInt(id.value))
    );
    return { product };
  },
});
</script>
