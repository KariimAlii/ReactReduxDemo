// import redux from 'redux';

import {createStore} from "redux";
import Actions from "./actions.js";
import {createSlice} from "@reduxjs/toolkit";
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



const store = createStore(counterSlice.reducer);

export default store;