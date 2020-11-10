<template>
  <div style="min-height: 200vh">
    <header>
      <NavBar />
    </header>
    <main class="mt-20 container mx-auto px-4">
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: { NavBar },
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const routeLength = (path) => path.split("/").filter(part => part.length > 0).length;
      const toDepth = routeLength(to.path);
      const fromDepth = routeLength(from.path);
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      next();
    });
  },
});
</script>

<style>
body {
  @apply text-gray-800;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
