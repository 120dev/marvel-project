<template>
  <ul>
    <li v-for="(subItem, index) in items" :key="subItem[itemKey]">
      {{ subItem.text }}
    </li>
  </ul>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
  items: Array,
  itemKey: String
});
</script>
