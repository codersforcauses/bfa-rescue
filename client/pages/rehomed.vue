<template>
  <div>
    <imageBanner></imageBanner>
    <v-container id="rehomedBlock">
      <v-row class="px-12 py-24">
        <v-col
          v-for="dog in dogs"
          :key="dog.id"
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
            :status="dog.status"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import imageBanner from '~/components/rehomed/imageBanner.vue'
import DogCard from '~/components/rehomed/DogCard.vue'

export default {
  components: {
    imageBanner,
    DogCard,
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
          status: 'adopted',
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
          status: 'adopted',
        },
        {
          id: '3',
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Ruby-bat-ears-facing-up-cropped-rotated-1-116128_371x250.jpg',
          dogname: 'Ruby',
          dogbreed: 'Kelpie x Terrier',
          doggender: 'Female',
          dogdescription:
            'Ruby is a 6 month old Kelpie x Terrier. She is intelligent, energetic and will need training. Ruby is house-trained and dog-friendly.',
          status: 'adopted',
        },
        {
          id: '4',
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/07/facebook-piccie-e1594129424999-650x390-77867_400x250.jpg',
          dogname: 'Bella',
          dogbreed: 'Rhodesian Ridgeback X Staffordshire Terrier',
          doggender: 'Female',
          dogdescription:
            'So soulful! A real lover too! A strong hand on the lead and I am yours forever!',
          status: 'adopted',
        },
        {
          id: '5',
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/06/Standing-coat-cropped-400x250.jpg',
          dogname: 'Richie',
          dogbreed: 'Pomeranian',
          doggender: 'Male',
          dogdescription:
            'Give this lively young male Pomeranian the new home he deserves.',
          status: 'adopted',
        },
        {
          id: '6',
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/02/Chevy-lying-down-1-400x250.jpg',
          dogname: 'Fudge',
          dogbreed: 'Beagle X Labrador',
          doggender: 'Female',
          dogdescription:
            'Dog & people friendly and used to kids over 8 yrs old.',
          status: 'adopted',
        },
        {
          id: '7',
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Harley-standing-400x250.jpg',
          dogname: 'Harley',
          dogbreed: 'Border Collie',
          doggender: 'Male',
          dogdescription:
            'Harley is an 8 yr old male Border Collie. Extremely nice dog with good manners!',
          status: 'adopted',
        },
        {
          id: '8',
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Mischief-head-and-shoulders-3-400x250.jpg',
          dogname: 'Mischief',
          dogbreed: 'German Shepherd',
          doggender: 'Female',
          dogdescription:
            'Mischief is a lovely 7 yr old German Shepherd female. She is lively and affectionate, but will require someone willing to do some training.',
          status: 'adopted',
        },
        {
          id: '9',
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Ruby-bat-ears-facing-up-cropped-rotated-1-116128_371x250.jpg',
          dogname: 'Ruby',
          dogbreed: 'Kelpie x Terrier',
          doggender: 'Female',
          dogdescription:
            'Ruby is a 6 month old Kelpie x Terrier. She is intelligent, energetic and will need training. Ruby is house-trained and dog-friendly.',
          status: 'adopted',
        },
      ],
    }
  },
}
</script>

<style scoped>
div {
  background-color: #f7f7f7;
}
#rehomedBlock {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
