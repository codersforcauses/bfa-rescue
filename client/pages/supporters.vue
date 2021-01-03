<template>
  <div class="container">
    <hero />
    <div class="full-width">
      <v-row id="regular" justify="center" align="center" class="top">
        <v-col cols="12" sm="6" md="4">
          <v-card class="smallcard">
            <v-img
              :src="require('@/assets/sponsors/energy-gov.jpg')"
              alt="energy-efficient-communities"
            >
            </v-img>
            <v-card-title class="nobreak">
              Energy Efficient Communities
            </v-card-title>
            <v-card-text>
              The new sanctuary is Solar Powered! Thanks, EECP!
            </v-card-text>
            <v-card-actions>
              <v-btn
                href="https://www.energy.gov.au/government-priorities/energy-programs/energy-efficient-communities-program"
                rel="noreferrer"
                outlined
                color="primary"
              >
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="smallcard">
            <v-img
              :src="require('@/assets/sponsors/syds-building.jpg')"
              alt="syds-building"
            >
            </v-img>
            <v-card-title class="nobreak">
              Syd's Building Maintainance
            </v-card-title>
            <v-card-text>Paul Barker, you are our HERO!</v-card-text>
            <v-card-actions>
              <v-btn
                href="https://www.facebook.com/SydsBuildingMaintenance/"
                rel="noreferrer"
                outlined
                color="primary"
              >
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="smallcard">
            <v-img
              :src="require('@/assets/sponsors/southern-raw-petfood.jpg')"
              alt="Southern-raw-pet-meats"
            >
            </v-img>
            <v-card-title class="nobreak">
              Southern Raw Pet Meats
            </v-card-title>
            <v-card-text> Thanks to SRPM for donations of food!</v-card-text>
            <v-card-actions>
              <v-btn
                href="https://www.southernrawpetmeats.com.au/"
                rel="noreferrer"
                outlined
                color="primary"
              >
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row id="regular" justify="center" align="center">
        <v-col cols="12" sm="6" md="4">
          <v-card class="fullcard">
            <v-img
              :src="require('@/assets/sponsors/lotterywest.jpg')"
              alt="lotterywest"
            >
            </v-img>
            <v-card-title class="nobreak">LotteryWest</v-card-title>
            <v-card-text class="keeptogether">
              Thank you to LotteryWest for a grant to furnish the new sanctuary
              building with flooring and whitegoods! You can visit their website
              at the link below!
            </v-card-text>
            <v-card-actions>
              <v-btn
                href="https://www.lotterywest.wa.gov.au/"
                rel="noreferrer"
                outlined
                color="primary"
              >
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="fullcard">
            <v-img
              :src="require('@/assets/sponsors/dog-centric.jpg')"
              alt="DogCentric"
            >
            </v-img>
            <v-card-title class="nobreak">DogCentric</v-card-title>
            <v-card-text class="keeptogether">
              DogCentric's goal is to improve the relationship between people
              and their dogs. If you are a BFA Rescue foster carer you get a
              discount.
            </v-card-text>
            <v-card-actions>
              <v-btn
                href="https://www.facebook.com/DogCentricPerth"
                rel="noreferrer"
                outlined
                color="primary"
              >
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="fullcard">
            <v-img
              :src="require('@/assets/sponsors/shutter-paws.jpg')"
              alt="shutterpaws"
            >
            </v-img>
            <v-card-title class="nobreak">Shutter Paws</v-card-title>
            <v-card-text class="keeptogether">
              Photographers donating their time helping foster carers, rescue
              groups and shelters to get the best possible photos to help with
              adoption.
            </v-card-text>
            <v-card-actions>
              <v-btn
                href="https://www.facebook.com/shutterpawsPerth"
                rel="noreferrer"
                outlined
                color="primary"
              >
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row id="regular" justify="center" align="center" class="bottom">
        <v-col cols="12" sm="6" md="4">
          <v-card class="fullcard">
            <v-img
              :src="require('@/assets/sponsors/michelles-dog-grooming.jpg')"
              alt="michelles-dog-grooming"
            >
            </v-img>
            <v-card-title class="nobreak">Michelle's Dog Grooming</v-card-title>
            <v-card-text class="keeptogether">
              My service is like no other as I always consider your dogs
              wellbeing and safety first and I treat them as if they own.<br /><br />
              Michelle Kefalinos - 0439 781 305
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="fullcard">
            <v-img
              :src="require('@/assets/sponsors/nola-criddle-foundation.jpg')"
              alt="nola-criddle-foundation"
            >
            </v-img>
            <v-card-title class="nobreak">
              Nola Criddle Foundations
            </v-card-title>
            <v-card-text class="keeptogether">
              A big thanks to the Nola Criddle Foundation for your continued
              sponsorship. If we didn’t have your sponsorship for the last 4
              years we wouldn’t have been able to start building our special
              retirement home for dogs.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="fullcard">
            <v-img
              :src="
                require('@/assets/sponsors/kevin-mcnulty-dog-behaviourist.jpg')
              "
              height="100%"
              alt="kevin-mcnulty-dog-behaviourist"
            >
            </v-img>
            <v-card-title class="nobreak">
              Kevin McNulty Dog Behaviourist
            </v-card-title>
            <v-card-text class="keeptogether">
              Kevin provides gentle, professional training to dogs in the Perth
              Metropolitan area. Call at 0416 791 195
            </v-card-text>
            <v-card-actions>
              <v-btn
                href="https://www.facebook.com/k9trainingandcommunication/"
                rel="noreferrer"
                outlined
                color="primary"
              >
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero,
  },
}
</script>

<style lang="scss">
.full-width {
  background-color: rgb(247, 247, 247);
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  margin-bottom: -25px;
  margin-top: -90px;
}
#regular {
  width: 80%;
  margin-left: 10%;
}
.top {
  padding-top: 50px;
}
.bottom {
  padding-bottom: 50px;
}
.keeptogether {
  -webkit-hyphens: none;
  -moz-hyphens: none;
  hyphens: none;
}
.nobreak {
  word-break: keep-all;
}
.fullcard {
  min-height: 60vh;
}
.smallcard {
  min-height: 42vh;
}
</style>
