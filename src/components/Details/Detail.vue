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
<script>
import {ref, watch} from 'vue';
import {fetchMarvel} from "@/services/marvelApiService.js";
import DetailsList from "@/components/Details/DetailsList.vue";
import ImageList from "@/components/Details/ImageList.vue";
import LinkList from "@/components/Details/LinkList.vue";

export default {
  components: {LinkList, ImageList, DetailsList},
  props: {
    selectedId: Number,
  },
  setup(props) {
    const infos = ref([]);

    /**
     * Fonction asynchrone pour récupérer des informations détaillées sur une série spécifique par son index.
     * @param id
     * @returns {Promise<void>}
     */
    const getDetails = async (id) => {
      infos.value = await fetchMarvel(`series/${id}/comics`);
    };

    /**
     * Observe les changements sur la prop `selectedId`.
     */
    watch(() => props.selectedId, (newId) => {
      getDetails(newId);
    });

    return {
      infos,
    };
  }
}
</script>

<style>
.header {
  font-weight: bold;
  font-size: larger;
  background-color: rgba(87, 86, 89, 0.22);
}
</style>
