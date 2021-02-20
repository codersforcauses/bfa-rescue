<template>
  <v-sheet tile elevation="0" color="white">
    <v-container class="py-16">
      <h2>Send a Message</h2>
      <v-form
        ref="contactForm"
        v-model="valid"
        class="mt-8"
        @submit.prevent.stop="submitForm()"
      >
        <v-text-field
          v-model="form.name"
          name="name"
          outlined
          :rules="[rules.required]"
          validate-on-blur
          label="Name"
        />
        <v-text-field
          v-model="form.email"
          name="email"
          type="email"
          outlined
          :rules="[rules.required, rules.email]"
          validate-on-blur
          label="Email"
        />
        <v-text-field
          v-model="form.mobileNumber"
          name="mobileNumber"
          type="tel"
          outlined
          :rules="[rules.required, ...rules.mobile]"
          validate-on-blur
          label="Mobile Number"
        />
        <v-textarea
          v-model="form.message"
          name="message"
          outlined
          :rules="[rules.required]"
          :counter="500"
          maxlength="500"
          validate-on-blur
          label="Message"
        />
        <!--     
        <v-alert
          dense
          dismissible
          :value="submitSuccess"
          type="success"
          transition="fade-transition"
        >
          {{ successMessage }}
        </v-alert>
        -->
        <v-btn type="submit" :disabled="!valid" color="primary" class="mr-4">
          Send
        </v-btn>
      </v-form>
      <br />
      <v-snackbar v-model="submitSuccess" :timeout="timeout" color="success">
        {{ successMessage }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="submitSuccess = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    valid: true,
    submitError: false,
    submitSuccess: false,
    timeout: 5000,
    successMessage:
      'Thank you for reaching out to us. We will get back to you as soon as possible.',
    form: {
      name: '',
      email: '',
      mobileNumber: '',
      message: '',
    },
    rules: {
      required: (v) => !!v || 'Name is required',
      email: (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      mobile: [
        (v) => /[+-0123456789]+/.test(v) || 'Must only include numbers',
        (v) => (v && v.length > 7) || 'Mobile number must be valid',
      ],
    },
  }),
  methods: {
    validate() {
      this.$refs.contactForm.validate()
    },
    reset() {
      this.$refs.contactForm.reset()
    },
    resetValidation() {
      this.$refs.contactForm.resetValidation()
    },
    submitForm() {
      this.validate()
      if (this.valid) {
        const data = new FormData()
        data.append('Name', this.form.name)
        data.append('Email', this.form.email)
        data.append('Mobile Number', this.form.mobileNumber)
        data.append('Message', this.form.message)
        const xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://formspree.io/f/myybvpnq')
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return
          if (xhr.status === 200) {
            this.submitError = false
            this.$refs.contactForm.reset()
            this.submitSuccess = true
            setTimeout(() => (this.submitSuccess = false), this.timeout)
          } else {
            this.submitError = true
          }
        }
        xhr.send(data)
      }
    },
  },
}
</script>

<style>
.v-label {
  font-weight: bold;
}
</style>
