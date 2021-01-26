<template>
  <div>
    <Header></Header>
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.cardtitle" cols="12" sm="4">
          <Card
            :imagelink="card.imagelink"
            :cardtitle="card.cardtitle"
            :carddescription="card.carddescription"
            :cardlink="card.cardlink"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from '~/components/health/navpage/Card.vue'
import Header from '~/components/health/navpage/Header.vue'

export default {
  components: {
    Header,
    Card,
  },
  data() {
    return {
      cards: [
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/12/dog-vaccination-terrier-110687510-011-400x250.jpg',
          cardtitle: 'Canine Vaccination Protocols',
          carddescription:
            'Learn about dog vaccination protocols and avoid over vaccinating your dog! Over vaccinating your pooch can cause more harm than good.',
          cardlink: '#',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/puppy-in-garden-146152_400x250.jpg',
          cardtitle: 'Common plants harmful to cats & dogs',
          carddescription:
            'Here is a list of common plants we’ve compiled from various sources as a guide for you to keep an eye out for. When you see your cat or dog suffering with symptoms such as vomiting, diarrhoea, breathing difficulties, salivation, weakness, abnormal urine and any other abnormal behaviour, rush it to the vet immediately!',
          cardlink: '/harmful-plants',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/07/dog-turmeric-245463_400x250.jpg',
          cardtitle: 'Feeding and nutrition tips for dogs',
          carddescription:
            'Did you know that adding turmeric to your canine’s daily diet has substantial benefits to their health? Turmeric powder is a vibrant yellow spice used liberally in Indian curries. It is known to many as a natural wonder and has a long history of use in both Indian and Chinese traditional medicine. Turmeric is known to reduce inflammation, particular itchy skin and arthritis.',
          cardlink: '#',
        },
      ],
    }
  },
}
</script>
