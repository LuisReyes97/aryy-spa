<template>
  <v-row justify="center" align="center">
    
    <v-col cols="12" sm="8" md="6">

        <v-card>
          <p align="center">Para Blanquita & Hannyta</p>
                          <!--    <v-btn
              icon
              color="pink"
              @click="$vuetify.theme.dark = ! $vuetify.theme.dark "
            >
              <v-icon>mdi-flower</v-icon>
              Para Blanquita & Hannyta
            </v-btn> -->
<!-- 
          <v-img
  contain
  lazy-src="https://pbs.twimg.com/media/EuNGLXvXcAYuE57?format=jpg&name=medium"
  max-height="350"
  max-width="381"
  src="https://pbs.twimg.com/media/EuNGLXvXcAYuE57?format=jpg&name=medium"
></v-img> -->
        </v-card>

    <v-alert
      text
      prominent
      type="error"
      icon="mdi-heart-multiple"
    >
    No quiero perder nunca nuestra amistad,tal vez no pueda compartir lo mejor del mundo, pero tendrán siempre lo mejor de mí, gracias por compartir una bonita amistad
    las quiero mucho.
    <br>P.D.Luis Reyes
    </v-alert>
 

    </v-col>
  </v-row>

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
