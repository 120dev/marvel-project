<template>
  <div>
    <h1>Series </h1>

    <div class="container">
      <div class="content">
        <table>
          <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Année</th>
            <th>Titre</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in sortedData" @click="selectedIndex = item.id" :key="item.id" :class="{ 'active': selectedIndex === item.id }">
            <td><img :src="item.thumbnail.path+'.'+item.thumbnail.extension" width="80"></td>
            <td>{{ item.endYear }}</td>
            <td>{{ item.title }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="right-content">
        <Detail :selected-id="selectedIndex"></Detail>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import {fetchMarvel} from "@/services/marvelApiService.js";
import Detail from "@/components/Details/Detail.vue";

const data = ref([]);
const infos = ref([]);
const selectedIndex = ref(null);

/**
 * Fonction asynchrone pour récupérer les données des séries et les trier selon un critère spécifique.
 * @returns {Promise<void>}
 */
const getData = async () => {
  const {data: {results = []} = {}} = await fetchMarvel('series');
  data.value = results;
};

/**
 * Tri des données
 * @type {ComputedRef<UnwrapRefSimple<*>[]>}
 */
const sortedData = computed(() => {
  const sortBy = 'endYear';
  return data.value.slice().sort((a, b) => a[sortBy] - b[sortBy]);
});

onMounted(async () => {
  await getData();
});

</script>

<style>
:root {
  --border-common: 1px solid black;
  --padding-common: 8px;
  --text-align-common: left;
}

table {
  border-collapse: collapse;
}

table, th, td {
  border: var(--border-common);
}

th, td {
  padding: var(--padding-common);
  text-align: var(--text-align-common);
  white-space: nowrap;
}

tbody tr:hover {
  background-color: #0094e6;
  cursor: pointer;
}

.active {
  background-color: gray;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

th {
  font-weight: bold;
  font-size: larger;
}

.container {
  display: flex;
  justify-content: space-between;
}

.right-content {
  width: 75%;
}

ul.no-bullets {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

</style>
