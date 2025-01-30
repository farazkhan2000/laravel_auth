import { createStore } from 'vuex';
import user from './modules/user';

// Create Store
export default createStore({
  modules: {
    user
  }
});