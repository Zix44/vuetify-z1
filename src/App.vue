<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <MenuItem v-for="mItem in menuItems" :key="mItem.id" :menu="mItem"/>
        <!-- the above menu items are generated based on routes -->
        <!-- start light dark toggle -->             
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Light/Dark</v-list-item-title>
          </v-list-item-content>          
          <v-list-item-action>
            <v-switch v-model="isDark"></v-switch>
          </v-list-item-action>    
        </v-list-item>
        <!-- end light dark toggle -->             
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Vuetify Test Application</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span>&copy; 2020 - A.Bromage</span>
    </v-footer>
  </v-app>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'
export default {
  name: 'App',
  components: {
    MenuItem
  },
  data: function() {
    return {
      drawer: null,
      menuItems: this.$router.options.routes
    }
  },
  computed: {
    isDark: {
      get() {
        return this.$vuetify.theme.isDark
      },
      set() {
        this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
      }
    }
  }
};
</script>
