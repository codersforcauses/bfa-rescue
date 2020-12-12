<template>
  <v-app>
    <Toolbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {}
</script>

<style>
::selection {
  background: #4ab1c55b;
}
</style>
