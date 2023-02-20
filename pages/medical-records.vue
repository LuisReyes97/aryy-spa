<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col cols="8" sm="8" md="8">
                    <v-card>
                        <basic-information/>
                    </v-card>
                </v-col>
                <v-col cols="4" md="4">
                    <v-card>
                        <h2>hola</h2>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import basicInformation from '../components/medical-records/basic-information.vue'
export default {
  components: { basicInformation },
    data(){
        return{

        }
    },
}
</script>