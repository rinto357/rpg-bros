<template>
  <article class="main-content">
    {{page.layout}}
    <slot name="default"/>
  </article>
</template>
<script>
  export default {
    props:['page']
  }
</script>
