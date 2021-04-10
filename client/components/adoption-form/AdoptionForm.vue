<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation class="pt-5">
      <v-stepper v-model="step" vertical>
        <v-stepper-step complete editable step="1">Dog details</v-stepper-step>
        <v-stepper-content step="1">
          <v-container>
            <v-card>
              <v-text-field
                v-model="dogname"
                label="Dog's name"
                placeholder="Name of the dog you're interested in"
                :rules="required"
                required
                outlined
                class="mb-2"
              ></v-text-field>

              <v-text-field
                v-model="dogbreed"
                label="Dog's breed"
                placeholder="If breed is specified in the listing"
                :rules="required"
                outlined
              ></v-text-field
            ></v-card>
          </v-container>
          <v-btn color="primary" :disabled="!valid" @click="validate"
            >Continue</v-btn
          >
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step editable :complete="step > 2" step="2">
          Personal details
        </v-stepper-step>
        <v-stepper-content step="2">
          <v-container>
            <v-card>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="name"
                    :rules="required"
                    label="Full name"
                    placeholder="Your full name as per your driver's license"
                    outlined
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="license"
                    :rules="required"
                    label="Driver's license"
                    placeholder="Australian driver's license number"
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
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="email"
                    :rules="required"
                    label="Email"
                    placeholder="e.g. email@hotmail.com"
                    outlined
                    required
                  ></v-text-field>
                </v-col>

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

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="address"
                    label="Residential address"
                    placeholder="Street address, Suburb"
                    outlined
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="postcode"
                    label="Postcode"
                    placeholder="e.g. 6000"
                    outlined
                    required
                  ></v-text-field>
                </v-col>

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
                    label="Company"
                    placeholder="Company name if applicable"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>

              <label>Residency type</label>
              <v-row class="radio-btns">
                <v-radio-group v-model="residency" row>
                  <v-radio label="Citizen" value="citizen"></v-radio>
                  <v-radio label="PR" value="pr"></v-radio>
                  <v-radio
                    label="Other (please provide details)"
                    value="other"
                  ></v-radio>
                </v-radio-group>
                <v-text-field
                  v-show="residency === 'other'"
                  v-model="otherdescription"
                  label="Provide details here"
                  outlined
                ></v-text-field>
              </v-row>

              <label>Are you thinking of adopting for yourself?</label>
              <v-row class="radio-btns">
                <v-radio-group v-model="adoptingfor" row>
                  <v-radio label="Yes" value="yes"></v-radio>
                  <v-radio
                    label="No (please provide details)"
                    value="no"
                  ></v-radio>
                </v-radio-group>
                <v-text-field
                  v-show="adoptingfor === 'no'"
                  v-model="nodescription"
                  label="Provide details here"
                  outlined
                ></v-text-field>
              </v-row>
            </v-card>
            <v-btn color="primary" :disabled="!valid" @click="validate"
              >Continue</v-btn
            >
            <v-btn text>Cancel</v-btn>
          </v-container>
        </v-stepper-content>

        <v-stepper-step editable :complete="step > 3" step="3"
          >Your living arrrangements
        </v-stepper-step>
        <v-stepper-content step="3">
          <v-container>
            <v-card>
              <label>Do you live alone?</label>
              <v-row class="radio-btns">
                <v-radio-group v-model="livealone" row>
                  <v-radio label="Yes" value="yes"></v-radio>
                  <v-radio
                    label="No (please provide details)"
                    value="no"
                  ></v-radio>
                </v-radio-group>
              </v-row>
              <v-container v-show="livealone === 'no'" class="family-members">
                <v-row>
                  <v-col cols="3">Full name</v-col>
                  <v-col cols="3">Age</v-col>
                  <v-col cols="3">Relationship</v-col>
                  <v-col cols="3"
                    >Health issues? (asthma, allergies, etc.)</v-col
                  >
                </v-row>
                <v-row v-for="member in familymembers" :key="member.index">
                  <v-col cols="3">
                    <v-text-field
                      v-model="member.fullname"
                      single-line
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="member.age"
                      single-line
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="member.relationship"
                      single-line
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="member.health"
                      single-line
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-btn>Add</v-btn><br />
              </v-container>

              <label
                >Is everyone at home happy and in agreement to getting a
                dog?</label
              >
              <v-row class="radio-btns">
                <v-radio-group v-model="dogagreement" row>
                  <v-radio label="Yes" value="yes"></v-radio>
                  <v-radio
                    label="No (please provide details)"
                    value="no"
                  ></v-radio>
                </v-radio-group>
                <v-text-field
                  v-show="dogagreement === 'no'"
                  v-model="nodescription"
                  label="Description if other residency type"
                  outlined
                ></v-text-field>
              </v-row>

              <label>Are you renting?</label>
              <v-row class="radio-btns">
                <v-radio-group v-model="renting" row>
                  <v-radio label="Yes" value="yes"></v-radio>
                  <v-radio label="No" value="no"></v-radio>
                </v-radio-group>
              </v-row>
              <div v-show="renting === 'yes'" class="pl-4">
                <label
                  ><br />If you are renting, please provide your
                  landlord/agent’s name and phone number contact details:
                  INCLUDE: Landlord's/Agent's Name, Company Address, Contact
                  Number (and their email if available)</label
                >
                <v-text-field
                  v-model="rentingdescription"
                  label="Landlord"
                  outlined
                ></v-text-field>
              </div>

              <label>What type of home do you live in?</label>
              <v-row class="radio-btns">
                <v-radio-group v-model="hometype" row>
                  <v-radio label="Apartment" value="apartment"></v-radio>
                  <v-radio label="Acreage" value="acreage"></v-radio>
                  <v-radio label="House" value="house"></v-radio>
                  <v-radio
                    label="Other (please provide details)"
                    value="other"
                  ></v-radio>
                </v-radio-group>
                <v-text-field
                  v-show="hometype === 'other'"
                  v-model="otherdescription"
                  label="Provide more details here"
                  outlined
                ></v-text-field>
              </v-row>

              <label
                >Do you have a yard or outdoor area? If yes, what is the
                approximate size of the outdoor area (m&sup2;)?</label
              >
              <v-row class="radio-btns">
                <v-radio-group v-model="outdoor" row>
                  <v-radio label="Yes" value="yes"></v-radio>
                  <v-radio label="No" value="no"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-show="outdoor === 'yes'"
                  v-model="yes"
                  label="Approximate size"
                  outlined
                ></v-text-field>
              </v-row>

              <v-text-field
                v-model="gateheight"
                label="How high are your gates or fences? (cm)"
                :rules="required"
                required
                outlined
                class="mb-2"
              ></v-text-field>

              <label>Do you have a pool, hot tub or spa area?</label>
              <v-row class="radio-btns">
                <v-radio-group v-model="pool" row>
                  <v-radio label="Yes" value="yes"></v-radio>
                  <v-radio label="No" value="no"></v-radio>
                </v-radio-group>
              </v-row>
              <div v-show="pool === 'yes'">
                <label
                  >If you answered yes to the above question, is the area
                  securely fenced so a dog can’t enter?
                </label>
                <v-row class="radio-btns">
                  <v-radio-group v-model="poolfenced" row>
                    <v-radio label="Yes" value="yes"></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                  </v-radio-group>
                </v-row>
              </div>
            </v-card>
          </v-container>

          <v-btn color="primary" @click="step = 4">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step editable :complete="step > 4" step="4"
          >Home environment</v-stepper-step
        >
        <v-stepper-content step="4">
          <v-card>
            <label
              >On average, how many hours would the dog be left alone at home
              each day?</label
            >
            <v-row>
              <v-col class="d-flex" cols="3">
                <v-select :items="hours" placeholder="1" outlined> </v-select>
              </v-col>
            </v-row>

            <label
              >If you’re working, how many hours do you spend at work?</label
            >
            <v-row>
              <v-col class="d-flex" cols="3">
                <v-select :items="hours" placeholder="1" outlined> </v-select>
              </v-col>
            </v-row>

            <v-text-field
              v-model="keepdogwhere"
              label="Where will you keep the dog if there’s no one at home?"
              :rules="required"
              outlined
              class="mb-2"
            ></v-text-field>

            <v-text-field
              v-model="dogstaywhere"
              label="If you have to go away for more than a day, where would the dog stay and with whom?"
              :rules="required"
              outlined
              class="mb-2"
            ></v-text-field>

            <v-text-field
              v-model="keepdogwherehome"
              label="Where would the dog be kept mostly when there are people home?"
              :rules="required"
              outlined
              class="mb-2"
            ></v-text-field>

            <v-text-field
              v-model="dognight"
              label="Where will the dog be kept during the night?"
              :rules="required"
              outlined
              class="mb-2"
            ></v-text-field>

            <label
              >How frequently would you be able to walk the dog and for how long
              each walk?
            </label>
            <v-row>
              <v-col class="d-flex" cols="3">
                <v-select
                  :items="walkfrequency"
                  placeholder="Once a week"
                  outlined
                >
                </v-select>
              </v-col>
              <v-col class="d-flex" cols="3">
                <v-select :items="walktime" placeholder="5 minutes" outlined>
                </v-select>
              </v-col>
            </v-row>

            <v-textarea
              outlined
              label="Do you plan to exercise the dog off lead? Please give details below"
              no-resize
              rows="3"
            ></v-textarea>

            <label>Are you thinking of adopting for yourself?</label>
            <v-row class="radio-btns">
              <v-radio-group v-model="children" row>
                <v-radio label="Yes" value="yes"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
            </v-row>

            <label>Do you plan to have kids in the future?</label>
            <v-row class="radio-btns">
              <v-radio-group v-model="futurekids" row>
                <v-radio label="Yes" value="yes"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
            </v-row>

            <label>Do young children visit your home often?</label>
            <v-row class="radio-btns">
              <v-radio-group v-model="childrenvisit" row>
                <v-radio label="Yes" value="yes"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
            </v-row>
          </v-card>
          <v-btn color="primary" :disabled="!valid" @click="validate"
            >Continue</v-btn
          >
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step editable :complete="step > 5" step="5"
          >Your experience with animals</v-stepper-step
        >
        <v-stepper-content step="5">
          <v-card>
            <label>Do you currently have other pets?</label>
            <v-row class="radio-btns">
              <v-radio-group v-model="otherpets" row>
                <v-radio
                  label="Yes (please describe below)"
                  value="yes"
                ></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
            </v-row>
            <v-container v-show="otherpets === 'yes'"
              ><p>****Other pets table****</p></v-container
            >

            <label
              >If you’ve had dogs in the past, tell us where they are
              now:</label
            >
            <v-row>
              <v-col class="d-flex" cols="6">
                <v-select
                  :items="pastdogs"
                  placeholder="Died of natural causes - old age"
                  outlined
                >
                </v-select>
              </v-col>
            </v-row>

            <label
              >Provide further details of what happened to the dog you
              had</label
            >
            <v-textarea
              v-model="dogdetails"
              outlined
              label="Include information about the illness/injury, and what treatment was given, or how it was released to another party."
              no-resize
              rows="3"
            ></v-textarea>

            <v-textarea
              outlined
              label="If you have in the past, or currently have a vet, can you tell us who they are? Include name of practice, Address, Contact number."
              no-resize
              rows="3"
            ></v-textarea>

            <v-textarea
              outlined
              label="If you have in the past, or currently use a dog groomer, can you tell us who they are?? Include name of Groomer, Address, Contact number."
              no-resize
              rows="3"
            ></v-textarea>
          </v-card>
          <v-btn color="primary" :disabled="!valid" @click="validate"
            >Continue</v-btn
          >
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step editable :complete="step > 6" step="6"
          >Your adoption expectations</v-stepper-step
        >
        <v-stepper-content step="6">
          <v-card>
            <v-textarea
              v-model="dogdetails"
              outlined
              label="What are your reasons for wishing to adopt a dog?"
              no-resize
              rows="3"
            ></v-textarea>

            <v-textarea
              outlined
              label="What traits are you looking for in a dog? (Eg. Companionship, family dog, energetic, friendly, mellow, etc.)"
              no-resize
              rows="3"
            ></v-textarea>

            <v-textarea
              outlined
              label="What type of things do you see yourself doing with your dog for leisure and recreation"
              no-resize
              rows="3"
            ></v-textarea>

            <label
              >Please indicate your preference as to what's acceptable or not
              acceptable to you for the following:</label
            >
            <v-row
              v-for="description in descriptions"
              :key="description.index"
              class="ml-3"
            >
              <v-col cols="3">{{ description }}</v-col>
              <v-col cols="3">
                <v-select
                  :items="acceptableornot"
                  placeholder="Acceptable"
                  outlined
                >
                </v-select>
              </v-col>
            </v-row>
            <p>
              Thank you for taking the time to complete this form. We understand
              that you may not wish to provide all personal details at this
              stage; they can be completed once you have spoken to our adoption
              representative and the decision to proceed with an adoption is
              made.
            </p>
          </v-card>
          <v-btn color="primary" @click="validate">Submit</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: (vm) => ({
    valid: false,
    step: 1,
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
    adoptingfor: null,
    menu: '',
    livealone: null,
    familymembers: [
      { index: '', fullname: '', age: '', relationship: '', health: '' },
    ],
    dogagreement: null,
    renting: null,
    hometype: null,
    outdoor: null,
    gateheight: '',
    pool: null,
    poolfenced: null,
    hours: Array.from({ length: 24 }, (_, i) => i + 1),
    keepdogwhere: '',
    dogstaywhere: '',
    keepdogwherehome: '',
    dognight: '',
    walkfrequency: [
      'Once a week',
      'Twice a week',
      '3x a week',
      '4x a week',
      '5x a week',
      '6x a week or more',
    ],
    walktime: [
      '5 minutes',
      '15 minutes',
      '30 minutes',
      '45 minutes',
      '60 minutes',
      'More than an hour per walk',
    ],
    children: '',
    futurekids: '',
    childrenvisit: '',
    otherpets: null,
    pastdogs: [
      'Died of natural causes - old age',
      'Died due to an illness / injury',
      'Died in a vehicle related accident',
      'Escaped and got lost',
      'Euthanised due to severe health problems',
      'Former partner got custody of the dog',
      'Rehomed through advertisements',
      'Staying with family (it was a family dog and I moved out)',
      'Surrendered / released to another party (please give details below)',
      'Other (please give details below)',
    ],
    dogdetails: '',
    descriptions: [
      'Not housetrained',
      'Digs',
      'Excessive barking',
      'Chews on things',
      'Jumps fences',
      'Separation anxiety',
      'Fearful of new things',
      'Aggression towards other dogs',
      'Chase cats',
      'Not lead trained',
      'Chase livestock',
      'On-going medical problems',
      'Sheds',
      'Minimal obedience training',
    ],
    acceptableornot: ['Acceptable', 'Will consider', 'Not acceptable'],
    otherdescription: '',
    nodescription: '',
    rentingdescription: '',
    yes: '',
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
    validate() {
      if (this.valid) {
        return this.step++
      }
      // this.$refs.form.validate()
    },
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
    getNumbers(start, stop) {
      return new Array(stop - start).fill(start).map((n, i) => n + i)
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

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  padding: 0 0;
}

.v-card {
  box-shadow: none !important;
}

.radio-btns {
  margin-left: 10px;
}

.input::placeholder {
  overflow: visible;
}
</style>
