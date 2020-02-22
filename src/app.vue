<template>
  <div>
    <Header />
    <ol class="contact-box">
      <Contact
        v-for="contact in callHistory"
        :key="contact.firstName + contact.lastName"
        :first-name="contact.firstName"
        :last-name="contact.lastName"
        :last-called="contact.lastCalled"
        :current-date="currentDate"
      />
    </ol>
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
      callHistory,
      currentDate: new Date()
    }
  },
  watch: {
    callHistory () {
      this.currentDate = new Date()
    }
  }

}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<style lang="scss" scoped>
  .contact-box {
    padding-inline-start: 0;
    margin-top: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
</style>
