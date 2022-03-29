import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import { NavBar, Form, Field, Button, Tabbar, TabbarItem, Icon, Tab, Tabs } from 'vant';

Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')