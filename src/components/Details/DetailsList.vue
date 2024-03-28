<template>
  <ul>
    <li v-for="(subItem, index) in items" :key="subItem[itemKey]">
      {{ subItem.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array,
    itemKey: String
  }
}
</script>
