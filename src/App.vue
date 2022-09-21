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
    <router-view :key="$router.path"></router-view>
  </div>
</template>
