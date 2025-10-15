// import redux from 'redux';

import {createSlice, configureStore} from "@reduxjs/toolkit";
import {decrement, increase, increment, login, logout, toggleCounter} from "./reducers.js";

const initialCounterState = {
    counter : 0,
    showCounter: true
}

//! We are creating of our global state (counter-related state)
const counterSlice = createSlice({
    name: 'COUNTER',
    initialState: initialCounterState,
    reducers: {
        increment,
        decrement,
        increase,
        toggleCounter
    }
})

const initialAuthState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'AUTHENTICATION',
    initialState: initialAuthState,
    reducers: {
        login,
        logout
    }
})




//! configureStore(): provides merging multiple reducers for multiple slices
//! it takes a configuration object as a parameter
//! { reducer: }  Redux still need one main reducer function which is responsible for the global state
//! the configureStore() will merge those multiple reducers into one global reducer
const store = configureStore({
    //! reducer: counterSlice.reducer,   //! ✅✅ you can use single reducer function
    //! you can use a map of reducers ✅✅
    reducer: {
        counter : counterSlice.reducer,
        auth: authSlice.reducer
    }
});

//! Redux Toolkit provides actions objects with unique identifiers
//! counterSlice.actions.toggleCounter
//!

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;