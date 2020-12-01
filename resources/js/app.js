
require('./bootstrap');

window.Vue = require('vue');

Vue.component('notificaciones-component', require('./components/NotificacionesComponent.vue').default);
Vue.component('form-component', require('./components/FormComponent.vue').default);
Vue.component('principal-component', require('./components/PrincipalComponent').default);

const app = new Vue({
    el: '#app',
});
