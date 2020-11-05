import Vuetify from '@/plugins/vuetify';
import Vue from 'vue';
import Vuex from "vuex";
import PlanetModal from "@/components/PlanetModal.vue";
import { shallowMount } from "@vue/test-utils"
import { storeOptions } from "@/store/index"
Vue.use(Vuex);
Vue.use(Vuetify);

describe("PlanetModal.vue", () => {
    let store;

    beforeEach(() => {
        jest.clearAllMocks();
        store = new Vuex.Store(storeOptions);
      });

      it("is a Vue instance", () => {
        const wrapper = shallowMount(PlanetModal, {
          store
        });
    
        const template = wrapper.html();
        expect(template).toMatchSnapshot();
      });
      it("Properties to have info if activePlanet", () => {
        storeOptions.modules.planets.getters.getActivePlanet = jest.fn().mockImplementation(() => {
            return {diameter: 1, population: 2, climate: 'arid'}
        });
        store = new Vuex.Store(storeOptions);
        const wrapper = shallowMount(PlanetModal, {
          store
        });
        wrapper.vm.dialog = true;
    
        expect(wrapper.vm.properties.length).toBe(3);
        expect(wrapper.vm.isPlanetSelected).toBeTruthy();
      });

      it("Properties should be empty if no activePlanet", () => {
        storeOptions.modules.planets.getters.getActivePlanet = jest.fn().mockImplementation(() => {
            return false
        });
        store = new Vuex.Store(storeOptions);
        const wrapper = shallowMount(PlanetModal, {
          store
        });
    
        expect(wrapper.vm.properties.length).toBe(0);
        expect(wrapper.vm.isPlanetSelected).toBeFalsy();
      });
})