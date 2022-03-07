import { createStore } from "vuex";

import Journal from '../modules/daybook/store/index'


const store = createStore({
    modules:{
        Journal
    }
})


export default store;