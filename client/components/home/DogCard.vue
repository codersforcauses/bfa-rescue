<template>
  <v-card class="mx-auto">
    <v-img :src="dogimage" height="250px"></v-img>
    <v-card-title>{{ dogname }}</v-card-title>
    <v-card-subtitle>{{ dogage }} | {{ doggender }}</v-card-subtitle>
    <v-card-text>{{ dogdescription }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'DogCard',
  props: {
    dogimage: {
      type: String,
      default: '',
    },
    dogname: {
      type: String,
      default: '',
    },
    dogage: {
      type: String,
      default: '',
    },
    doggender: {
      type: String,
      default: '',
    },
    dogdescription: {
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
</style>
