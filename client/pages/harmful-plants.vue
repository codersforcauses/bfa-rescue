<template>
  <v-container>
    <v-container>
      <h1>
        <p class="text-center">
          Common garden plants poisonous to cats and dogs
        </p>
      </h1>
    </v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto elevation-0" width="80%">
          <v-img
            src="https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/puppy-in-garden.jpg"
            width="80%"
            class="mx-auto rounded"
          ></v-img>
          <v-card-text>
            <div>
              Cats and dogs have a penchant of putting things in their mouth to
              chew or eat. Cats tend to gravitate towards plastic, wool or
              anything that moves, and dogs – typically whatever it can get its
              chops around. As our pets’ guardians, we need to be vigilant in
              ensuring that they don’t ingest items that could be harmful to
              their health.<br /><br />
              So what about plants? We all love a beautiful garden, lovely
              houseplants or fresh cut flowers in the house, but did you know
              some of these flora are toxic to our canine and feline friends?
              <br /><br />
              In order to prevent poisoning your beloved pet, avoid placing
              toxic plants in your home where they may have access to, or simply
              avoid buying them at all. Not allowing them chow down on unknown
              vegetation is key. Outdoors could be more difficult, especially if
              your cat or dog has a wide vicinity to roam.
              <br /><br />
              Here is a list of common plants we’ve compiled from various
              sources as a guide for you to keep an eye out for. When you see
              your cat or dog suffering with symptoms such as vomiting,
              diarrhoea, breathing difficulties, salivation, weakness, abnormal
              urine and any other abnormal behaviour, rush it to the vet
              immediately!
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="card in cards" :key="card.cardtitle" cols="12">
        <Card
          :imagelink="card.imagelink"
          :cardtitle="card.cardtitle"
          :carddescription="card.carddescription"
          :symptoms="card.symptoms"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '~/components/health/poison/Card.vue'

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/aloevera.jpg',
          cardtitle: 'Aloe vera',
          carddescription:
            'This might be a shocking one. While Aloe vera is great for treating burns on humans, it is toxic to cats and dogs.',
          symptoms:
            'Vomiting, diarrhoea, tremors, anorexia, depression and change in urine colour.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/amaryllis.jpg',
          cardtitle: 'Amaryllis',
          carddescription:
            'A common garden ornament, beautiful, but toxic to cats and dogs. The bulbs in this plant contain the most toxins.',
          symptoms:
            'Vomiting, diarrhoea, abdominal pain, hyper-salivation, anorexia, tremors and depression.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/rhododendron.jpg',
          cardtitle: 'Azalea / Rhododendron',
          carddescription:
            'A common garden bush because of its beautiful blossoms. This plant is not only highly toxic and dangerous to cats and dogs, it is also harmful to horses, goats and sheep. Ingesting just a couple of leaves can cause severe health issues.',
          symptoms:
            'Acute digestive upset, hyper-salivation, loss of appetite, diarrhoea, colic, weakness, loss of coordination, stupor, paralysis, depression, slow heart rate, weak heart beat, and recumbency for two or more days. After two days, either there’s improvement or the animal may become comatose and die.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/babys_breath.jpg',
          cardtitle: 'Baby’s breath',
          carddescription:
            'Not the most toxic of plants to have in the house, but this sweet filler for many floral arrangements can cause digestive issues.',
          symptoms: 'Vomiting and diarrhoea.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/begonia.jpg',
          cardtitle: 'Begonia',
          carddescription:
            'This popular garden plant is toxic to both cats and dogs. The tubers contain the most toxins.',
          symptoms:
            'Oral irritation, intense burning sensation and irritation in the mouth, tongue and lips, hyper-salivation, vomiting and difficulty swallowing.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/carnations.jpg',
          cardtitle: 'Carnations',
          carddescription:
            'Pretty and also not the most poisonous in our list. But, this lovely plant will cause some stomach upset and allergic reactions.',
          symptoms: 'Dermatitis and mild gastrointestinal signs.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/castorbean.jpg',
          cardtitle: 'Castor bean',
          carddescription:
            'This is a popular landscaping plant used in many parks and public spaces. So watch out for them when you’re walking your dog!',
          symptoms:
            'Vomiting, diarrhoea, abdominal pain, hyper-salivation, excessive thirst, weakness and loss of appetite. In severe cases, dehydration, muscle twitch, tremors, seizures, coma and death.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/chrysanthemum.jpg',
          cardtitle: 'Chrysanthemum',
          carddescription:
            'The flowers are great for brewing tea, but they will cause discomfort in your cat or dog.',
          symptoms: 'Vomiting, diarrhoea, hyper-salivation and dermatitis.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/cyclamen.jpg',
          cardtitle: 'Cyclamen',
          carddescription:
            'A very popular flowering plant and commonly sold. It is toxic to cats and dogs, and the highest concentration of toxins is located in the root.',
          symptoms:
            'Gastrointestinal irritation, intense vomiting, and death in some cases.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/daffodil.jpg',
          cardtitle: 'Daffodil',
          carddescription:
            'These pretty yellow spring flowers are toxic to cats and dogs. The bulbs contains the highest amount of toxins.',
          symptoms:
            'Vomiting, diarrhoea, hyper-salivation, low blood pressure, convulsions if ingested in large quantities, tremors and cardiac  arrhythmias.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/gladiolus.jpg',
          cardtitle: 'Gladiola',
          carddescription:
            'They come in various colours and are great in the garden or used in floral arrangements. The bulb is the most toxic to cats and dogs.',
          symptoms: 'Vomiting, diarrhoea, hyper-salivation and lethargy.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/hostas.jpg',
          cardtitle: 'Hosta',
          carddescription:
            'An extremely popular house plant. Most cats and dogs are not intrigued by them, but they are toxic nonetheless. So, make sure your pet doesn’t try to chew on the leaves.',
          symptoms: 'Vomiting, diarrhoea and depression.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/ivy.jpg',
          cardtitle: 'Ivy',
          carddescription:
            'All varieties of ivy are poisonous to cats and dogs.',
          symptoms: 'Vomiting, diarrhoea, hyper-salivation and abdominal pain.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/lillytypes.jpg',
          cardtitle: 'Lilies',
          carddescription:
            'Curiously, lilies are not toxic to dogs, but these beautiful and fragrant plants are highly poisonous to cats. All varieties are dangerous even when only a small amount is ingested.',
          symptoms: 'Kidney failure.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/milkweed.jpg',
          cardtitle: 'Milkweed',
          carddescription:
            'This common garden plant is highly toxic to cats and dogs.',
          symptoms:
            'Vomiting, diarrhoea, weakness, depression, anorexia are the first symptoms, then followed by seizures, difficulty breathing, rapid but weak pulse, dilated pupils, kidney or liver failure, coma, respiratory paralysis and death.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/morningglory.jpg',
          cardtitle: 'Morning glory',
          carddescription:
            'Although one of the symptoms is hallucination and it might be funny to see a cat high or dog experiencing rubber reality, they also cause other harmful health issues.',
          symptoms:
            'Hallucinations, gastrointestinal upset, agitation, tremors, disorientation, ataxia and anorexia.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/white-oleander.jpg',
          cardtitle: 'Oleander',
          carddescription:
            'All parts of this plant contain a toxic cardiac glycoside and can cause severe health problems in most animals and humans.',
          symptoms:
            'Colic, diarrhoea, bloody stools, incoordination, breathing difficulties, muscle tremors, recumbency and death from cardiac failure.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/poinsettia.jpg',
          cardtitle: 'Poinsettia',
          carddescription:
            'This festive plant isn’t as toxic as most might think. They will cause some discomfort to your cat or dog, but nothing fatal.',
          symptoms: 'Irritation to the mouth, stomach upset and mild vomiting.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/pothos.jpg',
          cardtitle: 'Pothos',
          carddescription:
            'Common house plant, but not the most toxic in the list. However, they do cause adverse reactions when a cat or dog chews on it.',
          symptoms:
            'Oral irritation, intense burning and irritation in the mouth, tongue and lips, excessive drooling, vomiting and difficulty swallowing.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/sago-palm.jpg',
          cardtitle: 'Sago Palm',
          carddescription:
            'A popular landscaping plant and animals think they’re delicious. However, it is extremely poisonous. All parts of the plant is toxic, especially the seeds.',
          symptoms:
            'Vomiting, melena, icterus, increased thirst, hemorrhagic gastroenteritis, bruising, coagulopathy, liver damage, liver failure and death.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/tomato-plant.jpg',
          cardtitle: 'Tomato plant',
          carddescription:
            'This is a surprising one. Most of us love tomatoes and they smell great, but they will cause your cat or dog some significant discomfort.',
          symptoms:
            'Hyper-salivation, inappetence, severe gastrointestinal upset, diarrhoea, drowsiness, depression, confusion, behavioural change, weakness, dilated pupils and slow heart rate.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/tulip-narcissus.jpg',
          cardtitle: 'Tulip / Narcissus',
          carddescription:
            'Beautiful flowering plant, but poisonous to cats and dogs. The bulb of the tulip and narcissus have the highest concentration of toxins. If your dog likes to dig, keep it far away from this plant!',
          symptoms:
            'Severe gastrointestinal upset, drooling, loss of appetite, depression of the central nervous system, convulsions and cardiac abnormalities.',
        },
        {
          imagelink:
            'https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/08/yew-tree.jpg',
          cardtitle: 'Yew tree',
          carddescription:
            'Fantastic landscaping evergreen tree and is also the basis for a cancer treatment drug – Paclitaxel. All parts of the tree when ingested can be deadly to animals (except the flesh of the berry). Besides cats and dogs, it is especially harmful to horses.',
          symptoms:
            'Central nervous system effects such as trembling, incoordination, and difficulty breathing. It can also cause significant gastrointestinal irritation and cardiac failure, which can result in death.',
        },
      ],
    }
  },
}
</script>
