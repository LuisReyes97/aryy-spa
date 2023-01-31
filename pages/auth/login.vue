<template>
  <div>
    <v-container no-gutters fluid>
      <v-row align="stretch">
        <v-col class="ocultar-col" cols="12" md="6" fluid>
            <v-card color="primary">ds</v-card>
        </v-col>
        <v-col cols="12" md="6" sm="6" align="center">
            <form-login/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import formLogin from "../../components/auth/form-login.vue";

export default{
  components: { formLogin }, 
  layout: "auth",
  data() {
    return {

    };
  },
};
</script>

<style>
@media screen and (max-width: 900px) {
  .ocultar-col{
    display: none;
  }
}
</style>


