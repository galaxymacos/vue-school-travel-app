<script>
  import TheNavigation from "@/components/TheNavigation.vue"; // import a component from .vue

  export default {
    name: "App",
    components: {
      TheNavigation // export the imported component in <script> to be used in <template>
    }
  };
</script>

<template>
  <the-navigation />  <!-- use the imported component in <template> -->
  <div class="container">
    <!-- Force view to recreate page component in every page change -->
    <router-view v-slot="{Component}">
      <transition name="moveUp">
        <component :is="Component" :key="$router.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<style lang="css">
  .moveUp-enter-active {
    animation: fadeIn 1s ease-in;
  }
  @keyframes fadeIn {
    0% {opacity: 0;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
  }

  .moveUp-leave-active {
    animation: moveUp 0.3s ease-in;
  }

  @keyframes moveUp {
    0% {transform: translateY(0);}
    100% {transform: translateY(-400px);}
  }

</style>
