<template>
  <article class="main-content">
    {{page.layout}}
    {{$siteConfig.author}}
    <slot name="default"/>
  </article>
</template>
<script>
  export default {
    props:['page']
  }
</script>
