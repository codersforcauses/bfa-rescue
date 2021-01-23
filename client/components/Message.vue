<template>
  <div class="form">
    <h2 class="header">Send a Message</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div style="padding-bottom: 16px">
        <h4>First Name</h4>
        <v-text-field class="input" outlined></v-text-field>
      </div>
      <div style="padding-bottom: 46.4px">
        <h4>Last Name</h4>
        <v-text-field class="input" outlined></v-text-field>
      </div>
      <div style="padding-bottom: 16px">
        <h4>Your Email</h4>
        <v-text-field class="input" outlined></v-text-field>
      </div>
      <div style="padding-bottom: 46.4px">
        <h4>Mobile Number</h4>
        <v-text-field class="input" outlined></v-text-field>
      </div>
      <div>
        <h4>Message</h4>
        <v-textarea class="input" height="160" outlined></v-textarea>
      </div>
    </v-form>
  </div>
</template>

<style>
.form {
  color: white;
  background-color: #ffcd05;
  background-size: contain;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 96.325px;
  padding-right: 96.325px;
}
.header {
  padding-bottom: 22.4px;
  font-size: 26px;
}
.input {
  background-color: white;
  border-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
}
</style>
