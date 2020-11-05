import Vue from "vue";
import Vuex from "vuex";
import people from "@/store/people";
import planets from "@/store/planets";

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    people,
    planets
  }
};

export default new Vuex.Store(storeOptions);
