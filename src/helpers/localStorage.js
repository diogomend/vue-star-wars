const PEOPLE_STORAGE = "PEOPLE_STORAGE";

const Storage = {
  getFromStorage() {
    return localStorage.getItem(PEOPLE_STORAGE);
  },
  setItem(obj) {
    return localStorage.setItem(PEOPLE_STORAGE, obj);
  }
};

export default Storage;
