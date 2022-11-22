import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { get, headers, put } from '../../../../../../api';
import { BaseSetting } from '../../../../../../utils/common';
import jwt_decode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';

const ProfessionalDetail = () => {
  const disptch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let authData = auth.data;
  const [treatmentData, setTreatmentData] = useState([]);
  const [specData, setSpecData] = useState([]);
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState([]);

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
      const response = await put(
        BaseSetting.doctorApiDomain + `/${data?._id}`,
        {
          professionalDetail: {
            treatments: [inputs.category],
            specializations: [inputs.specializations],
          },
          education: [inputs.education],
        },
        headers
      );
      const result = response.data;
      console.log(result);
      if (result.status === 1) {
        alert('Succesfully Updated');
      }
    } catch (error) {
      alert('Error Updating Data');
    }
  };

  const getTreatmentData = async () => {
    try {
      const response = await get(
        BaseSetting.adminApiDomain +
          '/treatmentcategory/getAllTreatmentCategories',
        {
          'x-auth-token': authData?.token,
        }
      );
      // setApiData(response.data.data);
      const result = response.data;

      if (result.status === 1) {
        setTreatmentData(result.data);
        //console.log(result.data);
      } else {
        console.log(result);
      }
    } catch (error) {}
  };

  const getSpecData = async () => {
    try {
      const response = await get(
        BaseSetting.adminApiDomain + '/specialization/getAllSpecializations',
        {
          'x-auth-token': authData?.token,
        }
      );
      // setApiData(response.data.data);
      const result = response.data;

      if (result.status === 1) {
        setSpecData(result.data);
        //console.log(result.data);
      } else {
        console.log(result);
      }
    } catch (error) {}
  };
  // console.log(treatmentData);
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'chocolate', label: 'Chocolate' },
  // ];
  const buildObject = (arr) => {
    let arrObj = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      const { _id, name } = arr[i];
      obj = {
        value: _id,
        label: name,
      };
      arrObj.push(obj);
    }
    return arrObj;
  };

  const options = buildObject(treatmentData);
  //   const buildObject = arr => {
  //     const obj = {};
  //     for(let i = 0; i < treatmentData.length; i++){
  //        const { value, label } = arr[i];
  //        obj[value] = score;
  //     };
  //     return obj;
  //  };
  //   const options = treatmentData.map((item)=>{
  //     'value' item._id
  //   });
  return (
    <div className="text-[#626262] mt-6 px-7 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
      <div className="mt-5 text-lg font-semibold flex flex-col">
        Professional Details
      </div>
      {/* <div className="mt-5 flex flex-col">
        <div className="text-xs">Degree</div>
        <div className=" border-gray-200 border rounded-md">
          <input
            placeholder="PhD. Psychology"
            name="education"
            value={inputs.name}
            onChange={handleChange}
            className="text-xs py-3 pl-3 w-full outline-none"
          />
        </div>
      </div> */}

      <div className="mt-5 flex flex-col">
        <div className="text-xs">Treatment offered</div>
        <div className=" border-gray-200 border rounded-md">
          {/* <select
            className="text-xs py-2  pl-3 w-full outline-none "
            value={inputs.name}
            name="category"
            onChange={handleChange}
          >
            <option value={data?.professionalDetail?.treatments[0]}>
              {data?.professionalDetail?.treatments[0]}
            </option>
            {treatmentData.map((treatment) => (
              <>
                <option value={treatment._name}>{treatment.name}</option>
              </>
            ))}
          </select> */}
          <Select
            defaultValue={[options[2], options[3]]}
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Specializations</div>
        <div className=" border-gray-200 border rounded-md">
          <select
            className="text-xs py-2  pl-3 w-full outline-none "
            value={inputs.name}
            name="specializations"
            onChange={handleChange}
          >
            <option value={data?.professionalDetail?.treatments[0]}>
              {data?.professionalDetail?.specializations[0]}
            </option>
            {specData.map((spec) => (
              <>
                <option value={spec._name}>{spec.name}</option>
              </>
            ))}
          </select>
        </div>
      </div>
      {/* <div className="my-5 flex flex-col">
        <div className="text-xs">Treatment provided to</div>
        <div className="border rounded-md border-gray-200 ">
          <select className="text-xs py-3 pl-3 w-full outline-none">
            <option className="outline-none">Men</option>
            <option className="outline-none">Women</option>
            <option className="outline-none">Both</option>
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">About Your Practice</div>
        <div className=" border-gray-200 border rounded-md">
          <textarea className="h-32 py-1 pl-3 w-full outline-none"></textarea>
        </div>
      </div> */}

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
