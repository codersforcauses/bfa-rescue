<template>
  <v-card class="mx-auto elevation-0 mb-10" width="80%">
    <v-card-title class="justify-center">{{ cardtitle }}</v-card-title>
    <v-card-text align="center">
      {{ carddescription }}
    </v-card-text>
    <v-img :src="imagelink" width="80%" class="mx-auto rounded"> </v-img>
    <v-card-subtitle align="center" class="font-weight-bold">
      Symptoms if ingested:
    </v-card-subtitle>
    <v-card-text align="center">
      {{ symptoms }}
    </v-card-text>
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
    symptoms: {
      type: String,
      default: '',
    },
  },
}
</script>
