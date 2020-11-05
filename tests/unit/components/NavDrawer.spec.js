import Vuetify from "@/plugins/vuetify";
import Vue from "vue";
import Vuex from "vuex";
import NavDrawer from "@/components/NavDrawer.vue";
import { mount } from "@vue/test-utils";
import { storeOptions } from "@/store/index";
Vue.use(Vuex);
Vue.use(Vuetify);

describe("NavDrawer.vue", () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    store = new Vuex.Store(storeOptions);
  });

  it("is a Vue instance", () => {
    const wrapper = mount(NavDrawer, {
      store
    });

    const template = wrapper.html();
    expect(template).toMatchSnapshot();
  });

  it("Set drawer should emit event", () => {
    const wrapper = mount(NavDrawer, {
      store
    });

    wrapper.vm.drawer = false;
    expect(Object.keys(wrapper.emitted())[0]).toEqual("toggleDrawer");
  });
});
