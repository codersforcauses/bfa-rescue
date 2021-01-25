<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-img :src="imagelink" max-height="550"></v-img>
    </v-col>
    <v-col cols="12" sm="6">
      <h3 class="text-center" style="font-size: 20px">Meet {{ name }}!</h3>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-calendar-range</v-icon>
          </v-list-item-action>
          <v-list-item-content><b>Age:</b>&nbsp;{{ age }}</v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-dna</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <b>Breed:</b>&nbsp;{{ breed }}
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon v-if="sex == 'Male'">mdi-gender-male</v-icon>
            <v-icon v-else>mdi-gender-female</v-icon>
          </v-list-item-action>
          <v-list-item-content><b>Sex:</b>&nbsp;{{ sex }}</v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-dog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <b>Size:</b>&nbsp;{{ size }}
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-cash-usd-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content><b>Fee:</b>&nbsp;${{ fee }}</v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-content>{{ description }}</v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="text-center">
        <v-btn class="ma-2" outlined color="#1badbe" href="/adoption-form">
          Apply to adopt {{ name }}
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DogInfo',
  props: {
    imagelink: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    age: {
      type: String,
      default: '',
    },
    breed: {
      type: String,
      default: '',
    },
    sex: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    fee: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.v-icon {
  color: #1badbe;
}

b {
  display: inline !important;
  flex: none;
}
</style>
