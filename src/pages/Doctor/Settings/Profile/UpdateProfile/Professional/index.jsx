import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Player } from "video-react";
import { Upload, Button } from "antd";
import { BsUpload } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import Select from 'react-select';
import { getSpecializationList, getTreatmentCategories, UpdateDoctorsDetails } from '../../../../../../preseneter/DashBoard/Doctor';
import { createOptions } from '../../../../../../utils/utils';


const ProfessionalDetail = () => {
  const auth = useSelector((state) => state.auth.authData);
  const doctor = useSelector((state) => state.doctor)
  const { id, professionalDetail } = doctor;
  const [treatmentData, setTreatmentData] = useState([]);
  const [specData, setSpecData] = useState([]);
  const [videoSrc , setVideoSrc] = useState("");
  const [inputs, setInputs] = useState(professionalDetail);

  useEffect(() => {
    getTreatmentData();
    getSpecData();
  }, []);
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
    try {
      const response = await UpdateDoctorsDetails(
      id,
        {
          professionalDetail: {
            ...inputs
          }
        },
       auth.token
      );
     
      if (response) {
        alert('Succesfully Updated');
      } else {
        alert('Error Updating Data');
      }
    } catch (error) {
      alert('Error Updating Data');
    }
  };

  const handleVideoChange = ({file}) => {
      var reader = new FileReader();
      console.log(file);
      var url = URL.createObjectURL(file.originFileObj);
      setVideoSrc(url);
  };

  const getTreatmentData = async () => {
    try {
      const response = await getTreatmentCategories(auth.token);
      
      const result = response.data;
      if (result.status === 1) {
        setTreatmentData(createOptions(result.data.map(x=>x.name) ));
      } else {
        console.log(result);
      }
    } catch (error) {}
  };

  const getSpecData = async () => {
    try {
      const response = await getSpecializationList(auth.token)
      const result = response.data;
      if (result.status === 1) {
        setSpecData(createOptions(result.data.map(x=>x.name)));
      } 
    } catch (error) {}
  };
  

  return (
    <div className="text-[#626262] mt-6 px-7 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
      <div className="mt-5 text-lg font-semibold flex flex-col">
        Professional Details
      </div>
      <div className="mt-5 flex flex-col">
            <div className="text-xs">Degree</div>
            <div className=" border-gray-200 border rounded-md">
              <input
                name="degree"
                value={inputs?.degree }
                defaultValue={doctor?.degree}
                onChange={handleChange}
                className="py-1 pl-3 w-full outline-none"
              />
            </div>
          </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Treatment offered</div>
        <div className=" border-gray-200 border rounded-md">
          <Select
          value={createOptions(inputs?.treatments)}
          defaultValue={createOptions(doctor?.treatments)}
            isMulti
            name="treatments"
            options={treatmentData}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setInputs((values) => ({ ...values, treatments: e.map(s=>s.value) }))}
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Specializations</div>
        <div className=" border-gray-200 border rounded-md">
          <Select
            value={createOptions(inputs?.specializations)}
            defaultValue={createOptions(doctor?.specializations)}
            name="specializations"
            isMulti
            options={specData}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setInputs((values) => ({ ...values, specializations: e.map(s=>s.value) }))}

          />
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Treatment provided to</div>
        <div className="border rounded-md border-gray-200 ">
          <select className="text-xs py-3 pl-3 w-full outline-none" name="treatmentRendered" 
          value={inputs?.treatmentRendered } 
          defaultValue={doctor?.treatmentRendered}
          onChange={handleChange}>
            <option className="outline-none">Men</option>
            <option className="outline-none">Women</option>
            <option className="outline-none">Both men and women</option>
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Fee Charge</div>
        <div className=" border-gray-200 border rounded-md">
          <input
            name="feeCharge"
            value={inputs?.feeCharge}
            defaultValue={doctor?.feeCharge}
            onChange={handleChange}
            className="py-1 pl-3 w-full outline-none"
            type="number"
            max="5000"
          />
        </div>
      </div>
      <div className="my-5 flex flex-col">
        <div className="text-xs">Session Duration (in mins)</div>
        <div className="border rounded-md border-gray-200 ">
          <select
            value={inputs?.sessionDuration}
            defaultValue={doctor?.sessionDuration}
            name="sessionDuration"
            onChange={handleChange}
            className="py-1.5 pl-3 w-full outline-none"
          >
            <option className="outline-none">15</option>
            <option className="outline-none">30</option>
            <option className="outline-none">45</option>
            <option className="outline-none">60</option>
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">About Your Practice</div>
        <div className=" border-gray-200 border rounded-md">
          <textarea className="h-32 py-1 pl-3 w-full outline-none" name="about" 
          value={inputs?.about } 
          defaultValue={doctor?.about} 
          onChange={handleChange} />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
          <div className="flex justify-center">
            {/* <Player
                  playsInline
                  src={inputs?.videoSrc}
                  fluid={false}
                  width={480}
                  height={272}
              /> */}
          </div>
          <div className="mx-32 sm:mx-52 md:mx-16  mt-5 border-1 border-transparent border-t-gray-500"></div>
          <div className="my-4 flex ml-14">
            <embed src="" />
            <div className="cursor-pointer hover:bg-opacity-10 px-5 py-3 rounded-md">
              <Upload className="mt-3 mb-3"
                    accept=".mp4"
                    // action="https://www.qurex.io/v2/api"
                    action=""
                    listType="picture"
                    maxCount={1}
                    onChange={handleVideoChange}>
                    <Button>
                       <BsUpload className="h-5 w-5 " /><br/>
                       Upload Video
                    </Button>
                </Upload>
            </div>
            <Button className="mt-4">
                <AiOutlineDelete className="h-5" /><br/>
            </Button>
          </div>
        </div>

      <div className="my-10 flex justify-end">
        <div
          className="cursor-pointer hover:shadow-lg bg-[#7367f0] text-white rounded-md px-7 py-1.5 mx-1"
          onClick={(e) => handleUpdate(e)}
        >
          Save Changes
        </div>
        <div className="cursor-pointer hover:shadow-lg text-[#ff9f43] border border-[#ff9f43] rounded-md px-10 py-1.5 mx-1">
          Cancel
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;
