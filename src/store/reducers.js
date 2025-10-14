export const increment = (state) => ({
    ...state,
    counter: state.counter + 1
})
export const decrement = (state) => ({
    ...state,
    counter: state.counter - 1
})
export const increase = (state, payload) => ({
    ...state,
    counter: state.counter + payload.value
})
export const toggle = (state) => ({
    ...state,
    showCounter: !state.showCounter
})