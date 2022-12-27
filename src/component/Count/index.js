import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, penjumlahan } from "../../features/countSlice";

const Count = () => {
  const dispatch = useDispatch();
  const { angka, totalNilai } = useSelector((state) => state.counter);

  const handleCounterMinus = () => {
    dispatch(increment());
    dispatch(penjumlahan());
  }

  const handleCounterPlus = () => {
    dispatch(decrement());
    dispatch(penjumlahan());
  }

  return (
    <div>
      <h1 className="text-5xl font-semibold text-center">{angka}<span className="text-sm align-top">2</span> = {totalNilai}</h1>
      <div className="flex items-center justify-arround">
        <button
          onClick={handleCounterMinus}
          className="w-12 text-white mr-5 h-12 text-4xl mt-3 p-1 rounded-lg bg-gray-400"
        >
          -
        </button>
        <button
          onClick={handleCounterPlus}
          className="w-12 text-white ml-5 h-12 text-4xl mt-3 p-1 rounded-lg bg-green-400"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
