<template>
    <v-app>
        <v-container>
            <div>
                <v-breadcrumbs :items="items"></v-breadcrumbs>
            </div>
            <v-row>
                <v-col cols="12" md="8" sm="8" >
                    <basic-information/>
                </v-col>
                <v-col cols="4" md="4">
                    <internal-notes/>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="8">
                    <medical-consultation/>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import basicInformation from '../components/medical-records/basic-information.vue'
import InternalNotes from '../components/medical-records/internal-notes.vue'
import MedicalConsultation from '../components/medical-records/medical-consultation.vue'
export default {
    layout: 'expediente',
  components: { basicInformation, InternalNotes,MedicalConsultation },
    
    data(){
     return{
            basicInformation:'información básica',
            items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          text: 'Lista de pacientes',
          disabled: false,
          href: '/patients',
        },
        {
          text: 'Consulta',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],

        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.title{
    font-family: 'Montserrat', sans-serif;
}
</style> 