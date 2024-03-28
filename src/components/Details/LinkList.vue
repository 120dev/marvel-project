<template>
  <span v-for="url in urls" :key="url.type">
    <a target="_blank" :href="url.url">{{ url.type }}</a>
  </span>
</template>

<script>
export default {
  props: {
    urls: Array,
  }
}
</script>
