<template>
  <div class="form-background">
    <div class="form-margins">
      <div class="form-content">
        <h2 class="header">Send a Message</h2>
        <v-form ref="form" v-model="valid" lazy-validation>
          <div style="padding-bottom: 16px">
            <h4>First Name</h4>
            <v-text-field
              class="field"
              background-color="white"
              solo
            ></v-text-field>
          </div>
          <div style="padding-bottom: 46.4px">
            <h4>Last Name</h4>
            <v-text-field
              class="field"
              background-color="white"
              solo
            ></v-text-field>
          </div>
          <div style="padding-bottom: 16px">
            <h4>Your Email</h4>
            <v-text-field
              class="field"
              background-color="white"
              solo
            ></v-text-field>
          </div>
          <div style="padding-bottom: 46.4px">
            <h4>Mobile Number</h4>
            <v-text-field
              class="field"
              background-color="white"
              solo
            ></v-text-field>
          </div>
          <div>
            <h4>Message</h4>
            <v-textarea
              class="input"
              height="160"
              background-color="white"
              solo
            ></v-textarea>
          </div>
          <v-btn large color="primary" to="donate" class="text-none px-10 py-5">
            Send
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<style>
.form-background {
  background-color: #ffcd05;
  margin: 0;
  width: 100vw;
}
.form-margins {
  padding: 0 20px;
}
.form-content {
  max-width: 600px;
  margin: auto;
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
}
.header {
  padding-bottom: 22.4px;
  font-size: 26px;
}
.slot {
  background-color: red;
}
.field form {
  background-color: white;
  border-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
}
</style>
