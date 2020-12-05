<template>
  <v-footer>
    <v-row justify="space-around">
      <v-spacer></v-spacer>
      <v-col col="4">
        <h3 class="mb-3">Best Friends Animal Rescue</h3>
        <div class="mb-2">
          <v-icon>mdi-phone</v-icon><span>0415 779 610</span>
        </div>
        <div class="mb-2">
          <v-icon>mdi-email</v-icon><span>bfarescue@gmail.com</span>
        </div>
        <div class="mb-2">
          <span><b>ABN:</b> 69377461145</span>
        </div>
        <div class="mb-2">
          <span><b>Postal Address:</b><br />PO Box 3246 Midland WA 6056</span>
        </div>
        <div class="mb-2">
          <span>Copyright © 2020</span>
        </div>
      </v-col>
      <v-col v-for="(page, i) in pages" :key="i" col="2">
        <h3 class="pl-3">{{ page.header }}</h3>
        <v-list flat>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, j) in page.subpages"
              :key="j"
              :to="item.to"
            >
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
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
