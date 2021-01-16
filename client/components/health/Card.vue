<template>
  <v-card class="flex flex-column healthcard">
    <v-img :src="imagelink" height="250px"></v-img>
    <v-card-title>{{ cardtitle }}</v-card-title>
    <v-card-text class="flex">{{ carddescription }}</v-card-text>
    <v-card-actions class="cardactions">
      <v-btn text color="#1badbe" :href="cardlink">Learn More</v-btn>
    </v-card-actions>
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

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}

.healthcard {
  position: relative;
  padding-bottom: 40px;
}

.cardactions {
  position: absolute;
  bottom: 0;
}
</style>
