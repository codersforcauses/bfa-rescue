<template>
  <v-card class="mx-auto" width="80%">
    <v-img :src="imagelink" width="80%" class="mx-auto"></v-img>
    <v-card-title>{{ cardtitle }}</v-card-title>
    <v-card-text v-html="carddescription">{{ carddescription }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PoisonTop',
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
