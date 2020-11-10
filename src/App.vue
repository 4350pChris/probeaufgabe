<template>
  <div style="min-height: 200vh;">
    <NavBar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar.vue";

  export default {
    components: { NavBar }
  }
</script>
