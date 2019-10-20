<template>
  <article class="main-content">
    <slot name="default"/>
  </article>
</template>
<script>
  export default {
    props:['page']
  }
</script>
