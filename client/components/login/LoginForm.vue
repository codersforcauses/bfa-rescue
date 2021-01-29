<template>
  <v-sheet tile elevation="0" color="white">
    <v-container class="py-16">
      <h2 style="text-align: center">Login</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="loginID"
          clearable
          outlined
          solo
          :rules="IDRules"
          required
        >
          <template #label>
            <label class="font-weight-bold">Login ID</label>
          </template>
        </v-text-field>
        <v-text-field
          v-model="password"
          clearable
          outlined
          solo
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="PWRules"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
        >
          <template #label>
            <label class="font-weight-bold">Password</label>
          </template></v-text-field
        >
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="validate"
        >
          Login
        </v-btn>
      </v-form>
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
