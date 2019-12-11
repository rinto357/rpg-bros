<template>
  <header class="site-header auto-center">
    <nav class="full flex around wrap" v-if="$themeConfig.nav">
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
  .site-header
    margin-top 1rem
    margin-bottom 0rem
  .page-link
    margin .5rem
    padding 0 1.5rem
    // border 1px solid
    // border-left 2px solid
    // border-radius 5px
  // .page-link:not(:last-child)
  //   border-right 1px solid
</style>