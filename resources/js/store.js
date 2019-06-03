export default {
    state: {
        welcomeMessage: "Welcome to my Vue App"
    },
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        }
    },
    mutations: {},
    actions: {},
}