<template>
  <v-dialog
    max-width="290"
    persistent
    v-model="dialog"
    @click:outside="hidePlanetModal"
  >
    <v-card light>
      <template v-if="!activePlanet">
        <div class="text-center">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
            class="mt-10 mb-10"
          />
        </div>
      </template>
      <template v-else>
        <v-card-title>{{ activePlanet.name }}</v-card-title>
        <v-card-text>
          <v-row v-for="(property, index) in properties" :key="index">
            <v-col cols="12" sm="5" class="modal-heading">{{
              property.name
            }}</v-col>
            <v-col cols="12" sm="7">
              {{ property.value }}
            </v-col>
          </v-row>
        </v-card-text>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("planets", ["hidePlanetModal"])
  },
  computed: {
    ...mapGetters({
      activePlanet: ["planets/getActivePlanet"],
      showPlanetModal: ["planets/showPlanetModal"]
    }),
    properties() {
      if (this.activePlanet) {
        return [
          { name: "Diameter", value: this.activePlanet.diameter },
          { name: "Climate", value: this.activePlanet.climate },
          { name: "Population", value: this.activePlanet.population }
        ];
      }

      return [];
    },
    isPlanetSelected() {
      return !!this.activePlanet;
    },
    dialog: {
      set() {},
      get() {
        return this.showPlanetModal;
      }
    }
  }
};
</script>

<style>
.modal-heading {
  font-weight: bold;
  font-size: 14px;
}

::v-deep .loading-modal {
  height: 200px;
}
</style>
