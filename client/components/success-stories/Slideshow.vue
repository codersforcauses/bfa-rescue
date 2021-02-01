<template>
  <div>
    <div class="slideshow-container">
      <v-container v-for="story in stories" :key="story.id" class="slides">
        <div class="numbertext">{{ story.id }} / {{ stories.length }}</div>
        <v-row class="slide-images">
          <v-col cols="12" sm="6" class="py-0">
            <v-img :src="story.img1" class="image1"></v-img>
          </v-col>
          <v-col cols="12" sm="6" class="py-0">
            <v-img :src="story.img2" class="image2"></v-img>
          </v-col>
        </v-row>
        <div class="slider-text" cols="12">
          <h1>{{ story.dogname }}</h1>
          <p>
            {{ story.description }}
          </p>
        </div>
      </v-container>
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>

    <div class="py-2 pb-10 text-center">
      <span
        v-for="item in stories"
        :key="item.id"
        class="dot"
        @click="currentSlide(item.id)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slideshow',
  data() {
    return {
      slideIndex: 1,
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
  mounted() {
    this.showSlides(this.slideIndex)
  },
  methods: {
    showSlides(n) {
      let i
      const slides = document.getElementsByClassName('slides')
      const dots = document.getElementsByClassName('dot')
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }
      slides[this.slideIndex - 1].style.display = 'block'
      dots[this.slideIndex - 1].className += ' active'
    },
    plusSlides(n) {
      const _this = this
      _this.showSlides((this.slideIndex += n))
    },
    currentSlide(n) {
      const _this = this
      _this.showSlides((this.slideIndex = n))
    },
  },
}
</script>

<style scoped>
.slideshow-container {
  position: relative;
  margin: 0 8%;
  background-color: #f7f7f7;
}

.slides {
  display: none;
}

.slider-text {
  padding: 20px 20px;
  text-align: center;
}

.slider-text h1 {
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 5px;
  font-weight: 450;
}

.slide-images {
  height: 350px;
}

.image1,
.image2 {
  height: 350px;
}

.numbertext {
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
}

.dot {
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 385px;
  width: auto;
  padding: 10px 15px;
  margin-top: -22px; /* color: white; */
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(162, 208, 221, 0.8);
}

@media only screen and (max-width: 599px) {
  .slide-images {
    height: 420px;
  }

  .image1,
  .image2 {
    height: 200px;
  }

  .prev,
  .next {
    top: 445px;
  }
}
</style>
