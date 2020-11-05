<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list nav>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Diogo Mendonça</v-list-item-title>
          <v-list-item-subtitle>Star Wars app</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item-group v-model="group" active-class="text--accent-4">
        <v-list-item
          v-for="(page, index) in pages"
          :key="index"
          :to="page.link"
        >
          <v-list-item-title>{{ page.text }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
  props: ["show"],
  data() {
    return {
      group: true,
      pages: [
        {
          text: "Home",
          link: "/"
        },
        {
          text: "About",
          link: "/about"
        }
      ]
    };
  },
  computed: {
    drawer: {
      get() {
        return this.show;
      },
      set() {
        this.$emit("toggleDrawer");
      }
    }
  }
};
</script>

<style scoped>
.v-navigation-drawer--absolute {
  z-index: 10;
}
</style>
