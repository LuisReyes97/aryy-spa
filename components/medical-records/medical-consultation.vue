<template>
    <v-card rounded="lg" outlined>
        <v-container fluid class="pa-4">
            <v-toolbar flat dense>
                <v-toolbar-title class="font-weight-regular">Signos vitales</v-toolbar-title>
                <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12" md="2" sm="4">
                    <v-text-field
                        prepend-icon="mdi-thermometer"
                        suffix="ºC"
                        dense
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-text-field
                        prepend-icon="mdi-weight"
                        suffix="Kg"
                        dense
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-text-field
                        prepend-icon="mdi-clock-fast"
                        suffix="r/m"
                        dense
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-text-field dense outlined prepend-icon="mdi-water">
                        <template v-slot:append>
                            <span>bpm</span>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <p>Descripción de síntomas</p>
                    <v-text-field
                    outlined
                    placeholder="Escribe aquí los síntomas del paciente"
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <p>Exploración médica</p>
                    <v-radio-group v-model="selectedOption" row >
                    <v-radio
                        label="si"
                        value="si"
                    ></v-radio>
                    <v-radio
                        label="no"
                        value="no"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                        outlined
                        placeholder="Escribe aqui los datos de la exploración médica"
                       v-if="selectedOption === 'si'"
                       dense
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-toolbar flat dense>
                <v-toolbar-title class="font-weight-regular">Diagnóstico y tratamiento</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <br>
            <v-row>
                <v-col cols="12" class="mt-0">
                    <p>Impresión diagnóstica</p>
                    <v-text-field
                        outlined
                        placeholder="Escribe aqui la impresión diagnóstica actual"
                        dense
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field
                        outlined
                        dense
                        label="Tratamiento"
                        placeholder="Medicamento"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field
                        outlined
                        dense
                        placeholder="0"
                        label="Tomar"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field
                        outlined
                        dense
                        placeholder="Cada 8 horas"
                        label="Frecuencia"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field
                        outlined
                        dense
                        placeholder="15 dias"
                        label="Duración"
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <p>Instrucciones del tratamiento</p>
                    <v-text-field
                        outlined
                        placeholder="Escribe aqui el diagnóstico"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="3"
                >
                <v-btn class=" text-lowercase font-weight-regular" text color="primary" append>
                    <v-icon>mdi-plus-circle</v-icon>
                    Añadir otro medicamento
                </v-btn>
                </v-col>
            </v-row>
            <v-toolbar flat dense>
                <v-toolbar-title class="font-weight-regular">Órdenes de laboratorio</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <br>
            <v-row>
                <v-col cols="12">
                    <v-radio-group v-model="selectedOptio" row >
                    <v-radio
                        label="Estudios de laboratorios"
                        value="si"
                    ></v-radio>
                    <v-radio
                        label="Estudios de gabinete"
                        value="no"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                        outlined
                        placeholder="Laboratorios"
                       v-if="selectedOptio === 'si'"
                       dense
                    ></v-text-field>
                    <v-text-field
                        outlined
                        placeholder="Gabientes"
                       v-if="selectedOptio === 'no'"
                       dense
                    ></v-text-field>

                </v-col>
                
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
             selectedOption: '',
             selectedOptio: '',

        }
    },
}
</script>



