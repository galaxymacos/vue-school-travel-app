<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top experiences in {{ destination.name}} </h2>
    <div class="cards">
      <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params: {experienceSlug: experience.slug}}"> <!-- set the name of the route and the wildcard param "id" -->

        <ExperienceCard :experience="experience"/>
      </router-link>
    </div>
  </section>
  <router-view />
</template>

<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
export default {
  components: {ExperienceCard},
  props: {
    id: {type: Number, required: true}, // catch prop that's passed from router
  },

  computed: {
    destination() {
      return sourceData.destinations.find(
          destination => destination.id === this.id
      );
    }
  }
}
</script>
