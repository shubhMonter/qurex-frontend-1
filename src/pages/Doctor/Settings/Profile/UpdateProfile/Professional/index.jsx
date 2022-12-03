import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { getSpecializationList, getTreatmentCategories, UpdateDoctorsDetails } from '../../../../../../preseneter/DashBoard/Doctor';
import { createOptions } from '../../../../../../utils/utils';


const ProfessionalDetail = () => {
  const auth = useSelector((state) => state.auth.authData);
  const doctor = useSelector((state) => state.doctor)
  const { id, professionalDetail } = doctor;
  const [treatmentData, setTreatmentData] = useState([]);
  const [specData, setSpecData] = useState([]);
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
                onChange={handleChange}
                className="py-1 pl-3 w-full outline-none"
              />
            </div>
          </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Treatment offered</div>
        <div className=" border-gray-200 border rounded-md">
          <Select
          value={createOptions(inputs?.treatments) || createOptions(doctor?.treatments) }
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
            value={createOptions(inputs?.specializations) || createOptions(doctor?.specializations)  }
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
          <select className="text-xs py-3 pl-3 w-full outline-none" name="treatmentRendered" value={inputs?.treatmentRendered } onChange={handleChange}>
            <option className="outline-none">Men</option>
            <option className="outline-none">Women</option>
            <option className="outline-none">Both men and women</option>
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">About Your Practice</div>
        <div className=" border-gray-200 border rounded-md">
          <textarea className="h-32 py-1 pl-3 w-full outline-none" name="about" value={inputs?.about } onChange={handleChange} />
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
