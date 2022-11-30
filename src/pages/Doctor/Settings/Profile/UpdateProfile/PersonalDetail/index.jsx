import React from 'react'
import { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { ProfileUpdate } from '../../../../../../preseneter/DashBoard/Profile';

const PersonalDetail = () => {
 
  const auth = useSelector((state) => state.auth.authData);
  const [inputs, setInputs] = useState({});
  const [loader, setLoader] = useState(false);
  const {user} = auth
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateData();
  };
  const updateData = async () => {
    setLoader(true)
    try {
     
    await ProfileUpdate(user.id,inputs,auth.token)
    } catch (error) {
      alert('Error Updating Data');
    }
    setLoader(false)
  };
  return (
    <form>
      <div className="text-[#626262] grid grid-cols-3 gap-5 mt-10">
        <div className="col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col">
          <div className="flex justify-center">
            <img className="rounded-xl" src={user.profilePic} alt="" />
          </div>
          <div className="mx-32 sm:mx-52 md:mx-16  mt-5 border-4 border-transparent border-t-gray-500"></div>
          <div className="my-4 flex justify-center">
            <div className="hover:bg-[#7468ef] cursor-pointer hover:bg-opacity-10 px-5 py-3 border border-[#7468ef] rounded-md">
              <BsUpload className="h-5 w-5 " />
            </div>
          </div>
        </div>
        <div className="px-7 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
          {/* <div className="flex flex-col">
            <div className="text-xs">Salutations</div>
            <div className="border rounded-md border-gray-200 ">
              <select
                value={inputs.value || ''}
                name="salutations"
                onChange={handleChange}
                className="py-1.5 pl-3 w-full outline-none"
              >
                <option className="outline-none" value="Ms.">
                  Mr.
                </option>
                <option className="outline-none" value="Dr.">
                  Dr.
                </option>
                <option className="outline-none" value="Mr.">
                  Ms.
                </option>
                <option className="outline-none" value="Mrs.">
                  Mrs.
                </option>
              </select>
            </div>
          </div> */}
          <div className="mt-5 flex flex-col">
            <div className="text-xs">Full Name</div>
            <div className=" border-gray-200 border rounded-md">
              <input
                name="name"
                value={inputs.name || user?.name}
                onChange={handleChange}
                className="py-1 pl-3 w-full outline-none"
              />
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <div className="text-xs">E-mail</div>
            <div className=" border-gray-200 border rounded-md">
              <input
                name="email"
                value={inputs.email || user?.email}
                onChange={handleChange}
                className="py-1 pl-3 w-full outline-none"
              />
            </div>
          </div>
          {/* <div className="mt-5 flex flex-col">
            <div className="text-xs">languages you know</div>
            <div className=" border-gray-200 border rounded-md">
              <input
                name="languages"
                value={
                  inputs.languages ||
                  user?.languages?.map((item) => <>{item},</>)
                }
                onChange={handleChange}
                className="py-1 pl-3 w-full outline-none"
              />
            </div>
          </div> */}
          <div className="my-5 flex flex-col">
            <div className="text-xs">City</div>
            <div className="border rounded-md border-gray-200 ">
              <select
                value={inputs.name || user?.city}
                name="city"
                onChange={handleChange}
                className="py-1.5 pl-3 w-full outline-none"
              >
                <option className="outline-none">{user?.city}</option>
                <option className="outline-none">Banglore</option>
                <option className="outline-none">Delhi</option>
                <option className="outline-none">Gurgaon</option>
              </select>
            </div>
          </div>
          <div className="mb-10 flex justify-end">
            <div
              className="cursor-pointer hover:shadow-lg bg-[#7367f0] text-white rounded-md px-7 py-1.5 mx-1"
              onClick={(e) => handleUpdate(e)}
            >
              {loader ? <span className="buttonloader"></span> : 'Save Changes'}
            </div>
            <div className="cursor-pointer hover:shadow-lg text-[#ff9f43] border border-[#ff9f43] rounded-md px-10 py-1.5 mx-1">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalDetail;
