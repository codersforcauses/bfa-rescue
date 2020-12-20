<template>
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
      :counter="7"
      :error-messages="errors"
      required
    ></v-text-field>
    <h4>Message</h4>
    <v-text-field
      v-model="message"
      :counter="500"
      :error-messages="errors"
      required
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Send
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',
}
</script>
