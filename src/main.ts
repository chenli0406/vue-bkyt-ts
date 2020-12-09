import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import '@/icons';
import 'vant/lib/index.css';
import { setStore, getStore, removeStore } from '@/utils/storage';
import { Image as VanImage, List, ActionSheet, Lazyload, PullRefresh, Toast, Rate, Skeleton, Image, Icon, Checkbox, Dialog, Field, Button, Tabs, Tab, Empty, Tabbar, TabbarItem, Sticky, Form } from 'vant';

Vue.config.productionTip = false;
Vue.prototype.setStore = setStore;
Vue.prototype.getStore = getStore;
Vue.prototype.removeStore = removeStore;
Vue.use(Vant);
Vue.use(List);
Vue.use(Rate);
Vue.use(Skeleton);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(Field);
Vue.use(Button);
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(Empty);
Vue.use(Dialog);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(PullRefresh);
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(ActionSheet);
Vue.use(Sticky);
Vue.use(Form);

Toast.setDefaultOptions('loading', { forbidClick: true });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
