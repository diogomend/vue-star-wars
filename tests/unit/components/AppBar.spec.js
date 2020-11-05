import Vuetify from "vuetify";
import Vue from "vue";
import Vuex from "vuex";
import AppBar from "@/components/AppBar.vue";
import { shallowMount } from "@vue/test-utils";
import { storeOptions } from "@/store/index";
Vue.use(Vuex);
Vue.use(Vuetify);

describe("AppBar.vue", () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    store = new Vuex.Store(storeOptions);
  });

  it("is a Vue instance", () => {
    const wrapper = shallowMount(AppBar, {
      store
    });

    const template = wrapper.html();
    expect(template).toMatchSnapshot();
  });

  it("toggleMenu should emit an event", () => {
    const wrapper = shallowMount(AppBar, {
      store
    });

    wrapper.vm.toggleMenu();
    expect(Object.keys(wrapper.emitted()).length).toBe(1);
    expect(Object.keys(wrapper.emitted())[0]).toBe("toggleMenu");
  });
});
