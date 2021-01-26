<template>
  <div>
    <hero
      title="Provide a service that helps us with our rescue work"
      text="Best Friends Animal Rescue is run by a group of volunteers, so if you
          can provide services such as training, grooming, photography,
          construction, etc. Please reach out to us. We need all the help we can
          get with our rescue operations."
      button="Contact Us"
      image="url(https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/10/white-dog-tongue.png)"
    />
    <v-sheet color="#f7f7f7" width="100%">
      <v-container>
        <v-row class="px-12 py-24">
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
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import Hero from '~/components/supporters/Hero.vue'
import Card from '~/components/supporters/Card.vue'

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
          carddescription:
            'The new sanctuary is Solar Powered! Thank you to the EECP WA Government initiative!',
          cardlink:
            'https://www.energy.gov.au/government-priorities/energy-programs/energy-efficient-communities-program',
        },
        {
          imagelink: 'sponsors/syds-building.jpg',
          cardtitle: "Syd's Building Maintainance",
          carddescription:
            'Brickie extraordianaire, who volunteered all of his time to build the Retirement Home for Senior and Special Needs Dogs!',
          cardlink: 'https://www.facebook.com/SydsBuildingMaintenance/',
        },
        {
          imagelink: 'sponsors/southern-raw-petfood.jpg',
          cardtitle: 'Southern Raw Pet Meats',
          carddescription:
            ' BFAR is thankful for our friends at SRPM for donating some of their spectacularly good products in times when we are struggling to feed the hordes! ',
          cardlink: 'https://www.southernrawpetmeats.com.au/',
        },
        {
          imagelink: 'sponsors/lotterywest.jpg',
          cardtitle: 'Lotterywest',
          carddescription:
            'Thank you to LotteryWest for a grant to furnish the new sanctuary building with flooring and whitegoods!',
          cardlink: 'https://www.lotterywest.wa.gov.au/',
        },
        {
          imagelink: 'sponsors/dog-centric.jpg',
          cardtitle: 'DogCentric',
          carddescription:
            'DogCentric is located in Bayswater. Their goal is to improve the relationship between people and their dogs.',
          cardlink: 'https://www.facebook.com/DogCentricPerth',
        },
        {
          imagelink: 'sponsors/shutter-paws.jpg',
          cardtitle: 'Shutter Paws',
          carddescription:
            'Shutter Paws is for photography enthusiasts who want to donate their time to helping rescue groups.',
          cardlink: 'https://www.facebook.com/shutterpawsPerth',
        },
        {
          imagelink: 'sponsors/michelles-dog.jpg',
          cardtitle: "Michelle's Dog Grooming",
          carddescription:
            'My service is like no other as I always consider your dogs wellbeing and safety first and I treat them as if they own. Michelle Kefalinos - 0439 781 305',
          cardlink:
            'https://www.truelocal.com.au/business/michelles-clip-n-snip-dog-grooming/greenwood',
        },
        {
          imagelink: 'sponsors/nola-criddle.jpg',
          cardtitle: 'Nola Criddle Foundation',
          carddescription:
            'Thanks to the Nola Criddle Foundation for your continued sponsorship. Without it we wouldn’t have been able to start build our retirement home for dogs.',
          cardlink:
            'https://www.infobel.com/en/australia/nola_criddle_foundation/south_perth/AU101122220/businessdetails.aspx',
        },
        {
          imagelink: 'sponsors/kevin-mcnulty.jpg',
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
