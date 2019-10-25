<template>
  <Wrap :page='page'>
    <article class="main-content">
      <slot name="default"/>
    </article>
  </Wrap>
</template>
<script>
  import Wrap from '../components/Wrap.vue'
  export default {
    components: {
      Wrap: Wrap
    },
    props:['page']
  }
</script>
