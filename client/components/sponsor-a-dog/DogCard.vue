<template>
  <v-card class="d-flex flex-column dogcard" height="100%">
    <NuxtLink :to="route" class="text-decoration-none" style="height: 100%">
      <v-img :src="dogimage" height="250px"></v-img>
      <v-card-title class="black--text">{{ dogname }}</v-card-title>
      <v-card-subtitle>{{ dogbreed }} | {{ doggender }}</v-card-subtitle>
      <v-card-text class="flex black--text">{{ dogdescription }}</v-card-text>
    </NuxtLink>
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
    dogbreed: {
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
    id: {
      type: String,
      default: '#',
    },
    sponsor: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    route() {
      return '/dog/' + this.id
    },
  },
}
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}

.dogcard {
  position: relative;
  padding-bottom: 60px;
}

.dogstatus {
  position: absolute;
  bottom: 0;
}
</style>
