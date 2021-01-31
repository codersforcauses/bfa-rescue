<template>
  <v-sheet tile elevation="0" color="white">
    <v-container class="py-16">
      <h2>Send a Message</h2>
      <v-form ref="form" v-model="valid" class="mt-8" lazy-validation>
        <v-text-field
          v-model="name"
          outlined
          :rules="[rules.required]"
          required
          label="Name"
        />
        <v-text-field
          v-model="email"
          outlined
          :rules="[rules.required, rules.email]"
          required
          label="Email"
        />
        <v-text-field
          v-model="mobileNumber"
          outlined
          :rules="[rules.required, ...rules.mobile]"
          required
          label="Mobile Number"
        />
        <v-textarea
          v-model="message"
          outlined
          :rules="[rules.required]"
          :counter="500"
          maxlength="500"
          label="Message"
        />
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="validate"
        >
          Send
        </v-btn>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    valid: true,
    name: '',
    rules: {
      required: (v) => !!v || 'Name is required',
      email: (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      mobile: [
        (v) => /[+-0-9]+/.test(v) || 'Must only include numbers',
        (v) => (v && v.length > 3) || 'Mobile number must be valid',
      ],
    },
    email: '',
    mobileNumber: '',
    message: '',
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

<style>
.v-label {
  font-weight: bold;
}
</style>
