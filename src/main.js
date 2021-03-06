import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import { NavBar, Form, Field, Button, Tabbar, TabbarItem, Icon, Tab, Tabs, List, Cell, CellGroup, PullRefresh, Loading } from 'vant';

Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Loading);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')