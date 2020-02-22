<template>
  <li class="contact">
    <div>
      {{ firstName }} <b>{{ lastName }}</b>
    </div>
    <TextWithArrow>{{
      formattedDaysAgo
    }}</TextWithArrow>
  </li>
</template>

<script>
import TextWithArrow from './text-with-arrow.vue'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'

export default {
  components: { TextWithArrow },
  props: {
    firstName: { type: String, default: () => '?' },
    lastName: { type: String, default: () => '?' },
    lastCalled: { type: Number, default: () => null },
    currentDate: { type: Date, required: true }
  },
  computed: {
    formattedDaysAgo () {
      return formatDistanceStrict(new Date(this.lastCalled * 1000), this.currentDate, { unit: 'day' }) + ' ago'
    }
  }
}
</script>

<style lang="scss" scoped>
$row-height: 3rem;
$border-width: 1px;
$horizontal-padding: 1rem;
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
