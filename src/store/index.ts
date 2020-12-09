import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabbarIndex: 0 as number,
    applyOfWithdrawal: '' as any,
  },
  mutations: {
    setTabbarIndex(state: any, data: any) {
      state.tabbarIndex = data;
    },
    applyOfWithdrawal(state: any, data: any){
      state.applyOfWithdrawal = data;
    }
  },
  actions: {
  },
  modules: {
  },
});
