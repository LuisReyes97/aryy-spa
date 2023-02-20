<template>
<div>
  <v-data-table
    :headers="headers"
    :items-per-page="itemsPerPage" :sort-by="sortBy" :page="currentPage" :total-items="totalUsers" :server-items-length="serverItemsLength" @page-count="pageCount = arguments[0]"
    no-data-text="No hay datos disponibles"
  >

  </v-data-table>
  <v-card-actions>
      <v-pagination v-model="currentPage" :length="pageCount" @input="getUsers"></v-pagination>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  data(){
    return{
      headers:[
        {text: 'Nombre'}
      ]

    }
  },
}
</script>

