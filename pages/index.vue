<template>
  <v-container>
<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://scontent.ftgz3-1.fna.fbcdn.net/v/t31.18172-8/22181364_2023040167917763_5108740297232929260_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE19RqpxrNc8O7YISDxQWevWjdAkaOAhD1aN0CRo4CEPStVtADQ-xNxQ7LUdth9oc1c6vZecc7Y0Mq6Vy8uer1F&_nc_ohc=Az9ffMYssYsAX-UW85q&_nc_oc=AQnYV0dVj1KKxzA9xCIrxfQ46geg7gACHjQXNXkgWXsB9_QnsPTW7l7v1igAAaNRowGDonT_cG0-oaNXvrNFpiVJ&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfCSjPCv-iEodDf_DzUgWMND3OuMQIYJd5qf1FMtFOBfpw&oe=6434B0D3"
      height="200px"
    ></v-img>

    <v-card-title>
      Flor de sospo francisco ochoa
    </v-card-title>

    <v-card-subtitle>
      sal condimentada
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        mas informacion
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
        ref="https://api.whatsapp.com/send?phone=9612491370"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'dashboard',

  data(){
    return{

    }
  },
}
</script>
