<template>
  <div class="hero px-12">
    <v-row>
      <v-col class="mt-6 centered" md="8">
        <h1>{{ title }}</h1>
        <p class="centered" style="width: 80%">{{ text }}</p>
        <div class="mt-5">
          <v-btn
            class="btn"
            outlined
            color="primary"
            to="volunteer/volunteer-application-form/"
          >
            {{ button }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    text: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    button: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.hero {
  background-image: url('https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/07/olddog.jpg');
  background-position: center;
  background-size: cover;
  text-align: center;
  min-height: 400px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 20px;
}
@media only screen and (max-width: 768px) {
  .hero {
    background-image: none !important;
    padding-bottom: 50px;
  }
}
.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
