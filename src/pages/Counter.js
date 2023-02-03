import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounter = () => {
    dispatch({ type: "toggle" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", payload: 5 });
  };

  const descreaseHandler = () => {
    dispatch({ type: "decrease", payload: 5 });
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
                  onClick={descreaseHandler}
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
