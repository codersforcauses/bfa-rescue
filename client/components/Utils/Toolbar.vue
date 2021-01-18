<template>
  <v-app-bar app flat color="#fff" style="border-bottom: 1px solid #0000001e">
    <nuxt-link to="/">
      <v-img
        :src="require('@/assets/logo.png')"
        alt="Best Friend Animal Rescue's logo"
        max-height="3.6rem"
        width="8rem"
      />
    </nuxt-link>
    <v-spacer />
    <v-toolbar-items
      v-if="$vuetify.breakpoint.mdAndUp"
      class="d-flex justify-space-between"
    >
      <template v-for="page in pages">
        <v-btn
          v-if="page.to"
          :key="page.title"
          :to="page.to"
          nuxt
          text
          exact
          color="accent"
        >
          {{ page.title }}
        </v-btn>
        <v-menu
          v-else
          :key="page.title"
          open-on-hover
          open-on-focus
          offset-y
          tile
          left
        >
          <template #activator="{ on, attrs }">
            <v-btn
              :key="page.title"
              v-bind="attrs"
              nuxt
              text
              exact
              color="accent"
              v-on="on"
            >
              {{ page.title }}
              <v-icon small>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="item in page.menuItems"
              :key="item.title"
              :to="item.to"
              nuxt
              exact
              color="accent"
            >
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-toolbar-items>
    <v-app-bar-nav-icon v-else color="accent" aria-label="open menu" />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          title: 'Adopt',
          menuItems: [
            {
              title: 'Available dogs',
              to: '/',
            },
            {
              title: 'Adoption Form',
              to: '/adopt-a-dog/expression-of-interest',
            },
            {
              title: 'Rehomed dogs',
              to: '/rehomed',
            },
            {
              title: 'Success Stories',
              to: '/donate/success-stories',
            },
          ],
        },
        {
          title: 'How can I help?',
          menuItems: [
            {
              title: 'Foster',
              to: '/foster',
            },
            {
              title: 'Volunteer',
              to: '/volunteer',
            },
            {
              title: 'Sponsor A Dog',
              to: '/sponsor-a-dog',
            },
          ],
        },
        {
          title: 'Health and Nutrition',
          to: '/health',
        },
        {
          title: 'Supporters',
          to: '/volunteer/support',
        },
        {
          title: 'Donate',
          to: '/donate',
        },
      ],
    }
  },
}
</script>

<style scoped>
.v-list {
  padding-top: 0;
  padding-bottom: 0;
}

.v-btn:hover,
.v-list-item:hover {
  background-color: #a2d0dd;
}
</style>
