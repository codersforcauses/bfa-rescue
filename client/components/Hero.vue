<template>
  <div class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="row justify-content-center align-items-">
          <div class="col-md-10">
            <h1 class="hero-title">
              Provide a service that helps us with our rescue work
            </h1>
            <p>
              Best Friends Animal Rescue is run by a group of volunteers, so if
              you can provide services such as training, grooming, photography,
              construction, etc. Please reach out to us. We need all the help we
              can get with our rescue operations.
            </p>
            <div class="hero-btn mt-5">
              <v-btn class="btn">Contact Us</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped lang="scss">
.hero {
  background-image: url('https://secureservercdn.net/160.153.138.177/wzj.f59.myftpupload.com/wp-content/uploads/2015/10/white-dog-tongue.png');
  background-position: right;
  background-size: 90%;
  background-color: rgb(255, 255, 255);
  text-align: center;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  height: 400px;
  margin-bottom: 50px;
  margin-top: -15px;
  left: 50%;
  padding-top: 70px;
}
.hero-title {
  padding-bottom: 30px;
}
</style>
