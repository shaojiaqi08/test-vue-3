import user from './modules/user'
import {createStore} from "vuex";

export const store = createStore({
    modules: {
        user
    }
})
