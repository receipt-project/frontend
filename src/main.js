import Vue from 'vue';
import App from '@/App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import SearchPage from "@/components/pages/SearchPage";
import ReceiptPage from "@/components/pages/ReceiptPage";
import RecentPage from "@/components/pages/RecentPage";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {path: "/receipt/:receiptId", component: ReceiptPage, props: true},
  {path: "/recent", component: RecentPage},
  {path: "*", component: SearchPage}
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
