<template>
    <v-container>
            <v-col cols="12" md="8">
                <v-text-field  required outlined label="Correo" dense></v-text-field>
            </v-col>
                        <v-col cols="12" md="8">
                <v-text-field outlined label="Contraseña" dense></v-text-field>
            </v-col>
            <v-btn block color="purple" dark>Iniciar</v-btn>
    </v-container>
</template>

<script>
export default{
    data(){
        return{

        }
    }
}
</script>