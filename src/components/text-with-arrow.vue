<template>
  <div class="is-flex is-centered">
    <slot />
    <div class="is-flex has-padding-left">
      <div class="arrow-right" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$icon-size: 0.5em;
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
