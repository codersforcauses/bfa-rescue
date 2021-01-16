<template>
  <div>
    <v-container
      style="background-color: #a2d0dd; padding-top: 50px; padding-bottom: 50px"
    >
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" lg="7" xl="6">
          <v-card elevation="0" style="background-color: #a2d0dd">
            <h1
              class="font-weight-medium"
              ;
              style="text-align: center; color: black"
            >
              Natural Animal Health (HAMPL)
            </h1>
            <p
              class="font-weight-light"
              ;
              style="text-align: center; font-size: 20px; color: black"
            >
              Using naturopathic formulas for optimum animal health. Get health
              information from canine diet recommendation, natural medicines,
              home remedies, veterinary drugs, sterilisation and more.
            </p>
            <center>
              <v-btn
                elevation="2"
                large
                style="background-color: #a2d0dd"
                href="http://www.holisticanimalmedicines.com/pet-health/"
                target="_blank"
                outlined
                color="black"
              >
                Find out more from HAMPL</v-btn
              >
            </center>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" lg="7" xl="6">
          <v-card elevation="0">
            <div style="text-align: center">
              <h1 class="font-weight-medium">
                Feeding and Nutrition Tips for Dogs Using Turmeric
              </h1>
              <h3 class="font-weight-light">
                Did you know that adding turmeric to your canine's daily diet
                has substantial benefits to their health?
              </h3>
              <br class="small" />
            </div>
            <center>
              <v-card elevation="3" outlined>
                <v-img
                  :aspect-ratio="16 / 9"
                  :width="width"
                  :src="require('@/assets/dog-turmeric.jpg')"
                  alt="Nutrition Dog"
                  max-height="500"
                  max-width="1920"
                />
              </v-card>
            </center>
            <br class="small" />
            <p class="font-weight-light" ;style="text-align: center">
              Turmeric powder is a vibrant yellow spice used liberally in Indian
              curries. It is known to many as a natural wonder and has a long
              history of use in both Indian and Chinese traditional medicine.
              Turmeric is known to reduce inflammation, particular itchy skin
              and arthritis. You can read more about how turmeric has helped a
              dog owner
              <a
                href="http://pawsandpedals.com.au/inner-dog-health-keeping-your-dog-trim-and-healthy/"
                target="_blank"
              >
                here</a
              >.
            </p>
            <br />

            <h2 class="font-weight-medium">
              <center>Highly Recommended by Vets</center>
            </h2>
            <br class="small" />
            <p class="font-weight-light" ;style="text-align: center">
              Doug English, a veterinarian at Marlin Coast Vet Hospital in North
              Queensland, has been using and recommending turmeric on animals
              for years. He has seen positive results in his patients for
              allergic dermatitis, atopy, Queensland Itch in horses, arthritis
              in both dogs and horses, irritable bowel syndrome, and a general
              improvement in overall health. Health benefits aside, dogs and
              horses happily accept and enjoy turmeric in their diet as well. To
              explore the additional benefits of adding turmeric to your dog’s
              diet check out Doug English’s
              <a
                href="https://www.turmericlife.com.au/doug-english-turmeric-for-animals/"
                target="_blank"
              >
                post on his website.</a
              >
              Benefits such as antioxidant, anti-inflammatory, carminative,
              chemo preventive, antimicrobial, depurative (“blood purifying”),
              hepatoprotective, antithrombotic are listed amongst others. There
              are some contraindications too which you should read before adding
              it your dog’s diet.
            </p>
            <br class="small" />
            <center>
              <v-card elevation="3" outlined>
                <v-img
                  :aspect-ratio="16 / 9"
                  :width="width"
                  :src="require('@/assets/turmeric.jpg')"
                  alt="Turmeric"
                  max-height="500"
                  max-width="1920"
                />
              </v-card>
              <br class="small" />
            </center>
            <h2 class="font-weight-medium">
              <center>How To Feed Turmeric To Your Dog</center>
            </h2>
            <br class="small" />
            <p class="font-weight-light" ;style="text-align: center">
              The easiest method is to just add the ingredients in your dog's
              food. Mix the dry powder with oil and ground black pepper and add
              it to their regular feed.
            </p>

            <ol
              class="font-weight-light"
              ;
              style="text-align: center; list-style-position: inside"
            >
              <li>
                Start with 1/4 of a teaspoon of turmeric and build up (if
                needed) to an approximate maximum of 2 heaped tablespoons over a
                few weeks.
              </li>
              <li>
                Add OIL – best using one of these three – Coconut, Olive, or
                Linseed. Start with about 2-5 mls of oil.
              </li>
              <li>
                Add 3-4 grinds of pepper from a pepper grinder.You can find more
                information and other methods of feeding here.
              </li>
            </ol>
            <br class="small" />
            <div style="text-align: center">
              <p class="font-weight-light" ;style="text-align: center">
                You can find more information and other methods of feeding
                <a
                  href="https://www.turmericlife.com.au/turmeric-for-dogs/how-to-feed-turmeric-for-dogs"
                  target="_blank"
                >
                  here</a
                >.
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
