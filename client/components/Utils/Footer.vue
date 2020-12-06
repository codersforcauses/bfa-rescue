<template>
  <v-footer color="#a2d0dd">
    <v-container class="py-6">
      <v-row justify="space-between">
        <v-col cols="12" md="5">
          <v-img
            :src="require('@/assets/logo.png')"
            alt="Best Friend Animal Rescue's logo"
            width="12rem"
            class="mb-5"
          />
          <p class="px-1 d-flex align-center">
            <v-icon color="accent" class="mr-3"> mdi-phone </v-icon>
            <b> 0415 779 610 </b>
          </p>
          <p class="px-1 d-flex align-center">
            <v-icon color="accent" class="mr-3"> mdi-email </v-icon>
            <b> bfarescue@gmail.com </b>
          </p>
          <p class="px-1">
            <b>Postal Address:</b>
            <br />
            PO Box 3246
            <br />
            Midland WA 6056
          </p>
          <p class="ma-0 px-1"><b>ABN:</b> 69377461145</p>
        </v-col>
        <v-col
          v-for="page in pages"
          :key="page.header"
          cols="12"
          sm="4"
          md="auto"
        >
          <v-list dense flat color="transparent" class="py-0">
            <v-subheader class="px-1">
              {{ page.header }}
            </v-subheader>
            <v-list-item-group color="accent">
              <v-list-item
                v-for="item in page.subpages"
                :key="item.title"
                :to="item.to"
                class="px-1"
              >
                <v-list-item-title class="text-subtitle-2">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
      <v-divider light class="my-2" />
      <div class="px-1 d-flex align-center justify-space-between">
        <p class="ma-0">Copyright &copy; {{ new Date().getFullYear() }}</p>
        <v-btn
          icon
          large
          href="https://www.facebook.com/bfarescueperth"
          target="_blank"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          header: 'Our Work',
          subpages: [
            {
              title: 'About us',
              to: '/about',
            },
            {
              title: 'Contact us',
              to: '/contact-us',
            },
            {
              title: 'Supporters',
              to: '/supporters',
            },
          ],
        },
        {
          header: 'Support us',
          subpages: [
            {
              title: 'Adopt',
              to: '/adopt',
            },
            {
              title: 'Available Dogs',
              to: '/available-dogs',
            },
            {
              title: 'Adoption Form',
              to: '/adoption-form',
            },
            {
              title: 'Foster',
              to: '/foster',
            },
            {
              title: 'Volunteer',
              to: '/volunteer',
            },
            {
              title: 'Donate',
              to: '/donate',
            },
          ],
        },
        {
          header: 'Testimonial',
          subpages: [
            {
              title: 'Rehomed Dogs',
              to: '/rehomed-dogs',
            },
            {
              title: 'Success Stories',
              to: '/success-stories',
            },
          ],
        },
      ],
    }
  },
}
</script>
