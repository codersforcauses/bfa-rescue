<template>
  <v-card class="flex">
    <v-img :src="require('@/assets/' + imagelink)" alt="sponsor-img"></v-img>
    <v-card-title class="nobreak"> {{ cardtitle }} </v-card-title>
    <v-card-text> {{ carddescription }} </v-card-text>
    <v-card-actions>
      <v-btn :href="cardlink" rel="noreferrer" outlined color="primary">
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
.v-card__text,
.v-card__title {
  word-break: normal;
}
.cardactions {
  position: absolute;
  bottom: 0;
}
</style>
