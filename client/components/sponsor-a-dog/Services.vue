<template>
  <div class="text-center d-flex flex-column justify-center align-center">
    <v-img :src="serviceimg" height="160" width="160" contain></v-img>
    <p class="servicename">{{ servicename }}</p>
  </div>
</template>

<script>
export default {
  name: 'Services',
  props: {
    serviceimg: {
      type: String,
      default: '',
    },
    servicename: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.servicename {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.5; /* text-align: center; */
  padding-top: 10px;
}
</style>
