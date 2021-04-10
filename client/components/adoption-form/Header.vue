<template>
  <div class="banner">
    <h1 class="text-center">{{ title }}</h1>
    <p class="text-center">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'AdoptionFormHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.banner {
  background-color: #1badbe;
  color: #fff;
  padding: 60px 100px;
  width: 100vw;
}
</style>
