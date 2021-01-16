<template>
  <v-container>
    <Header
      title="About Us"
      subtitle="********Information such as what their mission is, where they are located
      and what they do/what impact do they bring etc.*******"
    ></Header>
    <div id="availabledogs">
      <h2 class="text-center">Our Dogs</h2>
      <p class="text-center">
        Adopt a dog to be your best friend today! Here are all our available
        dogs for adoption
      </p>
      <v-row>
        <v-col
          v-for="dog in dogs"
          :key="dog.dogname"
          class="d-flex flex-column"
          cols="12"
          sm="4"
        >
          <DogCard
            :dogimage="dog.dogimage"
            :dogname="dog.dogname"
            :dogbreed="dog.dogbreed"
            :doggender="dog.doggender"
            :dogdescription="dog.dogdescription"
            :status="dog.status"
          />
        </v-col>
      </v-row>
    </div>
    <div id="adopt" class="text-center">
      <h2>Adopt a dog</h2>
      <p>
        If you're interested in adopting any of our rescue dogs, please fill in
        our Expression of Interest Questionnaire.
        <br /><br />
        *********NOTE: Contains brief description about dog adoption, link to
        the adoption page/form for more details. Need svg icons********
      </p>
      <v-btn class="ma-2" outlined color="#fff" href="#"
        >Online Application</v-btn
      >
      <v-btn
        class="ma-2"
        outlined
        color="#fff"
        href="./expression-of-interest-adoption-questionnaire.pdf"
        target="_blank"
        >Download &AMP; print
      </v-btn>
    </div>
    <div id="volunteer" class="text-center">
      <h2>Volunteer</h2>
      <p>
        Help us by volunteering your services. Tell us how you would like to
        help and we'll work something out.
        <br /><br />
        *********NOTE: Contains brief description about getting involved as a
        volunteer. link to the volunteer section for more details*******
      </p>
      <v-btn class="ma-2" outlined color="#1badbe" href="#"
        >Online Application
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="#1badbe"
        href="./volunteer-application-form.pdf"
        target="_blank"
        >Download &AMP; print
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Header from '~/components/Utils/Header.vue'
import DogCard from '~/components/home/DogCard.vue'

export default {
  components: {
    Header,
    DogCard,
  },
  data() {
    return {
      dogs: [
        {
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
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Mischief-head-and-shoulders-3-400x250.jpg',
          dogname: 'Mischief',
          dogbreed: 'German Shepherd',
          doggender: 'Female',
          dogdescription:
            'Mischief is a lovely 7 yr old German Shepherd female. She is lively and affectionate, but will require someone willing to do some training.',
        },
        {
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Ruby-bat-ears-facing-up-cropped-rotated-1-116128_371x250.jpg',
          dogname: 'Ruby',
          dogbreed: 'Kelpie x Terrier',
          doggender: 'Female',
          dogdescription:
            'Ruby is a 6 month old Kelpie x Terrier. She is intelligent, energetic and will need training. Ruby is house-trained and dog-friendly.',
        },
        {
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/07/facebook-piccie-e1594129424999-650x390-77867_400x250.jpg',
          dogname: 'Bella',
          dogbreed: 'Rhodesian Ridgeback X Staffordshire Terrier',
          doggender: 'Female',
          dogdescription:
            'So soulful! A real lover too! A strong hand on the lead and I am yours forever!',
        },
        {
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/06/Standing-coat-cropped-400x250.jpg',
          dogname: 'Woodie',
          dogbreed: 'Chihuahua X Maltese',
          doggender: 'Male',
          dogdescription:
            'People and dog friendly! Woodie really needs a home with a small playmate!',
        },
        {
          dogimage:
            'https://bfarescue.com.au/wp-content/uploads/2020/02/Chevy-lying-down-1-400x250.jpg',
          dogname: 'Chevy',
          dogbreed: 'English Staffordshire Terrier',
          doggender: 'Female',
          dogdescription:
            'Dog/people friendly 12 yr old female Staffie. She is deaf, but very sweet!',
        },
      ],
    }
  },
}
</script>

<style>
#availabledogs {
  padding: 50px 50px;
  margin: 50px 0;
  background-color: #f7f7f7;
}

#adopt {
  padding: 70px 70px;
  background-color: #3295b2;
  color: #fff;
}

#volunteer {
  padding: 70px 70px;
  margin: 50px 0;
  background-color: #f7f7f7;
}
</style>
