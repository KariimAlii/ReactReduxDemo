// import redux from 'redux';

import {createStore} from "redux";

const initialState = {
    counter : 0,
    showCounter: true
}
//! Reducer is a pure function that updates the store
//! but it provides immutability of state =>  always returns a totally new state object
const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'increase':
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case 'toggle':
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