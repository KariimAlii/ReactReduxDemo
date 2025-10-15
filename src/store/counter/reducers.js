//! Redux Toolkit internally manages this mutation and translate it to creating a new object
//! with only the updates you specify
//! So It will provide State Immutability for you
export const increment = (state) => {
    state.counter++
};
export const decrement = (state) => {
    state.counter--
};
export const increase = (state, action) => {
    state.counter = state.counter + action.payload.value
}
export const toggleCounter = (state) => {
    state.showCounter = !state.showCounter
}


