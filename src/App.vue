<template>
  <v-app>
    <!--<v-main>-->
    <nav-drawer :show="menu" />
    <app-bar @toggleMenu="toggleMenu" />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <planet-modal />
  </v-app>
</template>

<script>
import PlanetModal from "@/components/PlanetModal";
import AppBar from "@/components/AppBar";
import NavDrawer from "@/components/NavDrawer";
export default {
  name: "App",
  components: {
    PlanetModal,
    AppBar,
    NavDrawer
  },
  data: () => {
    return {
      menu: false
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    }
  }
};
</script>
