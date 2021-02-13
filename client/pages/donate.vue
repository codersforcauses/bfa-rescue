<template>
  <div>
    <div>
      <Imgcontent
        title="Donate"
        text="Help us care for our rescue dogs"
        button="Make a donation online"
        :brownpug="true"
      />
    </div>
    <div>
      <Textcontent
        title="Most abused or older dogs have come to us in need of expensive surgery and treatments prior to finding a new loving home."
        subheader="Any small donation will help us get their health back on track."
        body="Your kind contribution will also go to the construction of a retirement home for senior dogs. Best Friends Animal Rescue was granted approval from local council, but we need additional funds to make it a reality. The home will be able to house up to 30 senior dogs to live out the rest of their days in a comfortable, loving and safe environment."
      />
    </div>
    <div>
      <WhyDonate />
    </div>
    <div>
      <Imgcontent
        title="You can also help out as a volunteer"
        button="Find out how"
        :toweldog="true"
      />
    </div>
    <div>
      <Message />
    </div>
  </div>
</template>

<script>
import Message from '~/components/Message.vue'
import WhyDonate from '~/components/whyDonate.vue'
import Imgcontent from '~/components/Imgcontent.vue'
import Textcontent from '~/components/Textcontent.vue'
export default {
  components: {
    Message,
    WhyDonate,
    Imgcontent,
    Textcontent,
  },
  head: {
    title: 'Donate',
  },
}
</script>
