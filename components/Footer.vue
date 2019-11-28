<template>
  <footer class="site-footer text-center">
    <p v-if="$siteConfig.title">{{ $siteConfig.title }} - {{$siteConfig.date}}</p>
    <p v-if="$siteConfig.author">made by {{ $siteConfig.author }}</p>
  </footer>
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