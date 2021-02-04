<template>
  <div class="banner">
    <h1 class="text-center mb-2">{{ title }}</h1>
    <p class="text-center">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
  background-color: #3295b2;
  color: #fff;
  padding: 60px 20px;
  width: 100vw;
}
</style>
