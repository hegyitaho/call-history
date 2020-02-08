<template>
  <div class="contact">
    <div>
      {{ firstName }} <b>{{ lastName }}</b>
    </div>
    <div class="is-flex is-centered">
      {{ formattedDaysAgo }}
      <div class="is-flex has-padding-left">
        <div class="arrow-right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: { type: String, default: () => '?' },
    lastName: { type: String, default: () => '?' },
    daysAgo: { type: Number, default: () => null }
  },
  computed: {
    formattedDaysAgo () {
      const formattedDays = this.daysAgo === null ? '?' : this.formatDaysPluralOrSingular
      return `${formattedDays} ago`
    },
    formatDaysPluralOrSingular () {
      const days = this.daysAgo > 1 ? 'days' : 'day'
      return `${this.daysAgo} ${days}`
    }
  }
}
</script>

<style lang="scss">
$icon-size: 0.5em;
$border-width: 1px;
.contact {
  line-height: 3em;
  box-sizing: content-box;
  height: 3em;
  border: $border-width solid grey;
  border-top-width: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
  padding-right: 1em;
  &:first-child {
    border-top-width: $border-width;
  }
}
.is-flex {
  display: flex;
}
.is-centered {
  align-items: center;
}
.has-padding-left {
  padding-left: 1em;
}
.arrow-right {
  width: 0;
  height: 0;
  border-top: $icon-size solid transparent;
  border-bottom: $icon-size solid transparent;
  border-left: $icon-size solid black;
}

</style>
