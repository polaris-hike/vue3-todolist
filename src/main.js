import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import './index.css'
import router from './router/index'
import vuex from './store';
import 'ant-design-vue/dist/antd.css';


createApp(App).use(router).use(vuex).use(Antd).mount('#app')
