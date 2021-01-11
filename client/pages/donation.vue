<template>
  <v-container>
    <div>
      <Message />
    </div>
  </v-container>
</template>

<script>
import Message from '~/components/Message.vue'
export default {
  components: {
    Message,
  },
  head: {
    title: 'Donate',
  },
}
</script>
