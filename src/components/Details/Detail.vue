<template>
  <div v-if="infos && infos.data" class="no-bullets">
    <ul class="no-bullets">
      <li v-for="item in infos.data.results" :key="item.id">
        <div class="header">{{ item.title }}

          <link-list :urls="item.urls"></link-list>
        </div>

        <details-list :items="item.textObjects" item-key="id"></details-list>
        <image-list :images="item.images"></image-list>

      </li>
    </ul>
  </div>
</template>

<script setup>
import {defineProps, ref, watch} from 'vue';
import {fetchMarvel} from "@/services/marvelApiService.js";
import DetailsList from "@/components/Details/DetailsList.vue";
import ImageList from "@/components/Details/ImageList.vue";
import LinkList from "@/components/Details/LinkList.vue";

/**
 * Déclaration des props en utilisant defineProps
 * @type {Prettify<Readonly<ExtractPropTypes<{selectedId: NumberConstructor}>>>}
 */
const props = defineProps({
  selectedId: Number,
});

const infos = ref([]);

/**
 * Fonction asynchrone pour récupérer des informations détaillées sur une série spécifique par son index.
 * @param id L'ID de la série pour laquelle récupérer les détails.
 * @returns {Promise<void>}
 */
const getDetails = async (id) => {
  if (id !== null && id !== undefined) {
    infos.value = await fetchMarvel(`series/${id}/comics`);
  }
};

/**
 * Observe les changements sur la prop `selectedId` pour appeler getDetails.
 */
watch(() => props.selectedId, (newId) => {
  getDetails(newId);
});
</script>

<style>
.header {
  font-weight: bold;
  font-size: larger;
  background-color: rgba(87, 86, 89, 0.22);
}
</style>
