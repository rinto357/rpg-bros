<template>
  <Wrap :page='page'>
    <article class="main-content">
      <h1 v-if="page.title">{{page.title}}</h1>
      <slot name="default"/>
      <p class="clear"></p>
    </article>
  </Wrap>
</template>
<script>
  import Wrap from '../components/Wrap.vue'
  export default {
    components: {
      Wrap: Wrap,
    },
    props:['page']
  }
</script>
