import swapi from "@/apis/swapi";
import planetsStore from "@/store/planets";
jest.mock("@/apis/swapi");

describe("Planets Store Actions", () => {
    beforeEach(() => {
        jest.clearAllMocks();
      });

      it("showPlanetDetails should show modal and set planet", async () => {
        jest.spyOn(swapi, "get").mockImplementation(() => {
            return {
              data: 'MOCK_RESULT'
            };
          });

          const commit = jest.fn();
          await planetsStore.actions.showPlanetDetails({commit}, 'MOCK_ID');
          expect(commit).toHaveBeenCalledTimes(2);
      });

      it("hidePlanetModal should commit", async () => {
        const commit = jest.fn();

        await planetsStore.actions.hidePlanetModal({commit});
        expect(commit).toHaveBeenCalled();
    });
});

describe("Planets Store Mutations", () => {
    it("SET_SELECTED_PLANET should change state", () => {
        const state = {selectedPlanet: false};
          planetsStore.mutations.SET_SELECTED_PLANET(state, ['test']);
          expect(state.selectedPlanet).toEqual(['test']);
    });

    it("SET_SHOW_PLANET_MODAL should change state", () => {
        const state = {showPlanetModal: false};
        planetsStore.mutations.SET_SHOW_PLANET_MODAL(state, true);
          expect(state.showPlanetModal).toBeTruthy();
    })
});

describe("Planets Store Getters", () => {
    it("getActivePlanet should get state", () => {
        const state = {selectedPlanet: ['test']};
        expect(planetsStore.getters.getActivePlanet(state)).toEqual(['test'])
    });

    it("showPlanetModal should get state", () => {
        const state = {showPlanetModal: ['test']};
        expect(planetsStore.getters.showPlanetModal(state)).toEqual(['test'])
    });
});
