<template>
    <v-container>
        <v-form
         ref="form"
         v-model="valid"
         lazy-validation
        >
            <v-col cols="12" md="8">
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    outlined 
                    label="Correo" 
                    dense
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="8">
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
            </v-col>
            <div>
                <v-btn v-on:click="POST_DATA" @click="validate" color="purple" dark>Iniciar sesión</v-btn>
            </div>
        </v-form>
            
    </v-container>
</template>

<script>
export default{
    data(){
        return{
            show1: false,
            email:'',
            password: '',
            valid: true,
            rules: {
                required: value => !!value || 'contraseña requerida.',
                min: v => v.length >= 8 || 'Min 8 characters',
            },
            emailRules: [
                v => !!v || 'correo requerido',
                v => /.+@.+\..+/.test(v) || 'correo invalido',
            ],

        }
    },
    methods: {
        validate(){
            this.$refs.form.validate()
        },
        POST_DATA(){
            this.$axios
                .post('api/v1/login',{
                    email: this.email,
                    password:this.password
                })
                .then((response) => {
                    localStorage.setItem('token', response.data.data.access_token)
                    this.$router.push('/')
                })
        }
    }
}
</script>