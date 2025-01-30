const state = {
  user: null, // Holds the user data
  token: localStorage.getItem('token') || null // Holds the authentication token
};

const getters = {
  user: state => state.user, // Getter to access the user state
  isAuthenticated: state => !!state.token // Check if the user is authenticated
};

const actions = {
  async fetchUser({ commit }) {
    try {
      const response = await axios.get('/api/user/', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      commit('SET_USER', response.data); // Update user state
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },
  async logoutUser({ commit }) {
    try {
      await axios.post('/api/logout', {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });

      commit('CLEAR_USER'); // Clear user state immediately

      // Redirect user to login page after logout
      setTimeout(() => {
        window.location.href = '/login'; // Ensures a full refresh
      }, 100); 

    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
};

const mutations = {
  SET_USER(state, user) {
    state.user = user; // Mutation to set user state
  },
  SET_TOKEN(state, token) {
    state.token = token; // Mutation to set token
    localStorage.setItem('token', token); // Save token to localStorage
  },
  CLEAR_USER(state) {
    state.user = null; // Mutation to clear user state
    state.token = null; // Mutation to clear token
    localStorage.removeItem('token'); // Remove token from localStorage
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};