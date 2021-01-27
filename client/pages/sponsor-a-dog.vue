<template>
  <div>
    <Header></Header>
    <v-container>
      <div id="whysponsor">
        <h2 class="text-center">Why sponsor a dog?</h2>
        <p class="text-center">
          Best Friends Animal Rescue Inc. is a small group with no funding,
          completely run by volunteers dedicated to rescuing and re-homing dogs
          in need in Perth. So far we have rescued and re-homed over 700 dogs
          and your donations allow us to continue our work. Your sponsorship
          donations will also be tax deductible. Here are some of the things
          your sponsorship will pay for…
        </p>
        <v-row>
          <v-col
            v-for="service in services"
            :key="service.servicename"
            cols="12"
            sm="3"
            class="px-5"
          >
            <Services
              :serviceimg="service.serviceimg"
              :servicename="service.servicename"
            ></Services>
          </v-col>
        </v-row>
      </div>
      <div id="availabledogs">
        <h2 class="text-center">Sponsor a dog to keep us going!</h2>
        <p class="text-center">
          Here are all our dogs available to sponsor, call Jeane on 0415 779 610
          to set-up a sponsorship!
        </p>
        <v-row>
          <v-col
            v-for="dog in filteredDogs"
            :key="dog.dogname"
            class="d-flex flex-column"
            cols="12"
            sm="4"
          >
            <DogCard
              :id="dog.id"
              :dogimage="dog.dogimage"
              :dogname="dog.dogname"
              :dogbreed="dog.dogbreed"
              :doggender="dog.doggender"
              :dogdescription="dog.dogdescription"
              :sponsor="dog.sponsor"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Header from '~/components/sponsor-a-dog/Header.vue'
import DogCard from '~/components/sponsor-a-dog/DogCard.vue'
import Services from '~/components/sponsor-a-dog/Services.vue'

export default {
  components: {
    Header,
    DogCard,
    Services,
  },
  data() {
    return {
      dogs: [
        {
          id: '1',
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Harley-standing-400x250.jpg',
          dogname: 'Harley',
          dogbreed: 'Border Collie',
          doggender: 'Male',
          dogdescription:
            'Harley is an 8 yr old male Border Collie. Extremely nice dog with good manners!',
          sponsor: false,
        },
        {
          id: '2',
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Mischief-head-and-shoulders-3-400x250.jpg',
          dogname: 'Mischief',
          dogbreed: 'German Shepherd',
          doggender: 'Female',
          dogdescription:
            'Mischief is a lovely 7 yr old German Shepherd female. She is lively and affectionate, but will require someone willing to do some training.',
          sponsor: true,
        },
        {
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Ruby-bat-ears-facing-up-cropped-rotated-1-116128_371x250.jpg',
          dogname: 'Ruby',
          dogbreed: 'Kelpie x Terrier',
          doggender: 'Female',
          dogdescription:
            'Ruby is a 6 month old Kelpie x Terrier. She is intelligent, energetic and will need training. Ruby is house-trained and dog-friendly.',
          sponsor: true,
        },
      ],
      services: [
        {
          serviceimg:
            'https://bfarescue.com.au/wp-content/uploads/2015/07/icon-sterilisation.png',
          servicename: 'Sterilisation',
        },
        {
          serviceimg:
            'https://bfarescue.com.au/wp-content/uploads/2015/07/icon-microchip.png',
          servicename: 'Microchipping',
        },
        {
          serviceimg:
            'https://bfarescue.com.au/wp-content/uploads/2015/07/icon-vaccination.png',
          servicename: 'Titre test',
        },
        {
          serviceimg:
            'https://bfarescue.com.au/wp-content/uploads/2015/07/icon-vet.png',
          servicename: 'Medical Treatments',
        },
      ],
    }
  },
  computed: {
    filteredDogs() {
      return this.dogs.filter((dog) => dog.sponsor === true)
    },
  },
}
</script>

<style scoped>
#whysponsor {
  margin: 50px 0;
  padding: 50px 50px;
  background-color: #f7f7f7;
}

#availabledogs {
  padding: 50px 50px;
  margin: 50px 0;
  background-color: #f7f7f7;
}
</style>
