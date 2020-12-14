<template>
  <div class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Provide a service that helps us with our rescue work
        </h1>
        <p>
          Best Friends Animal Rescue is run by a group of volunteers, so if you
          you can provide services such as training, grooming, photography,
          construction, etc. Please reach out to us. We need all the help we can
          get with our rescue operations.
        </p>
        <div class="hero-btn mt-5">
          <v-btn class="btn">Contact Us</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped lang="scss">
.hero {
  background-color: bisque;
  text-align: center;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  height: 300px;
  margin-bottom: 50px;
  margin-top: -15px;
  left: 50%;
  padding-top: 30px;
}
.hero-title {
  padding-bottom: 30px;
}
</style>
