<template>
  <v-sheet tile elevation="0" color="white">
    <v-container class="py-16">
      <v-row>
        <v-col cols="6" class="mx-auto">
          <h2 style="text-align: center; margin-bottom: 2rem">Sign Up</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="firstname"
              clearable
              outlined
              solo
              :rules="nameRules"
              required
              label="First Name"
            >
            </v-text-field>
            <v-text-field
              v-model="lastname"
              outlined
              :rules="nameRules"
              solo
              required
              label="Last Name"
            >
            </v-text-field>
            <v-text-field
              v-model="email"
              outlined
              :rules="emailRules"
              solo
              required
              label="Email"
            >
            </v-text-field>
            <v-text-field
              v-model="mobileNumber"
              outlined
              solo
              :rules="mobileRules"
              required
              label="Mobile Number"
            >
            </v-text-field>
            <v-text-field
              v-model="password"
              clearable
              outlined
              solo
              label="Password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="PWRules"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            >
            </v-text-field>
            <v-text-field
              v-model="password2"
              clearable
              outlined
              solo
              lazy-validation
              label="Confirm Password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[PWRules2, compare_password]"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            >
            </v-text-field>
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="validate"
            >
              Send
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'ContactForm',
  computed: {
    compare_password() {
      return this.password === this.password2 || 'Password must match'
    },
  },
  data: () => ({
    show1: false,
    valid: true,
    firstname: '',
    lastname: '',
    nameRules: [(v) => !!v || 'Name is required'],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    mobileNumber: '',
    mobileRules: [
      (v) => !!v || 'Mobile number is required',
      (v) => (v && v.length === 10) || 'Mobile number must be valid',
      (v) => /[0-9]+/.test(v) || 'Mobile number be valid',
    ],
    message: '',
    PWRules: [(v) => !!v || 'Password required'],
    password: '',
    password2: '',
    PWRules2: (v) => !!v || 'Password required',
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
