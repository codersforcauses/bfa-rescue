<template>
  <div class="example">
    <h1>About Us</h1>
    <div class="col_1">
      <h2>
        <span style="line-height: 40px">
          Hi, my name is Jeane Howes and I am the founder of Best Friends Animal
          Rescue. A little bit of background of how this dog rescue group came
          into being…
        </span>
      </h2>
      <div class="image_1">
        <span class="image_1_wrap">
          <img
            class="wp-image"
            loading="lazy"
            src="./Jeane-Harley3.JPG"
            alt="Jeane Howes Image 1"
            title=""
            width="auto"
            height="auto"
          />
        </span>
      </div>
    </div>
    <div class="para1">
      <p>
        As a child, I lived in the north of England in the late 1960s. There
        were lots of stray dogs and my mother used to send me out with bags of
        bones to feed the hungry dogs. As some of these dogs would follow us
        home, they became part of the family and lived with us until their dying
        dying day. I always said to my mum that when I grew up I would buy a big
        house and she could fill it with stray dogs. Well that never happened in
        England. After travelling for many years, I made Perth my permanent home
        in 1996. I volunteered at a couple of rescue centres for 5 years on
        weekends, working full time during the week. It was very clear to me
        that there were many more dogs needing someone to help and rescue them.
        I was always finding dogs who were wandering the streets because they
        were lost and/or homeless. To help with my strong desire to make a
        difference to these sad and sorry dogs, I did some training in vet
        nursing and animal behaviour.
      </p>
    </div>
    <div class="lower_part">
      <h3>
        <span style="line-height: 60px"> Getting Started </span>
      </h3>
      <br />
      <div class="image2">
        <img
          class="wp-image-02"
          loading="lazy"
          src="./Jeane-Harley2.JPG"
          alt="Jeane Howes image 2"
          title=""
          width="auto"
          height="auto"
        />
      </div>
      <p>
        Finally in 2006 I started Best Friends Animal Rescue Inc. My mother got
        a year’s visa and came to Perth to help me. I bought a house on 5 acres
        with a large living area, a bit run down, but we didn’t care as long as
        we had somewhere that we could look after the homeless dogs. I had 14
        dogs at the time, but it was a very quiet, peaceful house and the dogs
        knew that were cared for. My mother just loved it and was so pleased
        with the changes I could make to an animal’s life. My mother came again
        for another year, and I couldn’t have done it without her. When she went
        back to England she was always talking about the dogs. Now Best Friends
        Animal Rescue has a network of volunteers who foster the dogs, providing
        a loving and safe place until a suitable permanent home is found. So far
        Best Friends Animal Rescue have re-homed over 700 dogs, mostly the older
        dogs that are the most difficult to find a new forever home. As many of
        our dogs come with specific dietry requirements or allergies, all meals
        are prepared on premises using only fresh meat and vegetables. Our
        future is to set up an elderly dog rescue and retirement in the hills,
        to give a lasting, happy final home for the really old or sick to enjoy
        their final years.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
h1 {
  color: #222;
  background: lightblue;
  padding: 10px;
  text-align: center;
}
h2 {
  text-align: left;
  margin-right: 5ch;
  font-style: normal;
  font-family: 'OpenSans', Helvetica, sans-serif;
  font-weight: 300;
}
h3 {
  text-align: left;
  margin-right: 5ch;
  font-style: normal;
  font-family: 'OpenSans', Helvetica, sans-serif;
  font-weight: 300;
}
div.p:hover {
  transition: 1s linear;
  animation: upto-down 1s ease-out forwards;
  font-family: 'OpenSans', Helvetica, sans-serif;
  font-size: 16px;
}
div.col1 {
  margin-top: 10ch;
}
div.para1 {
  width: 30%;
  margin-left: 8ch;
  text-justify: auto;
}
div.image_1 {
  margin-top: 10ch;
  width: 90px;
  height: 20px;
  margin-left: 55ch;
}
div.lower_part {
  width: 86%;
  margin-left: 50ch;
  text-justify: auto;
  margin-top: 10ch;
}
div.image2 {
  height: 50px;
  width: 50px;
  margin-left: 5ch;
}
@keyframes upto-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateX(-150px);
  }
}
</style>
