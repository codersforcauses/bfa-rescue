<template>
  <v-card class="mx-auto">
    <v-img :src="imagelink" height="250px"></v-img>
    <v-card-title>{{ cardtitle }}</v-card-title>
    <v-card-text>{{ carddescription }}</v-card-text>
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
  },
}
</script>
