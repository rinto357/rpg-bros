<template>
  <article class="main-content">
    {{page.layout}}
    {{site.author}}
    <slot name="default"/>
  </article>
</template>
<script>
  export default {
    props:['page']
  }
</script>
