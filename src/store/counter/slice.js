import {createSlice} from "@reduxjs/toolkit";
import {decrement, increase, increment, toggleCounter} from "./reducers.js";

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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

