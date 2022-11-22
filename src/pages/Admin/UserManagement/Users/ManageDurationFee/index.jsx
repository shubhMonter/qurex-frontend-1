import { useState } from 'react';

const ManageDurationFee = () => {
  const [duration, setDuration] = useState(0);
  const [fee, setFee] = useState(0);
  return (
    <div className="font-montserrat flex flex-col px-10">
      <div className="py-6 font-semibold text-2xl text-[#636363]">
        Duration & Fee
      </div>
      <div className="pl-4 py-8 sm:p-8 md:p-8 lg:p-8 xl:p-8 flex flex-col  shadow-lg rounded-lg bg-white">
        <div className="text-[#2c2c2c] text-sm font-semibold">
          Please set the duration and fees for each consultation that you
          provide.
        </div>
        <div className="text-[#2c2c2c] text-xs font-medium mt-7 grid grid-cols-3">
          <div className="flex flex-col">
            <div>Slot Duration (Minutes)</div>
            <div className="mt-2 flex flex-row">
              <button
                className="bg-[#7367f0] rounded-md w-6 h-6 mt-[2px] items-center flex justify-center text-white text-lg font-bold translate-x-2 cursor-pointer"
                onClick={(e) => setDuration(duration - 1)}
              >
                -
              </button>
              <div className="">
                <input
                  type="number"
                  className="bg-[#f8f8f8] pl-6 outline-none font-bold w-20 py-1.5 rounded-md"
                  onChange={(e) => setDuration(e.target.value)}
                  value={duration}
                />
              </div>
              <button
                className="bg-[#7367f0] rounded-md w-6 h-6 mt-[2px] items-center flex justify-center text-white text-lg font-bold -translate-x-3 cursor-pointer"
                onClick={(e) => setDuration(duration + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div>Consulting Fee (₹)</div>
            <div className="mt-2 flex flex-row">
              <button
                className="bg-[#7367f0] rounded-md w-6 h-6 mt-[2px] items-center flex justify-center text-white text-lg font-bold translate-x-2 cursor-pointer"
                onClick={(e) => setFee(fee - 1)}
              >
                -
              </button>
              <div>
                <input
                  type="number"
                  className="bg-[#f8f8f8] pl-6 outline-none font-bold w-20 py-1.5 rounded-md"
                  onChange={(e) => setFee(e.target.value)}
                  value={fee}
                />
              </div>
              <button
                className="bg-[#7367f0] rounded-md w-6 h-6 mt-[2px] items-center flex justify-center text-white text-lg font-bold -translate-x-3 cursor-pointer z-10"
                onClick={(e) => setFee(fee + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-2">
            <div className="bg-[#7367f0] cursor-pointer w-24 text-sm font-medium rounded-md  flex justify-center py-3 text-white">
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDurationFee;
