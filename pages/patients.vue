<template>
    <v-card>
        <data-table />
    </v-card>

</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        /* obtener lista de pacientes */
        get_patients(){
            this.$axios
                .get('')

        }


    }
}
</script>

GET_DATA() {
      this.$axios
        .get('/api/v1/physician/list-patients/', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((response) => {
          const obj = response.data.data
          const tamano = obj.length
          for (let i = 0; i < tamano; i++) {
            const objeto = {
              name: obj[i].patient.full_name,
              phone_number: obj[i].patient.user_info.phone_number,
              last_appointment: obj[i].last_appointment,
              status: obj[i].status,
            }
            this.items.push(objeto)
          }
        })
    },
