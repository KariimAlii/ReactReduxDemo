// import redux from 'redux';

import {createStore} from "redux";
import Actions from "./actions.js";
import {createSlice, configureStore} from "@reduxjs/toolkit";
import {decrement, increase, increment, toggle} from "./reducers.js";

const initialState = {
    counter : 0,
    showCounter: true
}

//! We are creating of our global state (counter-related state)
const counterSlice = createSlice({
    name: 'COUNTER',
    initialState,
    reducers: {
        increment,
        decrement,
        increase,
        toggle
    }
})


//! configureStore(): provides merging multiple reducers for multiple slices
//! it takes a configuration object as a parameter
//! { reducer: }  Redux still need one main reducer function which is responsible for the global state
//! the configureStore() will merge those multiple reducers into one global reducer
const store = configureStore({
    //! reducer: counterSlice.reducer,   ✅✅ you can use single reducer function
    reducer: {  //! you can use a map of reducers ✅✅
        counter : counterSlice.reducer
    }
});

export default store;