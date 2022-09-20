<script>
import sourceData from "@/data.json";
export default {
  name: "Home",
  data() {
    return {
      destinations: sourceData.destinations
    };
  }
};


</script>
<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <!-- set destination to router-link using :to -->
      <router-link v-for="destination in destinations" :key="destination.id" :to="destination.slug">
        <h2>{{ destination.name }}</h2>
        <!-- set image source using :src="`PATH/${dynamic_path}`" -->
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>
  </div>
</template>

