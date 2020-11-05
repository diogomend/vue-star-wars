import swapi from "@/apis/swapi";
import storageHelper from "@/helpers/localStorage";

const actions = {
  fetchPeople: async ({ commit }) => {
    const storedPeople = storageHelper.getFromStorage();

    if (storedPeople && storedPeople.length) {
      commit("SET_PEOPLE", JSON.parse(storedPeople));
      return;
    }
    await getAllPeople(commit);
  }
};

const mutations = {
  SET_PEOPLE(state, people) {
    state.people = people;
  }
};

const getters = {
  getPeople: state => state.people
};

const state = () => ({
  people: []
});

export default {
  namespaced: true,
  getters,
  actions,
  state,
  mutations
};

export const getAllPeople = async commit => {
  let currentPage = 1;
  let hasNextPage = true;
  let people = [];

  while (hasNextPage) {
    const { data } = await swapi.get("people", {
      params: {
        page: currentPage
      },
      useCache: true
    });

    people = people.concat(data.results);
    storageHelper.setItem(JSON.stringify(people));
    commit("SET_PEOPLE", people);

    hasNextPage = !!data.next;
    currentPage += 1;
  }

  return people;
};
