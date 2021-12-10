import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA8YNqOcYThvHB4ePTi49xAAkDxsV88JpU',
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
