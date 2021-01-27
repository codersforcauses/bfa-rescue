<template>
  <div class="banner">
    <div class="text-center textdiv">
      <h1>Sponsor a dog</h1>
      <v-btn class="mt-4" outlined color="white" href="#"
        >Make a donation
      </v-btn>
    </div>
    <v-img
      src="https://www.advancepet.com.au/media/1924/guidedogs2.png?width=500&height=236.71875"
      class="dogimg"
    ></v-img>
  </div>
</template>

<style>
.banner {
  background-color: #1badbe;
  color: #fff;
  padding: 60px 20px;
  width: 100vw;
  height: 250px;
  position: relative;
}

.textdiv {
  position: absolute;
  left: 8%;
  width: 300px;
}

.dogimg {
  position: absolute;
  width: 500px;
  right: 10%;
  bottom: 0;
}

@media only screen and (max-width: 600px) {
  .banner {
    padding: 30px 20px;
  }

  .dogimg {
    width: 60%;
    left: 20%;
  }
}
</style>
