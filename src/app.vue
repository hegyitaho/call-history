<template>
  <div>
    <Header></Header>
    <div v-for="contact in contacts" :key="contact.phoneNumber + contact.called">
      {{ contact }}
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
import contacts from './callHistory'
export default {
  components: { Header },
  data () {
    return {
      contacts
    }
  }
}
</script>

<style>
@import '../node_modules/reset-css/reset.css';
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<style scoped>
  .example {
    color: black;
  }
</style>
