<template>
  <h1>{{ experience.name }}</h1>
  <img :src="`/images/${experience.image}`" alt="experience.name">
  <p> {{ experience.description }}</p>
</template>

<script>
import sourceData from "@/data.json";
export default {
  props: {  // catch prop that's passed from router from url
    id: {type: Number, required: true},  // destination id
    experienceSlug: {type: String, required: true},
  },
  computed: {
    destination () {
      return sourceData.destinations.find(
          destination => destination.id === this.id
      );
    },
    experience () {
      return this.destination.experiences.find(
          experience => experience.slug === this.experienceSlug
      );
    }
  }
}
</script>

