<template>
  <nav
    class="fixed flex w-full z-10 h-16 bg-blue-700 text-white border-b justify-center items-center p-5 m-auto top-0 transition duration-300 ease-in-out"
    :class="{ scrolled }"
  >
    <h1 class="text-2xl">Testpage</h1>
  </nav>
</template>

<script>
import { onMounted, ref, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const scrolled = ref(false);
    const updateScrolled = () => (scrolled.value = window.pageYOffset > 0);
    onMounted(() => window.addEventListener("scroll", updateScrolled));
    return { scrolled };
  },
});
</script>

<style>
nav.scrolled {
  @apply shadow-xl;
  border-bottom: 0;
}
</style>