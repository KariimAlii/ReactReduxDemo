import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counter/slice.js";

const Counter = () => {
    const dispatch = useDispatch();
    //! Redux will set a subscription to redux store from this component
    //! Counter Component <---------Subscribe-----------> Store
    //! Whenever the value (state.counter) is updated in store => it will send the new value to the component
    const counter = useSelector(state => state.counter.counter)
    const showCounter = useSelector(state => state.counter.showCounter)

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }
    const increaseHandler = (value) => {
        //! The Redux Action object is created like that
        //! {
        //!     type: SOME_UNIQUE_IDENTIFIER,
        //!     payload : { key: value }
        //! }
        //! The Payload is the default property name used by Redux Toolkit
        dispatch(counterActions.increase({
            value
        }))
    }
  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {showCounter && (
            <div className={classes.value}>{counter}</div>
        )}

        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={() => increaseHandler(5)}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
