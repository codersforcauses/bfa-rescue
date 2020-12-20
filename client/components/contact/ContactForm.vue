<template>
  <v-container class="black white--text">
    <v-form ref="form" v-model="valid" lazy-validation>
      <h4>First Name</h4>
      <v-text-field
        v-model="firstname"
        :counter="20"
        :rules="nameRules"
        required
      ></v-text-field>
      <h4>Last Name</h4>
      <v-text-field
        v-model="lastname"
        :counter="20"
        :rules="nameRules"
        required
      ></v-text-field>
      <h4>Email</h4>
      <v-text-field v-model="email" :rules="emailRules" required></v-text-field>
      <h4>Mobile Number</h4>
      <v-text-field
        v-model="phoneNumber"
        :counter="10"
        :rules="mobileRules"
        required
      ></v-text-field>
      <h4>Message</h4>
      <v-text-field
        v-model="message"
        :counter="500"
        :rules="messageRules"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Send
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    mobileRules: [
      (v) => !!v || 'Mobile number is required',
      (v) => (v && v.length === 10) || 'Mobile number must be valid',
      (v) => /[0-9]+/.test(v) || 'Mobile number be valid',
    ],
    messageRules: [
      (v) => !!v || 'Message is required',
      (v) => (v && v.length <= 500) || '500 characters only',
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
