<template>
  <v-card class="flex flex-column pb-10 healthcard">
    <v-img :src="require('@/assets/' + imagelink)" alt="sponsor-img"></v-img>
    <v-card-title> {{ cardtitle }} </v-card-title>
    <v-card-text> {{ carddescription }} </v-card-text>
    <v-card-actions class="cardactions pa-4">
      <v-btn
        :href="cardlink"
        rel="noreferrer"
        target="_blank"
        outlined
        color="primary"
      >
        Visit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
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
.healthcard {
  position: relative;
}
.cardactions {
  position: absolute;
  bottom: 0;
}
</style>
