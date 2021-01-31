<template>
  <div>
    <Header />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '~/components/contact/ContactForm.vue'
import Header from '~/components/contact/ContactHeader.vue'

export default {
  components: {
    ContactForm,
    Header,
  },
}
</script>
