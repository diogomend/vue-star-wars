import swapi from "@/apis/swapi";
import peopleStore from "@/store/people";
import storageHelper from "@/helpers/localStorage";
jest.mock("@/apis/swapi");
jest.mock("@/helpers/localStorage");

describe("People Store Actions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetchPeople should get from localStorage if not empty", async () => {
    const commit = jest.fn();
    const getFromStorage = jest
      .spyOn(storageHelper, "getFromStorage")
      .mockImplementation(() => {
        return "{}";
      });
    const setItem = jest.spyOn(storageHelper, "setItem");
    await peopleStore.actions.fetchPeople({ commit });
    expect(getFromStorage).toHaveBeenCalled();
    expect(commit).toHaveBeenCalled();
    expect(setItem).not.toHaveBeenCalled();
  });

  it("fetchPeople should not get from localStorage if empty", async () => {
    const commit = jest.fn();
    jest.spyOn(storageHelper, "getFromStorage").mockImplementation(() => {
      return false;
    });
    const setItem = jest.spyOn(storageHelper, "setItem");
    jest.spyOn(swapi, "get").mockImplementation(() => {
      return {
        data: {
          next: false,
          results: []
        }
      };
    });

    await peopleStore.actions.fetchPeople({ commit });
    expect(setItem).toHaveBeenCalled();
    expect(commit).toHaveBeenCalled();
  });
});

describe("People Store Mutations", () => {
  it("SET_PEOPLE should change state", () => {
    const state = { people: [] };
    peopleStore.mutations.SET_PEOPLE(state, ["test"]);
    expect(state.people).toEqual(["test"]);
  });
});

describe("People Store Getters", () => {
  it("getPeople should get state", () => {
    const state = { people: ["test"] };
    expect(peopleStore.getters.getPeople(state)).toEqual(["test"]);
  });
});
