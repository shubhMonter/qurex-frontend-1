import React, { useEffect } from 'react'
import { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { ProfileUpdate } from '../../../../../../preseneter/DashBoard/Profile';
import loaderGIF from "../../../../../../assets/loader.gif";
import UserAPI from "../../../../../../api/UserAPI";
import doctorAPI from "../../../../../../api/doctorAPI"
import languages from '../../../../../../constants/langauges';
import Select from 'react-select';
import { createOptions } from '../../../../../../utils/utils';
import { Player } from "video-react";
import { Upload, Button } from "antd";

const PersonalDetail = () => {
 
  const auth = useSelector((state) => state.auth.authData);
  const [inputs, setInputs] = useState();
  const [user,setUser]= useState();
  const [cityList, setCityList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [imageSrc , setImageSrc] = useState("");
  // const {user} = auth
  let allCities = [];

  useEffect(()=>{
    userData(auth.user.id);
    cityData();
  },[]);

  

  const cityData = async ()=>{
    try {
        const cityResponse = await doctorAPI.getAllCities();
        if(cityResponse){
          allCities = cityResponse.map(item => {
            return item.name;
          });
          setCityList(allCities);
        }
    } catch (error) {
      console.log(error);
    }
   
  };


  const userData = async(id)=>{
    try {
      setLoader(true);
        const response = await UserAPI.getByUserId(id);
        if(response){
          setUser(response.userId)
        }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  const handleChange = (e) => {
    setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleImageChange = ({file}) => {
    var url = URL.createObjectURL(file.originFileObj);
     setImageSrc(url);
     let reader = new FileReader();
     reader.readAsDataURL(file.originFileObj);
     reader.onloadend = function() {
         setInputs((values) => ({ ...values, profilePic: reader.result }));
     }
     
};

  const handleUpdate = (e) => {
    e.preventDefault();
    updateData();
  };
  const updateData = async () => {
    setLoader(true)
    try {
     
    const userUpdate = await ProfileUpdate(auth.user.id,inputs,auth.token)
    if(userUpdate){
      setUser((values)=>({...values,userUpdate}));
    }
    } catch (error) {
      alert('Error Updating Data');
    }
    setLoader(false);
  };
  console.log(user);
  return (

    <form>
      {loader ? <div className="losup"><img className="block m-auto" src={loaderGIF}/></div>:
      <div className="text-[#626262] grid grid-cols-3 gap-5 mt-10">
        <div className="col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col">
          <div className="flex justify-center">
            <img className="rounded-xl ml-7" src={inputs?.profilePic ?  inputs?.profilePic : user?.proficePic} alt="" />
          </div>
          <div className="mx-32 sm:mx-52 md:mx-16  mt-5 border-4 border-transparent border-t-gray-500"></div>
          <div className="my-4 flex ml-14">
            <div className="cursor-pointer hover:bg-opacity-10 px-5 py-3 rounded-md">
              <Upload className="mt-3 mb-3"
                    accept=".jpg"
                    // action="https://www.qurex.io/v2/api"
                    action=""
                    listType="picture"
                    maxCount={1}
                    onChange={handleImageChange}>
                    <Button>
                       <BsUpload className="h-5 w-5 " /><br/>
                       Upload Photo
                    </Button>
                </Upload>
            </div>
          </div>
        </div>
        <div className="px-7 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
          <div className="flex flex-col">
            <div className="text-xs">Salutations</div>
            <div className="border rounded-md border-gray-200 ">
              <select
                value={inputs?.salutation}
                defaultValue={user?.salutation}
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
                defaultValue={user?.name}
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
                defaultValue={user?.email}
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
                value={createOptions(inputs?.languages)}
                defaultValue={createOptions(user?.languages)}
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
            <div className="text-xs">Gender</div>
            <div className="border rounded-md border-gray-200 ">
              <select
                value={inputs?.gender}
                defaultValue={user?.gender}
                name="gender"
                onChange={handleChange}
                className="py-1.5 pl-3 w-full outline-none"
              >
                <option className="outline-none">Male</option>
                <option className="outline-none">Female</option>
                <option className="outline-none">Other</option>
              </select>
            </div>
          </div>
          
          <div className="mb-5 flex flex-col">
            <div className="text-xs">City</div>
            <div className="border rounded-md border-gray-200 ">
              <select
                value={inputs?.city}
                defaultValue={user?.city}
                name="city"
                onChange={handleChange}
                className="py-1.5 pl-3 w-full outline-none"
              >
                {cityList?.map((cityVal) => (
                  <option className="outline-none">{cityVal}</option>
                ))}

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
