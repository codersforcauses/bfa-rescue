<template>
  <div class="supporter-cards">
    <hero />
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img
            :src="
              require('@/assets/sponsors/energy-efficient-communities-program.png')
            "
            alt="energy-efficient-communities-program"
            height="200px"
          ></v-img>
          <v-card-title>Energy Efficient Communities</v-card-title>
          <v-card-text>
            The new sanctuary is Solar Powered! Thanks, EECP!
          </v-card-text>
          <v-card-actions>
            <v-btn
              href="https://www.energy.gov.au/government-priorities/energy-programs/energy-efficient-communities-program"
              text
              rel="noreferrer"
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img
            :src="require('@/assets/sponsors/syds-building.jpg')"
            height="200px"
            alt="syds-building"
          >
          </v-img>
          <v-card-title>Syd's Building Maintainance</v-card-title>
          <v-card-text>Paul Barker, you are our HERO!</v-card-text>
          <v-card-actions>
            <v-btn
              href="https://www.facebook.com/SydsBuildingMaintenance/"
              text
              rel="noreferrer"
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img
            :src="require('@/assets/sponsors/southern-raw-pet.jpg')"
            height="200px"
            alt="southern-raw-pet-meats"
          >
          </v-img>
          <v-card-title>Southern Raw Pet Meats</v-card-title>
          <v-card-text> Thanks to SRPM for donations of food!</v-card-text>
          <v-card-actions>
            <v-btn
              href="https://www.southernrawpetmeats.com.au/"
              text
              rel="noreferrer"
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img
            :src="require('@/assets/sponsors/lotterywest.jpg')"
            height="200px"
            alt="lotterywest"
          >
          </v-img>
          <v-card-title>LotteryWest</v-card-title>
          <v-card-text>
            Thank you to LotteryWest for a grant to furnish the new sanctuary
            building with flooring and whitegoods! You can visit their website
            at the link below!
          </v-card-text>
          <v-card-actions>
            <v-btn
              href="https://www.lotterywest.wa.gov.au/"
              rel="noreferrer"
              text
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img
            :src="require('@/assets/sponsors/dog-centric.jpg')"
            height="200px"
            alt="DogCentric"
          >
          </v-img>
          <v-card-title>DogCentric</v-card-title>
          <v-card-text>
            DogCentric's goal is to improve the relationship between people and
            their dogs. If you are a BFA Rescue foster carer you’ll get a 25%
            discount.
          </v-card-text>
          <v-card-actions>
            <v-btn
              href="https://www.facebook.com/DogCentricPerth"
              rel="noreferrer"
              text
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img
            :src="require('@/assets/sponsors/shutter-paws.jpg')"
            height="200px"
            alt="shutterpaws"
          >
          </v-img>
          <v-card-title>Shutter Paws</v-card-title>
          <v-card-text>
            Shutter Paws are photographers donating their time helping foster
            carers, rescue groups and shelters to get the best possible photos
            to help with adoption.
          </v-card-text>
          <v-card-actions>
            <v-btn
              href="https://www.facebook.com/shutterpawsPerth"
              rel="noreferrer"
              text
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img
            :src="require('@/assets/sponsors/michelles-dog-grooming.jpg')"
            height="200px"
            alt="michelles-dog-grooming"
          >
          </v-img>
          <v-card-title>Michelle's Dog Grooming</v-card-title>
          <v-card-text>
            My service is like no other as I always consider your dogs wellbeing
            and safety first and I treat them as if they were my own.<br /><br />
            Michelle Kefalinos - 0439 781 305
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img
            :src="require('@/assets/sponsors/nola-criddle-foundation.jpg')"
            height="200px"
            alt="nola-criddle-foundation"
          >
          </v-img>
          <v-card-title>Nola Criddle Foundations</v-card-title>
          <v-card-text>
            A big thanks to the Nola Criddle Foundation for your continued
            sponsorship. If we didn’t have your sponsorship for the last 4 years
            we wouldn’t have been able to start building our senior and special
            retirement home for dogs.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img
            :src="
              require('@/assets/sponsors/kevin-mcnulty-dog-behaviourist.jpg')
            "
            height="200px"
            alt="kevin-mcnulty-dog-behaviourist"
          >
          </v-img>
          <v-card-title>Kevin McNulty Dog Behaviourist</v-card-title>
          <v-card-text>
            Kevin provides gentle, professional training to dogs in the Perth
            Metropolitan area. Call at 0416 791 195
          </v-card-text>
          <v-card-actions>
            <v-btn
              href="https://www.facebook.com/k9trainingandcommunication/"
              text
              rel="noreferrer"
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
