<template>
  <v-container style="background-color: light-blue" color="black">
    <ContactForm />
  </v-container>
</template>

<script>
import ContactForm from '~/components/contact/ContactForm.vue'

export default {
  components: {
    ContactForm,
  },
}
</script>
