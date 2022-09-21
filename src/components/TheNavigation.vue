<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link v-for="destination in destinations" :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}">{{ destination.name }}</router-link>
  </div>
</template>
<script>
import sourceData from "@/data.json";
export default {
  name: "TheNavigation",
  data() {
    return {
      destinations: sourceData.destinations
    };
  }
};
</script>
<style>
#nav .vue-school-active-link {
  color: red;
  border-bottom: 2px solid red;
}
</style>
