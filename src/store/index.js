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
createSlice({
    name: 'COUNTER',
    initialState,
    reducers: {
        increment,
        decrement,
        increase,
        toggle
    }
})

//! Reducer is a pure function that updates the store
//! but it provides immutability of state =>  always returns a totally new state object
const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.INCREMENT:
            return {   //! State Immutability
                ...state,
                counter: state.counter + 1
            }
        case Actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case Actions.INCREASE:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case Actions.TOGGLE:
            return {
                ...state,
                showCounter: !state.showCounter
            }
        default:
            return state;
    }
}

const store = createStore(counterReducer);

export default store;