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
import formatDistanceStrict from 'date-fns/formatDistanceStrict'

export default {
  components: { TextWithArrow },
  props: {
    firstName: { type: String, default: () => '?' },
    lastName: { type: String, default: () => '?' },
    lastCalled: { type: Number, default: () => null }
  },
  computed: {
    formattedDaysAgo () {
      return formatDistanceStrict(new Date(this.lastCalled * 1000), new Date(), { unit: 'day' }) + ' ago'
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
