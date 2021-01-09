<template>
  <v-card class="mx-auto elevation-0" width="80%">
    <v-img :src="imagelink" width="80%" class="mx-auto"></v-img>
    <v-card-title class="justify-center">{{ cardtitle }}</v-card-title>
    <v-card-text align="center">
      {{ carddescription }}
    </v-card-text>
    <v-card-title class="justify-center font-weight-medium">
      Symptoms if ingested:
    </v-card-title>
    <v-card-text align="center">
      {{ symptoms }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PoisonCard',
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
    symptoms: {
      type: String,
      default: '',
    },
  },
}
</script>
