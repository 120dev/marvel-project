<template>
  <ul class="inline-list">
    <li v-for="image in images" :key="image.path">
      <img :src="image.path + '.' + image.extension" width="80">
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  images: Array
});
</script>

