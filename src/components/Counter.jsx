import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    //! Redux will set a subscription to redux store from this component
    //! Counter Component <---------Subscribe-----------> Store
    //! Whenever the value (state.counter) is updated in store => it will send the new value to the component
    const counter = useSelector(state => state.counter)

    const incrementHandler = () => {
        dispatch( {
            type: 'increment'
        } )
    }
    const decrementHandler = () => {
        dispatch( {
            type: 'decrement'
        } )
    }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ counter }</div>
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
