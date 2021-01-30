<template>
  <v-sheet tile elevation="0" color="white">
    <v-container class="py-16">
      <v-row>
        <v-col cols="6" class="mx-auto">
          <h2 style="text-align: center">Login</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="loginID"
              clearable
              outlined
              solo
              :rules="IDRules"
              required
              label="Login ID"
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
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="validate"
            >
              Login
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    show1: false,
    valid: true,
    loginID: '',
    IDRules: [(v) => !!v || 'Login ID required'],
    PWRules: [(v) => !!v || 'Password required'],
    password: '',
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
