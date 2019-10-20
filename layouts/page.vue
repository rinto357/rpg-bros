<template>
  <article class="main-content">
    {{page.attributes.title}}
    {{$siteConfig.author}}
    <slot name="default"/>
  </article>
</template>
<script>
  export default {
    props:['page']
  }
</script>
