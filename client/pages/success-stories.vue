<template>
  <div>
    <Header></Header>
    <v-row class="pb-5" style="padding: 0 80px">
      <v-col cols="9" style="padding-right: 80px">
        <h1 class="my-4">Beauie’s Story</h1>
        <p>
          My name is Beauie and I’m a very handsome Corgi x Jack Russell. This
          is my story.<br /><br />Around five years ago at the age of 10, my
          humans were moving and were not able to take me with them. At the time
          my future was very uncertain, I had been unwell for a while and I had
          nowhere to live. Things were not looking good. <br /><br />Lucky for
          me this is when I meet Jeane from BFAR, who came into my life, rescued
          me, and found me a loving foster home. <br /><br />As things turned
          out it was lucky Jeane came along when she did. I began to get much
          more sick and it was finally discovered that I had advanced cushings
          disease. My life hung in the balance and it was touch and go for a
          while, but with the generosity and love BFAR showed in not giving up
          on a little old dog I managed to pull through.<br /><br />
          A year later, looking a little worse for wear (my legs bent from the
          long term cushings &amp; patches of missing fur), I was slowly on the
          road to recovery but my kind foster carers where no longer able to
          care for me.<br /><br />Jeane put my picture on line (I certainly
          wasn’t looking my best) to see if any one had a forever home for me,
          and that is where I found my mum. She’d been waiting for me all my
          life.<br /><br />From the moment I stepped into our home, it was love
          at first sight and we soon knew I’d found my fur-ever home.<br /><br />
          The marvellous medication I was on saved my life (I will always be on
          it) and everyone has been amazed at how well it has worked.<br /><br />
          Mum takes me regularly to see my vet Dr David for check ups. The first
          time we went he told mum that my life expectancy was short due to my
          advanced condition…. she cried all the way home but resolved to make
          my life the best it could be.<br /><br />
          That was almost four years ago, I’m looking spectacular and feeling
          fabulous at almost 15 years old with no plans of going anywhere, vet
          Dr David said just last week that I was an amazing success story, and
          I think he’s right.<br /><br />
          Although I am completely deaf I’m very happy, I love my life, and I
          love my family. When I arrived at mum’s she already had young Louis
          and and lovely Lilly who is also a rescue like me. We all get on very
          well (although I’m convinced Louis has ADD). Lilly at almost 16 is
          even older than me.<br /><br />
          We go to the park every day at least once, usually a couple of times,
          and mum even has a pram for Lilly &amp; me so if we get tired we can
          hop in. Apparently we look ‘sooo cute’ according to EVERYBODY.<br /><br />Thank
          you Jeane for rescuing me and finding me the best home possible. In
          fact I’d have to say my life would be perfect, if only mum would stop
          kissing me all the time – not that you can blame her, she’s only human
        </p>
      </v-col>
      <v-col cols="3">
        <v-img
          src="https://bfarescue.com.au/wp-content/uploads/2016/08/IMG_0015.jpg"
          class="mb-2"
        ></v-img>
        <v-img
          src="https://bfarescue.com.au/wp-content/uploads/2016/08/IMG_0034.jpg"
          class="mb-2"
        ></v-img>
        <v-img
          src="https://bfarescue.com.au/wp-content/uploads/2016/08/IMG_0028-e1473988981273.jpg"
          class="mb-2"
        ></v-img>
        <v-img
          src="https://bfarescue.com.au/wp-content/uploads/2016/08/IMG_0726.jpg"
        ></v-img>
      </v-col>
    </v-row>
    <div class="banner2">
      <h2 class="text-center">Other dogs we have saved</h2>
    </div>
    <Slideshow></Slideshow>
  </div>
</template>

<script>
import Header from '~/components/success-stories/Header.vue'
import Slideshow from '~/components/success-stories/Slideshow.vue'

export default {
  components: {
    Header,
    Slideshow,
  },
}
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 5px;
  font-weight: 450;
}

.banner2 {
  background-color: #3295b2;
  color: #fff;
  padding: 60px 20px;
  width: 100vw;
  margin-bottom: 20px;
}
</style>
