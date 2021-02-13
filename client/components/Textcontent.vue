<template>
  <div class="background py-10 px-8" align="center">
    <div class="text">
      <h2>{{ title }}</h2>
      <h2 class="subheader py-4">{{ subheader }}</h2>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    subheader: { type: String, default: '' },
    body: { type: String, default: '' },
  },
}
</script>

<style>
.subheader {
  font-weight: 100;
}
p {
  font-weight: 100;
}
.text {
  max-width: 1200px;
  color: rgb(78, 78, 78);
}
.background {
  background-color: white;
}
</style>
