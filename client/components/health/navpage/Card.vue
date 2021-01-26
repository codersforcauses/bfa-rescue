<template>
  <v-card class="d-flex flex-column pb-10 healthcard" height="100%">
    <NuxtLink :to="cardlink" class="text-decoration-none" style="height: 100%">
      <v-img :src="imagelink" height="250px"></v-img>
      <v-card-title class="black--text">{{ cardtitle }}</v-card-title>
      <v-card-text class="flex black--text">{{ carddescription }}</v-card-text>
      <v-card-actions class="cardactions">
        <v-btn text color="#1badbe" :href="cardlink">Learn More</v-btn>
      </v-card-actions>
    </NuxtLink>
  </v-card>
</template>

<script>
export default {
  name: 'HealthNavCard',
  props: {
    imagelink: {
      type: String,
      default: '',
    },
    cardtitle: {
      type: String,
      default: '',
    },
    carddescription: {
      type: String,
      default: '',
    },
    cardlink: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.healthcard {
  position: relative;
}

.cardactions {
  position: absolute;
  bottom: 0;
}
</style>
