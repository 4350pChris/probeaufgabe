<template>
  <div style="min-height: 200vh;">
    <header>
      <NavBar />
    </header>
    <main class="mt-20 container mx-auto px-4">
      <transition name="slide">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
  import { defineComponent } from "@vue/composition-api"
  import NavBar from "@/components/NavBar.vue";

  export default defineComponent({
    components: { NavBar }
  })
</script>

<style>
  body {
    @apply text-gray-800;
  }
</style>
