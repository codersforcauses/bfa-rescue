<template>
  <v-container>
    <v-form v-model="valid" class="pt-5">
      <v-text-field
        v-model="dogname"
        label="Dog's name"
        placeholder="Name of the dog you're interested in"
        outlined
        required
      ></v-text-field>

      <v-text-field
        v-model="dogbreed"
        label="Dog's breed"
        placeholder="If breed is specified in the listing"
        outlined
        required
      ></v-text-field>

      <h2 class="heading">Personal Details</h2>

      <v-text-field
        v-model="name"
        :rules="required"
        label="Full name"
        placeholder="Your full name as per your driver's license"
        outlined
        required
      ></v-text-field>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="license"
            :rules="required"
            label="Australian driver's license number"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted"
                label="Date of birth"
                placeholder="Placeholder"
                outlined
                readonly
                v-bind="attrs"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-text-field
        v-model="email"
        :rules="required"
        label="Email"
        outlined
        required
      ></v-text-field>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="mobile"
            :rules="required"
            label="Mobile number"
            placeholder="We will call you on this number"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="secondarymobile"
            label="Secondary mobile number"
            placeholder="Another number we can call if your mobile number cannot be reached"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="address"
            label="Residential address"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="suburb"
            label="Suburb"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="postcode"
            label="Postcode"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="profession"
            :rules="required"
            label="Profession"
            placeholder="What do you do for a living?"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="company"
            label="Company name"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <label>Residency type</label>
      <v-row>
        <v-radio-group v-model="residency" row>
          <v-radio label="Citizen" value="citizen"></v-radio>
          <v-radio label="PR" value="pr"></v-radio>
          <v-radio label="Other (please describe)" value="other"></v-radio>
        </v-radio-group>
        <v-text-field
          v-model="otherdescription"
          label="Description if other residency type"
          outlined
        ></v-text-field>
      </v-row>

      <label>Are you thinking of adopting for yourself?</label>
      <v-row>
        <v-radio-group v-model="residency" row>
          <v-radio label="Yes" value="yes"></v-radio>
          <v-radio label="No (please provide details)" value="no"></v-radio>
        </v-radio-group>
        <v-text-field
          v-model="nodescription"
          label="Description if other residency type"
          outlined
        ></v-text-field>
      </v-row>

      <h2 class="heading">Your living arrangements</h2>

      <label>Do you live alone??</label>
      <v-row>
        <v-radio-group v-model="livealone" row>
          <v-radio label="Yes" value="yes"></v-radio>
          <v-radio label="No (please provide details)" value="no"></v-radio>
        </v-radio-group>
      </v-row>
      <v-simple-table class="family-members">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Full name</th>
              <th class="text-left">Age</th>
              <th>Relationship</th>
              <th>Health issues? (asthma, allergies, etc.)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 5" :key="n">
              <td>
                <v-text-field single-line outlined></v-text-field>
              </td>
              <td>
                <v-text-field single-line outlined></v-text-field>
              </td>
              <td>
                <v-text-field single-line outlined></v-text-field>
              </td>
              <td>
                <v-text-field single-line outlined></v-text-field>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: (vm) => ({
    valid: false,
    dogname: '',
    dogbreed: '',
    name: '',
    license: '',
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    email: '',
    mobile: '',
    secondarymobile: '',
    address: '',
    suburb: '',
    postcode: '',
    profession: '',
    company: '',
    residency: null,
    menu: '',
    required: [(v) => !!v || 'Field is required'],
    nameRules: [(v) => !!v || 'Name is required'],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>

<style scoped>
.heading {
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 2px;
  font-weight: 450;
  margin-bottom: 15px;
}

.v-simple-table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
