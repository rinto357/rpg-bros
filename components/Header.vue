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
  .page-link
    margin .5rem
    padding 0 1.5rem
</style>