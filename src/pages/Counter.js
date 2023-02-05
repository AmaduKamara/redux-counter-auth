import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounter = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[800px] shadow-xl bg-white p-6 rounded-md">
        <h1 className="font-bold text-3xl text-cyan-500 text-center">
          Redux Counter App
        </h1>
        <hr className="my-3" />
        {show && (
          <>
            <div>
              <h2 className="text-5xl text-center font-bold">{counter}</h2>
            </div>
            <hr className="my-3" />
            <div className="my-4 flex justify-center items-center">
              <div className="flex items-center space-x-6">
                <button
                  type="button"
                  className="bg-cyan-500 text-white py-3 px-6 rounded-md shadow-xl cursor-pointer"
                  onClick={incrementHandler}
                >
                  Increment
                </button>
                <button
                  type="button"
                  className="bg-cyan-500 text-white py-3 px-6 rounded-md shadow-xl cursor-pointer"
                  onClick={decrementHandler}
                >
                  Decrement
                </button>
                <button
                  type="button"
                  className="bg-cyan-500 text-white py-3 px-6 rounded-md shadow-xl cursor-pointer"
                  onClick={increaseHandler}
                >
                  Increase by 5
                </button>
                <button
                  type="button"
                  className="bg-cyan-500 text-white py-3 px-6 rounded-md shadow-xl cursor-pointer"
                  onClick={decreaseHandler}
                >
                  Decrease by 5
                </button>
              </div>
            </div>
          </>
        )}

        <hr className="my-3" />
        <div className="my-4 flex justify-center items-center">
          <button
            type="button"
            onClick={toggleCounter}
            className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white py-3 px-6 rounded-md shadow-xl cursor-pointer"
          >
            Toggle Counter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
