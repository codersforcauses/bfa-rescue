<template>
  <div>
    <v-row class="landing center mb-3">
      <v-img
        id="paw"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Emoji_u1f43e.svg/1200px-Emoji_u1f43e.svg.png"
      ></v-img>
      <v-col
        class="landing-text text-center"
        offset-lg="1"
        cols="12"
        sm="4"
        align-self="center"
      >
        <h1>ADOPT A DOG!</h1>
        <p>
          We are building a retirement home for senior and special needs dogs.
        </p>
        <v-btn class="ma-2" color="#a2d0dd" @click="scroll">
          Explore &nbsp;&#8594;
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" offset-lg="1">
        <v-img
          id="dogimg"
          src="https://stablerandhowlett.com.au/wp-content/uploads/2020/07/mackay-puppy-preschool-151039766.png"
        ></v-img>
      </v-col>
    </v-row>
    <Header
      id="explore"
      title="About Us"
      subtitle="Best Friends Animal Rescue Inc. is a small group with no funding, completely run by volunteers dedicated to rescuing and re-homing dogs in need in Perth."
    ></Header>
    <v-container>
      <div id="availabledogs">
        <h2 class="text-center mb-2">Our Dogs</h2>
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
      </div>
      <div id="adopt" class="text-center">
        <h2 class="mb-2">Adopt a dog</h2>
        <p>Here's what the standard adoption fee would cover</p>
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
        <p>
          If you're interested in adopting any of our rescue dogs, please fill
          in our Expression of Interest Questionnaire.
        </p>
        <v-btn class="ma-2" outlined color="#1badbe" href="/adoption-form"
          >Online Application</v-btn
        >
        <v-btn
          class="ma-2"
          outlined
          color="#1badbe"
          href="./expression-of-interest-adoption-questionnaire.pdf"
          target="_blank"
          >Download &AMP; print
        </v-btn>
      </div>
      <div id="volunteer" class="text-center">
        <h2 class="mb-2">Volunteer</h2>
        <p>
          Help us by volunteering your services. Tell us how you would like to
          help and we'll work something out.
        </p>
        <v-btn class="ma-2" outlined color="#1badbe" href="/volunteer"
          >Learn more
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import Header from '~/components/Utils/Header.vue'
import DogCard from '~/components/home/DogCard.vue'
import Services from '~/components/home/Services.vue'

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
  methods: {
    scroll() {
      const el = document.getElementById('explore')
      window.scroll({ top: el.offsetTop, behavior: 'smooth' })
    },
  },
}
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

#paw {
  z-index: 0;
  position: absolute;
  right: 90px;
  width: 900px;
  transform: rotate(20deg) scaleX(-1);
  opacity: 0.8;
}

.landing {
  height: 100vh;
  position: relative;
}

.landing-text {
  z-index: 1;
}

.landing h1 {
  font-size: 45px;
  letter-spacing: 5px;
  font-weight: 450;
}

.landing p {
  font-size: 28px;
  font-weight: 300;
}

#dogimg {
  width: 650px;
}

#availabledogs {
  padding: 50px 50px;
  margin: 50px 0;
  background-color: #f7f7f7;
}

#adopt {
  padding: 50px 70px;
  background-color: #f7f7f7;
}

#volunteer {
  padding: 50px 70px;
  margin: 50px 0;
  background-color: #f7f7f7;
}

@media only screen and (max-width: 600px) {
  .landing {
    height: 60vh;
  }

  .landing-text {
    padding: 50px 35px 0 35px;
  }

  .landing h1 {
    font-size: 40px;
  }

  .landing p {
    font-size: 22px;
  }

  #paw {
    display: none;
  }

  #dogimg {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
