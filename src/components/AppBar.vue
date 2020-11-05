<template>
  <v-app-bar color="orange" dark app>
    <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
    <v-toolbar-title>Star Wars App</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    }
  }
};
</script>
