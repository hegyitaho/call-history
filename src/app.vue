<template>
  <div>
    <Header />
    <div class="contact-box">
      <Contact
        v-for="contact in callHistory"
        :key="contact.firstName + contact.lastName"
        :first-name="contact.firstName"
        :last-name="contact.lastName"
      />
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Contact from './components/contact.vue'
import { transformedCallHistory as callHistory } from './logic/call-history-converter'

export default {
  components: { Header, Contact },
  data () {
    return {
      callHistory
    }
  }
}
</script>

<style>
/* @import '../node_modules/reset-css/reset.css'; */
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<style lang="scss">
.contact-box {
  margin-top: 3em;
  margin-left: 2em;
  margin-right: 2em;
}
</style>
