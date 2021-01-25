<template>
  <v-container>
    <Doginfo
      :imagelink="selectedDog.imagelink"
      :name="selectedDog.name"
      :age="selectedDog.age"
      :breed="selectedDog.breed"
      :sex="selectedDog.sex"
      :size="selectedDog.size"
      :fee="selectedDog.fee"
      :description="selectedDog.description"
    ></Doginfo>
  </v-container>
</template>

<script>
import Doginfo from '~/components/doginfo'

export default {
  components: {
    Doginfo,
  },
  data() {
    return {
      dogs: [
        {
          _id: '1',
          imagelink:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Harley-standing-650x486.jpg',
          name: 'Harley',
          age: '8 yrs',
          breed: 'Border Collie',
          sex: 'Male',
          size: 'Medium',
          fee: 500,
          description:
            'What a lovely, gorgeous & energetic gentleman! Meet Harley, a superb black & white border collie male! That tuxedo he is wearing goes with his good boy nature! He has been in a home with another dog, cats and kids, so he has seen it all. Now he is looking for the new home with a new doggie friend of his own, through no fault of his! He is sociable and will only be placed with a family that has another dog already.',
        },
        {
          _id: '2',
          imagelink:
            'https://bfarescue.com.au/wp-content/uploads/2020/11/Mischief-head-and-shoulders.png',
          name: 'Mischief',
          age: '7 yrs',
          breed: 'German Shepherd',
          sex: 'Female',
          size: 'Large',
          fee: 550,
          description:
            'This beautiful, dignified matron of seven years is somewhat misnamed! Though she is a lively and friendly , used to older kids and cats, she is also loving and pretty good in learning to mind her manners. Mischief won’t stand on her dignity, though! Give her a chance and she is off for a romp! She will need someone who is dedicated to obedience training, as she is a big girl, but she is willing to learn. Hold on tight!',
        },
      ],
    }
  },
  computed: {
    selectedDog() {
      return this.dogs.find((dog) => dog._id === this.$route.params.id)
    },
  },
}
</script>
