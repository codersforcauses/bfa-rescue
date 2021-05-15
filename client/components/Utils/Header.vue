<template>
  <div class="banner">
    <h1 class="text-center mb-2">{{ title }}</h1>
    <p class="text-center centered" style="width: 80%">{{ subtitle }}</p>
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
  background-color: #a2d0dd;
  color: rgb(0, 0, 0);
  padding: 60px 20px;
  width: 100vw;
  font-size: large;
}
.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
