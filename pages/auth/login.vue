<template>
<v-app>
   <v-row justify="space-around">
     <!-- componente video -->
      <v-col class="ocultar-col" cols="12" md="8" sm="4">
        <v-img
          lazy-src="https://images8.alphacoders.com/123/1239331.jpg"
          max-height="1950"
          max-width="1080"
          src="https://images8.alphacoders.com/123/1239331.jpg"
        ></v-img>
      </v-col>
      <!-- componente formulario login -->
      <v-col cols="12" md="4" sm="8">
        <v-container>
         
            <v-img
              :src="require('@/assets/logo/isologo-aryy.svg')"
              max-width="150"
            ></v-img>
   
          <v-toolbar flat>
            <template v-slot:extension>
              <v-tabs  v-model="tab" centered >
                <v-tab v-for="(item, title) in items" :key="title" class="text-capitalize" >
                  {{item.title}}
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card  flat>
                 <form-login v-if="true" />
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card  flat>
                 <form-register/>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
          <v-alert
  type="success"
>Desarrollo: Luis Reyes |2023</v-alert>
        </v-container>
      </v-col>
    </v-row>
    </v-app>
</template>

<script>
import formLogin from "../../components/auth/form-login.vue"
import FormRegister from '../../components/auth/form-register.vue'

export default{
  components: {
    formLogin,
    FormRegister 
  },
  layout: 'auth',
  data(){
    return{
      tab: null,
      items: [
        {
          title: 'Iniciar sesión'
        },
        {
          title: 'Registrarme'
        }
      ]

    }

  },
}
</script>

<style>
@media screen and (max-width: 900px) {
  .ocultar-col{
    display: none;
  }
}

</style>
