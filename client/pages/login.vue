<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" sm="6" class="mx-auto">
        <h2 class="text-center mb-5">Login</h2>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="loginID"
            clearable
            outlined
            solo
            :rules="IDRules"
            required
            label="Login"
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            clearable
            outlined
            solo
            label="Password"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="PWRules"
            :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
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
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    showPass: false,
    valid: true,
    loginID: '',
    IDRules: [(v) => !!v || 'Login required'],
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
