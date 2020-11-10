<template>
  <nav
      class="fixed flex w-full z-10 bg-blue-700 text-white border-b justify-center p-5 m-auto top-0 transition duration-300 ease-in-out"
      :class="{ scrolled }"
    >
      Products
    </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.pageYOffset > 0;
    }
  }
}
</script>

<style>
  nav.scrolled {
    @apply shadow-xl;
    border-bottom: 0;
  }
</style>