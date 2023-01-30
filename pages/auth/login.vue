<template>
  <div>
    <v-container no-gutters fluid>
      <v-row>
        <v-col cols="12" md="6" fluid>
            <v-card color="primary">ds</v-card>
        </v-col>
        <v-col cols="12" md="6">
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
    return {};
  },
};
</script>