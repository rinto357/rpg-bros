<template>
  <article class="main-content">
    {{page.frontmatter.layout}}
    {{site.author}}
    <slot name="default"/>
  </article>
</template>
<script>
  export default {
    props:['page']
  }
</script>
