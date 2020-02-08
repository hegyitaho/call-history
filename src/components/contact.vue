<template>
  <div class="contact">
    <div>
      {{ firstName }} <b>{{ lastName }}</b>
    </div>
    <TextWithArrow>
      {{ formattedDaysAgo }}
    </TextWithArrow>
  </div>
</template>

<script>
import TextWithArrow from './text-with-arrow.vue'
export default {
  components: { TextWithArrow },
  props: {
    firstName: { type: String, default: () => '?' },
    lastName: { type: String, default: () => '?' },
    daysAgo: { type: Number, default: () => null }
  },
  computed: {
    formattedDaysAgo () {
      return `${this.formattedDays} ago`
    },
    formattedDays () {
      return this.daysAgo === null ? '?' : this.formatDaysPluralOrSingular
    },
    formatDaysPluralOrSingular () {
      const days = this.daysAgo > 1 ? 'days' : 'day'
      return `${this.daysAgo} ${days}`
    }
  }
}
</script>

<style lang="scss">
$row-height: 3em;
$border-width: 1px;
$horizontal-padding: 1em;
.contact {
  line-height: $row-height;
  height: $row-height;
  border: $border-width solid grey;
  border-top-width: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: $horizontal-padding;
  padding-right: $horizontal-padding;
  &:first-child {
    border-top-width: $border-width;
  }
}

</style>
