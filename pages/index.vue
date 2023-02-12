<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
        <v-card>Hannyta</v-card>
      <v-btn @click="$vuetify.theme.dark = ! $vuetify.theme.dark ">dark</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'dashboard',
  data(){
    return{

    }
  },
}
</script>
