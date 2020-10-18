import Vue from 'vue';
import Vuex from 'vuex';
import * as auth from './services/auth_service'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn:null,
        apiURL: 'http://localhost:8000/api',
        serverPath: 'http://localhost:8000',
        profile:{},
    },
    mutations: {
        authenticate(state, payload) {
            state.isLoggedIn = auth.isLoaggedIn();//call to is Loagedin function in auth service and that will return true or false
            if(state.isLoggedIn){
                state.profile = payload;
            }else {
                state.profile = {};
            }
        }
    },
    actions: {
        authenticate(context, payload) {
            context.commit('authenticate', payload);//authenticate here it will cal autheticate of mutation and it will send payload
        }
    }
});