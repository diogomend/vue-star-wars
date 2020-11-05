<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="filter"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :loading="isLoading"
        :headers="headers"
        :items="mappedPeople"
      >
        <template v-slot:item.planet="{ item }">
          <v-btn color="orange" @click="showPlanetDetails(item.planet)">
            View Planet Details
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { formatDate } from "@/plugins/dayjs";
import { getPlanetID } from "@/helpers/mappers";
export default {
  data: () => {
    return {
      isLoading: true,
      filter: "",
      headers: [
        {
          sortable: true,
          text: "Name",
          value: "name"
        },
        {
          sortable: true,
          text: "Height",
          value: "height"
        },
        {
          sortable: true,
          text: "Mass",
          value: "mass",
          align: "right"
        },
        {
          sortable: true,
          text: "Created",
          value: "created",
          align: "right"
        },
        {
          sortable: true,
          text: "Edited",
          value: "edited",
          align: "right"
        },
        {
          sortable: true,
          text: "Planet",
          value: "planet",
          align: "right"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      people: ["people/getPeople"]
    }),
    mappedPeople() {
      return this.people
        .filter(person => {
          return person.name.toLowerCase().includes(this.filter.toLowerCase());
        })
        .map(person => {
          return {
            ...person,
            created: formatDate(person.created),
            edited: formatDate(person.edited),
            planet: getPlanetID(person.homeworld)
          };
        });
    }
  },
  methods: {
    ...mapActions("people", ["fetchPeople"]),
    ...mapActions("planets", ["showPlanetDetails"])
  },
  async mounted() {
    await this.fetchPeople();
    this.isLoading = false;
  }
};
</script>
