<template>
  <v-sheet tile elevation="0" color="info">
    <v-container class="py-16">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="firstname"
          clearable
          outlined
          solo
          :rules="nameRules"
          required
        >
          <template #label>
            <label class="font-weight-bold">First Name</label>
          </template>
        </v-text-field>
        <v-text-field
          v-model="lastname"
          outlined
          :rules="nameRules"
          solo
          required
        >
          <template #label>
            <label class="font-weight-bold">Last Name</label>
          </template>
        </v-text-field>
        <v-text-field
          v-model="email"
          outlined
          :rules="emailRules"
          solo
          required
        >
          <template #label>
            <label class="font-weight-bold">Email</label>
          </template>
        </v-text-field>
        <v-text-field
          v-model="phoneNumber"
          outlined
          solo
          :rules="mobileRules"
          required
        >
          <template #label>
            <label class="font-weight-bold">Mobile Number</label>
          </template>
        </v-text-field>
        <v-textarea
          v-model="message"
          solo
          outlined
          :counter="500"
          maxlength="500"
        >
          <template #label>
            <label class="font-weight-bold">Message</label>
          </template>
        </v-textarea>

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
    nameRules: [(v) => !!v || 'Name is required'],
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
