/* componente de registro de especialista */
<template>
    <v-container>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="email"
                :rules="emailRules"
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
                v-model="password_confirmation"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                label="Confirmar contraseña"
                outlined
                @click:append="show1 = !show1"
                dense
            ></v-text-field>
            <v-row>
                <v-col  cols="4" md="4" sm="4">
                <v-select
                    v-model="country_code"
                    :items="opciones"
                    :rules="[() => !!name || 'código obligatorio.']"
                    outlined
                    dense
                    label="Código"
                    prefix="+"
                ></v-select>
                </v-col>
                <v-col class="mr-0"  cols="8" md="8" sm="8">
                    <v-text-field
                        v-model="phone_number"
                        :rules="[() => !!name || 'Número de teléfono es obligatorio.']"
                        outlined
                        dense
                        label="Número de teléfono"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            
                <div>
                    <v-btn 
                        v-on:click="post_register(); validate();" 
                        @click="validate"  
                        class="text-capitalize" 
                        color="purple" 
                        dark 
                        block
                    >Registrarme</v-btn>
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
            password_confirmation:'',
            country_code: null,
            phone_number: '',
            valid: true,
            rules: {
                required: value => !!value || 'contraseña es obligatorio.',
                min: v => v.length >= 8 || 'Debe contener al menos 8 carácteres',
            },
            emailRules: [
                v => !!v || 'correo electrónico es obligatorio',
                v => /.+@.+\..+/.test(v) || 'correo invalido',
            ],
            opciones: ['52','45','23','023','234'],
        }
    },
    methods:{
        
        validate(){
            this.$refs.form.validate()
        },

        post_register(){
            this.$axios
                .post('/api/v1/register',{
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    country_code: this.country_code,
                    phone_number: this.phone_number,
                    type_user: 'Physician'
                })
                .then((response) =>{
                    localStorage.setItem('token', response.data.access_token)
                })
        },

    }
}

</script>