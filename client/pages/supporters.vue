<template>
  <div class="container">
    <hero
      title="Provide a service that helps us with our rescue work"
      text="Best Friends Animal Rescue is run by a group of volunteers, so if you
          can provide services such as training, grooming, photography,
          construction, etc. Please reach out to us. We need all the help we can
          get with our rescue operations."
      button="Contact Us"
      image="url(https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/10/white-dog-tongue.png)"
    />
    <v-container>
      <div class="full-width">
        <v-row id="regular" justify="center" align="center" class="padded">
          <v-col
            v-for="card in cards"
            :key="card.cardtitle"
            class="d-flex flex-column"
            cols="12"
            sm="6"
            md="4"
          >
            <Card
              :imagelink="card.imagelink"
              :cardtitle="card.cardtitle"
              :carddescription="card.carddescription"
              :cardlink="card.cardlink"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Hero from '~/components/Supporters/Hero.vue'
import Card from '~/components/Supporters/Card.vue'

export default {
  components: {
    Hero,
    Card,
  },
  data() {
    return {
      cards: [
        {
          imagelink: 'sponsors/energy-gov.jpg',
          cardtitle: 'Energy Efficient Communities',
          carddescription: 'The new sanctuary is Solar Powered! Thanks, EECP!',
          cardlink:
            'https://www.energy.gov.au/government-priorities/energy-programs/energy-efficient-communities-program',
        },
        {
          imagelink: 'sponsors/syds-building.jpg',
          cardtitle: "Syd's Building Maintainance",
          carddescription: 'Paul Barker, you are our HERO!',
          cardlink: 'https://www.facebook.com/SydsBuildingMaintenance/',
        },
        {
          imagelink: 'sponsors/southern-raw-petfood.jpg',
          cardtitle: 'Southern Raw Pet Meats',
          carddescription: 'Thanks to SRPM for donations of food!',
          cardlink: 'https://www.southernrawpetmeats.com.au/',
        },
        {
          imagelink: 'sponsors/lotterywest.jpg',
          cardtitle: 'Lotterywest',
          carddescription:
            'Thank you to LotteryWest for a grant to furnish the new sanctuary building with flooring and whitegoods! You can visit their website at the link below!',
          cardlink: 'https://www.lotterywest.wa.gov.au/',
        },
        {
          imagelink: 'sponsors/dog-centric.jpg',
          cardtitle: 'DogCentric',
          carddescription:
            "DogCentric's goal is to improve the relationship between people and their dogs. If you are a BFA Rescue foster carer you get a discount.",
          cardlink: 'https://www.facebook.com/DogCentricPerth',
        },
        {
          imagelink: 'sponsors/shutter-paws.jpg',
          cardtitle: 'Shutter Paws',
          carddescription:
            'Photographers donating their time helping foster carers, rescue groups and shelters to get the best possible photos to help with adoption.',
          cardlink: 'https://www.facebook.com/shutterpawsPerth',
        },
        {
          imagelink: 'sponsors/michelles-dog-grooming.jpg',
          cardtitle: "Michelle's Dog Grooming",
          carddescription:
            'My service is like no other as I always consider your dogs wellbeing and safety first and I treat them as if they own. Michelle Kefalinos - 0439 781 305',
          cardlink:
            'https://www.truelocal.com.au/business/michelles-clip-n-snip-dog-grooming/greenwood',
        },
        {
          imagelink: 'sponsors/nola-criddle-foundation.jpg',
          cardtitle: 'Nola Criddle Foundation',
          carddescription:
            'A big thanks to the Nola Criddle Foundation for your continued sponsorship. Without it we wouldn’t have been able to start building our special retirement home for dogs.',
          cardlink:
            'https://www.infobel.com/en/australia/nola_criddle_foundation/south_perth/AU101122220/businessdetails.aspx',
        },
        {
          imagelink: 'sponsors/kevin-mcnulty-dog-behaviourist.jpg',
          cardtitle: 'Kevin McNulty Dog Behaviourist',
          carddescription:
            'Kevin provides gentle, professional training to dogs in the Metropolitan area. Call at 0416 791 195',
          cardlink: 'https://www.facebook.com/k9trainingandcommunication/',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.full-width {
  background-color: rgb(247, 247, 247);
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  margin-bottom: -50px;
  margin-top: -50px;
}
#regular {
  width: 80%;
  margin-left: 10%;
}
.padded {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
