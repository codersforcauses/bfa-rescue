<template>
  <div class="hero px-12">
    <v-row>
      <v-col class="mt-12" md="8">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <div class="mt-5">
          <v-btn class="btn" outlined color="primary" to="contact-us">
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
  background-image: url('https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/10/white-dog-tongue.png');
  background-position: center bottom;
  background-size: contain;
  text-align: center;
  min-height: 400px;
  width: auto;
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
</style>
