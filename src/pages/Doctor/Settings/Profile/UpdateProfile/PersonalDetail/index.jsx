import React, { useEffect } from 'react'
import { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { ProfileUpdate } from '../../../../../../preseneter/DashBoard/Profile';
import loaderGIF from "../../../../../../assets/loader.gif"
import UserAPI from "../../../../../../api/UserAPI"
import languages from '../../../../../../constants/langauges';
import Select from 'react-select';
import { createOptions } from '../../../../../../utils/utils';
const PersonalDetail = () => {
 
  const auth = useSelector((state) => state.auth.authData);
  const [inputs, setInputs] = useState();
  const [loader, setLoader] = useState(false);
  
  // const {user} = auth
  
  useEffect(()=>{
    userData(auth.user.id);
  },[])
  const userData = async(id)=>{
    try {
      setLoader(true)
        const response = await UserAPI.getByUserId(id)
        if(response){
          setInputs(response.userId)
        }
    } catch (error) {
      
    }
    setLoader(false)
  }

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
     
    const user = await ProfileUpdate(auth.user.id,inputs,auth.token)
    if(user){
      setInputs((values)=>({...values,user}));
    }
    } catch (error) {
      alert('Error Updating Data');
    }
    setLoader(false)
  };
  console.log({inputs});
  return (

    <form>
      {loader ? <div className="losup"><img className="block m-auto" src={loaderGIF}/></div>:
      <div className="text-[#626262] grid grid-cols-3 gap-5 mt-10">
        <div className="col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col">
          <div className="flex justify-center">
            <img className="rounded-xl" src={inputs?.profilePic} alt="" />
          </div>
          <div className="mx-32 sm:mx-52 md:mx-16  mt-5 border-4 border-transparent border-t-gray-500"></div>
          <div className="my-4 flex justify-center">
            <div className="hover:bg-[#7468ef] cursor-pointer hover:bg-opacity-10 px-5 py-3 border border-[#7468ef] rounded-md">
              <BsUpload className="h-5 w-5 " />
            </div>
          </div>
        </div>
        <div className="px-7 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
          <div className="flex flex-col">
            <div className="text-xs">Salutations</div>
            <div className="border rounded-md border-gray-200 ">
              <select
                value={inputs?.salutation}
                name="salutation"
                onChange={handleChange}
                className="py-1.5 pl-3 w-full outline-none"
              >

                {/* <option className="outline-none" >
                  {user.salutations}
                </option> */}
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
          </div>
          <div className="mt-5 flex flex-col">
            <div className="text-xs">Full Name</div>
            <div className=" border-gray-200 border rounded-md">
              <input
                name="name"
                value={inputs?.name }
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
                value={inputs?.email }
                onChange={handleChange}
                className="py-1 pl-3 w-full outline-none"
              />
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <div className="text-xs">languages you know</div>
            <div className=" border-gray-200 border rounded-md">
              {/* <input
                name="languages"
                isMulti
                value={
                  
                  inputs?.languages?.map((item) => <>{item},</>)
                }
                onChange={handleChange}
                className="py-1 pl-3 w-full outline-none"
              /> */}
               <Select
                value={inputs?.languages?.map(x=>{return {label:x,value:x}}) || inputs?.languages?.map(x=>{return {label:x,value:x}})}
                isMulti
                name="languages"
                options={createOptions(languages)}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => setInputs((values) => ({ ...values, languages: e.map(s=>s.value) }))}
                closeMenuOnSelect={false}
          />
            </div>
          </div>
          <div className="my-5 flex flex-col">
            <div className="text-xs">City</div>
            <div className="border rounded-md border-gray-200 ">
              <select
                value={inputs?.city}
                name="city"
                onChange={handleChange}
                className="py-1.5 pl-3 w-full outline-none"
              >
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
      </div>}
    </form>
  );
};

export default PersonalDetail;
