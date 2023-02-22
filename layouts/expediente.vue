<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :expand-on-hover="$vuetify.breakpoint.mdAndUp && drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div class="d-flex align-center justify-center">
        <img :src="require('@/assets/logo/isologo-aryy.svg')" alt="isologo-aryy" style="max-width: 15vh"/>
      </div>
      <v-list>
        <v-list-item
          v-model="model"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          mandatory
          color="indigo"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>{{ item.padlock }}</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="grey lighten-3">
      <v-container>
        <Nuxt class="grey lighten-3"/>
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
  
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      model: 1,
      items: [
        {
          icon: 'mdi-home',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-calendar',
          title: 'Calendario',
          to: '/inspire',
        },
        {
          icon:'mdi-clipboard-list-outline',
          title:'Pacientes',
          to:'/patients'
        },
        {
          icon: 'mdi-forum',
          title:'Opiniones',
          padlock:'mdi-lock-outline'
        },
        {
          icon: 'mdi-finance',
          title:'Finanzas',
          padlock:'mdi-lock-outline'
        },
        {
          icon: 'mdi-chart-line',
          title:'Estadisticas',
          padlock:'mdi-lock-outline'
        },
        {
          icon: 'mdi-volume-medium',
          title:'Marketing',
          padlock:'mdi-lock-outline'
        },
        {
          icon: 'mdi-note-text',
          title:'Noticias',
          padlock:'mdi-lock-outline'
        },
        {
          icon: 'mdi-cart',
          title:'Compras',
          padlock:'mdi-lock-outline'
        },
        {
          icon: 'mdi-clipboard-text',
          title:'Asistente',
          padlock:'mdi-lock-outline'
        },
        {
          icon: 'mdi-cog',
          title:'Ajustes',
          to:'/settings'
        },
        {
          icon: 'mdi-login',
          title:'Cerrar sesión'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
