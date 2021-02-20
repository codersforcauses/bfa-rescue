<template>
  <div class="text-center">
    <h2>Frequently asked questions</h2>
    <v-container class="padded">
      <v-row justify="center">
        <v-expansion-panels accordion focusable>
          <v-expansion-panel v-for="question in questions" :key="question.id">
            <v-expansion-panel-header>
              {{ question.title }}
              <template v-slot:actions>
                <v-icon color="primary"> mdi-plus-circle </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="padding-top: 25px">
              {{ question.text }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      questions: [
        {
          id: 1,
          title: 'Why foster for Best Friends Animal Rescue?',
          text:
            'The animals in our care don’t always get adopted into their forever homes right away. Some are seniors, or had a tough start and need extra time for rehabilitation, love and care to get them ready for adoption. As our foster carer, you’ll be opening your heart and home to help our dogs find a second chance at happiness.',
        },
        {
          id: 2,
          title: 'What types of animals are there at the rescue?',
          text:
            'Our primary goal is to rescue dogs, but sometimes we do get cats and other small animals in need of our help too.  Many of our animals simply require a temporary home environment until they can be placed in their new family.  However, we also specialise in taking in older and special needs dogs.  These animals sometimes need a permanent Forever Foster home while Best Friends Animal Rescue continues to provide veterinary, nutritional and behavioural support.',
        },
        {
          id: 3,
          title: 'What type of animals are in the foster care system?',
          text:
            'Babies that are too young to be rehomed, mothers with litters, animals who require rest or rehabilitation after surgery or are undergoing treatable medical conditions, dogs that require socialisation or behavioural coaching, and some just need a temporary home until they find a permanent one.',
        },
        {
          id: 4,
          title: 'How long will I have to foster a dog for?',
          text:
            'This can range between a week to a few months, and is dependant on the dog’s needs. An estimated time frame can be discussed before you agree to take on the animal.  In some cases, a Forever Foster agreement may be drawn up for caring for an animal with ongoing issues.',
        },
        {
          id: 5,
          title: 'Can I adopt the dog after fostering it?',
          text: 'Yes, we allow people to foster with a view to adopt.',
        },
        {
          id: 6,
          title: 'What does the rescue provide for foster carers?',
          text:
            'We’ll provide what you as a foster carer is unable to provide. Generally, foster carers will provide food for the dog and we’ll cover all veterinary treatments, advice and behavioural coaching.',
        },
        {
          id: 7,
          title: 'What do the animals need from their foster carer?',
          text:
            'Think of dogs in foster care as your own dogs. They need a safe and secure indoor and outdoor environment, exercise and reliable transport to their vet. Also, a lot of love and care! You don’t need formal training to become a foster carer. We’re here you help you every step of the way.',
        },
        {
          id: 8,
          title: 'Can I become a foster carer if I work fulltime?',
          text:
            'It depends on the dog that needs fostering. Animals that require special care are typically sent to experienced foster carers who have the time to give them the extra attention. Most of the dogs we rescue also need the company of another dog if their foster carer has to leave them alone for extended periods of time.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.text-center {
  padding-top: 50px;
}
.padded {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
