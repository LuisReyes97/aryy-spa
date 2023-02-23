<template>
    <v-card rounded="lg" flat>
        <v-container>
            <v-row class="gutter-0" dense>
                <v-col cols="12" md="4" sm="4" class="my-0">
                    <v-text-field
                        dense
                        prepend-icon="mdi-phone-in-talk"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="4"  class="my-0">
                    <v-text-field
                        dense
                        prepend-icon="mdi-account"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="4" class="my-0">
                    <v-text-field
                        dense
                        prepend-icon="mdi-cake-variant"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="4" class="my-0">
                    <v-select
                        dense
                        prepend-icon="mdi-water"
                        no-data-text="No hay datos disponibles"
                    ></v-select>
                </v-col>
                <v-col cols="12" md="4" sm="4"  class="my-0">
                    <v-text-field
                        dense
                        prepend-icon="mdi-ruler"
                        suffix="mts"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="4"  class="my-0">
                    <v-text-field dense outlined prepend-icon="mdi-water">
                        <template v-slot:append>
                            <span>bpm</span>
                        </template>
                    </v-text-field>

                </v-col>
                <v-col cols="12" md="4" sm="4"  class="my-0">
                    <v-select
                        dense
                        prepend-icon="mdi-gender-male-female"
                        no-data-text="No hay datos disponibles"
                    ></v-select>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data(){
        return{

        }
    },
}
</script>

<style>
.my-icon-color {
  color: red !important;
}

</style>