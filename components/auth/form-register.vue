/* componente de registro de especialista */
<template>
    <v-container>
        <v-text-field
            v-model="email"
            outlined
            label="Correo electrónico"
            dense
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            outlined
            @click:append="show1 = !show1"
            dense
        ></v-text-field>
        <v-text-field
            v-model="password2"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            outlined
            @click:append="show1 = !show1"
            dense
        ></v-text-field>
            <div>
                <v-btn 
                    v-on:click="POST_DATA" 
                    @click="validate"  
                    class="text-capitalize" 
                    color="purple" 
                    dark 
                    block
                >Registrarme</v-btn>
            </div>

    </v-container>
</template>

<script>
export default{
    data(){
        return{
            show1: false,
            email:'',
            password: '',
            password2:'',
            valid: true,
            rules: {
                required: value => !!value || 'contraseña es obligatorio.',
                min: v => v.length >= 8 || 'Debe contener al menos 8 carácteres',
            },
            emailRules: [
                v => !!v || 'correo electrónico es obligatorio',
                v => /.+@.+\..+/.test(v) || 'correo invalido',
            ],

        }
    },
}

</script>