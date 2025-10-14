import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import Actions from "../store/actions.js";

const Counter = () => {
    const dispatch = useDispatch();
    //! Redux will set a subscription to redux store from this component
    //! Counter Component <---------Subscribe-----------> Store
    //! Whenever the value (state.counter) is updated in store => it will send the new value to the component
    const counter = useSelector(state => state.counter)
    const showCounter = useSelector(state => state.showCounter)

    const incrementHandler = () => {
        dispatch( {
            type: Actions.INCREMENT
        } )
    }
    const decrementHandler = () => {
        dispatch( {
            type: Actions.DECREMENT
        } )
    }
    const increaseHandler = (value) => {
        dispatch( {
            type: Actions.INCREASE,
            payload: {
                value
            }
        } )
    }
  const toggleCounterHandler = () => {
      dispatch( {
          type: Actions.TOGGLE
      } )
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
