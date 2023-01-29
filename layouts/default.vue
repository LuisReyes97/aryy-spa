<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >

<v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="100"
  max-width="200"
  src="https://picsum.photos/id/11/500/300"
></v-img>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
    >
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer , fixed = !fixed"  />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-avatar>
      <img
        src="https://cdn-icons-png.flaticon.com/512/194/194915.png"
        alt="John"
      >
    </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
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
      items: [
        {
          icon: 'mdi-home',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-calendar',
          title: 'Calendario',
          to: '/inspire'
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
          title:'Ajustes'
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
