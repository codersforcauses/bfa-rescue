<template>
  <v-container>
    <v-card flat tile>
      <v-window v-model="slideIndex">
        <v-window-item v-for="story in stories" :key="story.name">
          <v-row>
            <v-col cols="12" sm="6">
              <v-img :src="story.img1" height="350px"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img :src="story.img2" height="350px"></v-img>
            </v-col>
          </v-row>
          <v-row class="px-5">
            <h1 color="black">{{ story.dogname }}</h1>
            <p color="black">
              {{ story.description }}
            </p>
          </v-row>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="slideIndex" class="text-center" mandatory>
          <v-item
            v-for="(story, i) in stories"
            :key="`btn-${i}`"
            v-slot="{ active, toggle }"
          >
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Slideshow',
  data() {
    return {
      slideIndex: 0,
      stories: [
        {
          id: '1',
          dogname: 'Ernie',
          img1:
            'https://bfarescue.com.au/wp-content/uploads/2016/08/ernie-015.jpg',
          img2:
            'https://bfarescue.com.au/wp-content/uploads/2016/08/ernie-002.jpg',
          description:
            'Ernie came to us from the pound he was 12 years old with arthritis, a heart murmur, allergies, and to top it all off, anxiety. He had cartrophen injections and was out on a fresh food diet to build up his immune system. He improved immensely and was adopted by a lovely retired lady, living another warm 3years with all the love that she so deserved.',
        },
        {
          id: '2',
          dogname: 'Mindi',
          img1:
            'https://bfarescue.com.au/wp-content/uploads/2016/08/100_0861.jpg',
          img2:
            'https://bfarescue.com.au/wp-content/uploads/2016/08/2013-01-23-10.39.38.jpg',
          description:
            'Mindi had tar type yeast infection oozing from her ears which had set hard and was dangling from her earlobes. She was very skinny and her coat came off in one piece, which she had to have 2 ear operations to remedy. She didn’t have any holes in her ears as scar material blocked them. With a bit of love and care, she now glows in the warm sun with a sleek new coat, comfortable in her new home.',
        },
        {
          id: '3',
          dogname: 'Spike',
          img1:
            'https://bfarescue.com.au/wp-content/uploads/2016/08/unnamed.jpg',
          img2:
            'https://bfarescue.com.au/wp-content/uploads/2016/08/10295722_10152320489471208_6625651437977506302_n1.jpg',
          description:
            'When Spike came to us he was very underweight and had no hair, and his skin was red and painful due to mange. We gained his confidence, nursed him back to health, and gave him the love he’d been missing. Since being adopted, Spike has put on weight, his skin has improved, and his hair has all grown back. He greets his doggie siblings with kisses and always wants pats when his family gets home from being out. He now plays with his toys and is a very good puppy, much loved by his new family!',
        },
        {
          id: '4',
          dogname: 'Honey',
          img1:
            'https://bfarescue.com.au/wp-content/uploads/2016/08/Honey3.jpg',
          img2:
            'https://bfarescue.com.au/wp-content/uploads/2016/08/Honey1.jpg',
          description:
            'Honey was ten years old when she was adopted into a warm home with a new family. Honey loves her food, tap dancing in anticipating across the kitchen floor at dinner time, and particularly loves her long walks where she gets to meet other joyous dogs at the park. She has toys, company, cuddles in the evening, and most importantly a caring, loving family. She is the sunshine in their lives.',
        },
      ],
    }
  },
  methods: {
    next() {
      this.slideIndex =
        this.slideIndex + 1 === this.stories.length ? 0 : this.slideIndex + 1
    },
    prev() {
      this.slideIndex =
        this.slideIndex - 1 < 0 ? this.stories.length - 1 : this.slideIndex - 1
    },
  },
}
</script>

<style>
.v-carousel__controls {
  bottom: -25px;
}
</style>
