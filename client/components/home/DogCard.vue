<template>
  <v-card class="d-flex flex-column dogcard" height="100%">
    <NuxtLink :to="route" class="text-decoration-none" style="height: 100%">
      <v-img :src="dogimage" height="250px"></v-img>
      <v-card-title class="black--text">{{ dogname }}</v-card-title>
      <v-card-subtitle>{{ dogbreed }} | {{ doggender }}</v-card-subtitle>
      <v-card-text class="flex black--text">{{ dogdescription }}</v-card-text>
      <v-card-text class="text-center pb-2 dogstatus">
        <v-chip
          v-if="status == 'available'"
          class="ma-2 justify-content-center"
          color="#a2d0dd"
        >
          <v-icon medium class="mr-2"> mdi-dog </v-icon>
          I'm available for adoption
        </v-chip>
        <v-chip v-else class="ma-2 justify-content-center" color="#f2d77d">
          <v-icon medium class="mr-2"> mdi-dog-side </v-icon>
          I'm adopted
        </v-chip>
      </v-card-text>
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
    status: {
      type: String,
      default: 'available',
    },
    id: {
      type: String,
      default: '0',
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
