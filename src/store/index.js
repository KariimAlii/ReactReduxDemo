import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter/slice.js";
import authReducer from "./auth/slice.js";

//! configureStore(): provides merging multiple reducers for multiple slices
//! it takes a configuration object as a parameter
//! { reducer: }  Redux still need one main reducer function which is responsible for the global state
//! the configureStore() will merge those multiple reducers into one global reducer
const store = configureStore({
    //! reducer: counterSlice.reducer,   //! ✅✅ you can use single reducer function
    //! you can use a map of reducers ✅✅
    reducer: {
        counter : counterReducer,
        auth: authReducer
    }
});

//! Redux Toolkit provides actions objects with unique identifiers
//! counterSlice.actions.toggleCounter

export default store;