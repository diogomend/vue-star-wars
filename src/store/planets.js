import swapi from "@/apis/swapi";

const actions = {
  showPlanetDetails: async ({ commit }, planetID) => {
    commit("SET_SHOW_PLANET_MODAL", true);
    const { data } = await swapi.get(`planets/${planetID}`);
    commit("SET_SELECTED_PLANET", data);
  },
  hidePlanetModal: async ({ commit }) => {
    commit("SET_SHOW_PLANET_MODAL", false);
  }
};
const mutations = {
  SET_SELECTED_PLANET(state, planet) {
    state.selectedPlanet = planet;
  },
  SET_SHOW_PLANET_MODAL(state, show) {
    state.showPlanetModal = show;
  }
};

const getters = {
  getActivePlanet: state => state.selectedPlanet,
  showPlanetModal: state => state.showPlanetModal
};

const state = () => ({
  selectedPlanet: null,
  showPlanetModal: false
});

export default {
  namespaced: true,
  getters,
  actions,
  state,
  mutations
};
