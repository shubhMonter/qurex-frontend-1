import React from 'react';

const AccountDetail = () => {
  return (
    <div className="text-[#626262] mt-6 px-7 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
      <div className="mt-5 text-lg font-semibold flex flex-col">
        Account Details
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Degree</div>
        <div className=" border-gray-200 border rounded-md">
          <input
            placeholder="PhD. Psychology"
            className="text-xs py-3 pl-3 w-full outline-none"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Treatment offered</div>
        <div className=" border-gray-200 border rounded-md">
          <input
            placeholder="PhD. Psychology"
            className="text-xs py-3 pl-3 w-full outline-none"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Specializations</div>
        <div className=" border-gray-200 border rounded-md">
          <input
            placeholder="PhD. Psychology"
            className="text-xs py-3 pl-3 w-full outline-none"
          />
        </div>
      </div>
      <div className="my-5 flex flex-col">
        <div className="text-xs">Treatment provided to</div>
        <div className="border rounded-md border-gray-200 ">
          <select className="text-xs py-3  pl-3 w-full outline-none">
            <option className="outline-none">Men</option>
            <option className="outline-none">Women</option>
            <option className="outline-none">Both</option>
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">About Your Practice</div>
        <div className=" border-gray-200 border rounded-md">
          <input className="text-xs py-3 pl-3 w-full outline-none" />
        </div>
      </div>

      <div className="my-10 flex justify-end">
        <div className="cursor-pointer hover:shadow-lg bg-[#7367f0] text-white rounded-md px-7 py-1.5 mx-1">
          Save Changes
        </div>
        <div className="cursor-pointer hover:shadow-lg text-[#ff9f43] border border-[#ff9f43] rounded-md px-10 py-1.5 mx-1">
          Cancel
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
