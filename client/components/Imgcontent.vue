<template>
  <div
    :class="{ brownPug: brownpug, towelDog: toweldog }"
    class="background py-10"
  >
    <v-container>
      <v-row align="center" class="flex-column">
        <h1 align="center" class="mb-5">{{ title }}</h1>
        <p class="mb-5 text-h6 font-weight-regular">{{ text }}</p>
        <v-btn
          v-show="toweldog"
          x-large
          color="primary"
          to="volunteer"
          class="text-none px-10 py-5"
        >
          {{ button }}
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Imgcontent',
  props: {
    text: { type: String, default: '' },
    title: { type: String, default: '' },
    button: { type: String, default: '' },
    brownpug: { type: Boolean, default: false },
    toweldog: { type: Boolean, default: false },
  },
}
</script>

<style>
.background {
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: 'Open Sans', Helvetica, Arial, Lucida, sans-serif;
  color: rgb(78, 78, 78);
}
.brownPug {
  background-image: url('https://bfarescue.com.au/wp-content/uploads/2015/07/old-pug.jpg');
}
.towelDog {
  background-image: url('https://bfarescue.com.au/wp-content/uploads/2015/07/dog-grooming.jpg');
}
</style>
