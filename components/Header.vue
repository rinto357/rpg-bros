<template>
  <header class="site-header flex between">
    <nav class="auto-center" v-if="$themeConfig.nav">
      <span
        :key="index"
        class="page-link"
        v-for="(navItem, index) in $themeConfig.nav">
        <saber-link :to="navItem.link">{{ navItem.text }}</saber-link>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    siteTitle: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="stylus" scoped>
  .page-link
    padding 0 1.5rem
  .page-link:not(:last-child)
    border-right 1px solid
</style>