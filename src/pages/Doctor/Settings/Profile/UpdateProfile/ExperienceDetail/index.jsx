import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { get, headers, put } from '../../../../../../api';
import { BaseSetting } from '../../../../../../utils/common';
import jwt_decode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
const ExperienceDetail = () => {
  const auth = useSelector((state) => state.auth);
  let doctorData = auth?.data;
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      if (navigator.onLine) {
        const response = await get(
          BaseSetting.doctorApiDomain + `/getByUserId/${doctorData._id}`,
          headers
        );
        // setApiData(response.data.data);
        const result = response.data;

        if (result.status == 1) {
          setData(result.data);
          // console.log(result);
        } else {
          //console.log(result);
        }
      } else {
      }
    } catch (error) {}
  };

  let hospitalName = data?.experience?.map((item) => item.hospitalName)[0];
  let from = data?.experience?.map((item) => item.from)[0];
  let to = data?.experience?.map((item) => item.to)[0];
  let designation = data?.experience?.map((item) => item.designation)[0];
  const formik = useFormik({
    initialValues: {
      hospitalName: hospitalName,
      from: from,
      to: to,
      designation: designation,
    },
    validationSchema: Yup.object({
      hospitalName: Yup.string()
        .max(50, 'Name must be 20 Characters or less')
        .required('Required'),
      from: Yup.string().required('Required'),
      to: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      const postUpdatedData = {
        hospitalName: values.hospitalName,
        from: values.from,
        to: values.to,
        designation: values.designation,
      };
      console.log(postUpdatedData);
      //dispatch(postActions.updatePost(postUpdatedData));
      try {
        if (navigator.onLine) {
          const response = await put(
            BaseSetting.doctorApiDomain + `/${data?._id}`,
            {
              experience: postUpdatedData,
            },
            headers
          );
          const result = response.data;
          console.log(result);
          if (result.status == 1) {
            getData();
            alert('Succesfully Updated');
          }
        } else {
        }
      } catch (error) {
        alert('Error Updating Data');
      }
      getData();
    },
  });
  return (
    <div className="text-[#626262] mt-6 px-9 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
      <div className="mt-5 text-lg font-semibold flex flex-col">Experience</div>
      {[1].map((item) => (
        <>
          <div className="grid grid-cols-9 gap-1 md:gap-5 lg:gap-5 xl:gap-5 ">
            <div className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
              <div className="text-xs">Hospital Name</div>
              <div className=" border-gray-200 border rounded-md mt-1">
                <input
                  className="text-xs py-3 pl-3 w-full outline-none"
                  id="hospitalName"
                  name="hospitalName"
                  type="text"
                  placeholder="hospitalName"
                  value={formik.values.hospitalName}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.hospitalName ? (
                <p className="text-xs text-red-600 ">
                  {formik.errors.hospitalName}
                </p>
              ) : null}
            </div>
            <div className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
              <div className="text-xs">From</div>
              <div className=" border-gray-200 border rounded-md mt-1">
                <input
                  className="text-xs py-3 pl-3 w-full outline-none"
                  id="from"
                  name="from"
                  type="date"
                  placeholder="from"
                  value={formik.values.from}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.from ? (
                <p className="text-xs text-red-600 ">{formik.errors.from}</p>
              ) : null}
            </div>
            <div className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
              <div className="text-xs">To</div>
              <div className=" border-gray-200 border rounded-md mt-1">
                <input
                  className="text-xs py-3 pl-3 w-full outline-none"
                  id="to"
                  name="to"
                  type="date"
                  placeholder="to"
                  value={formik.values.to}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.to ? (
                <p className="text-xs text-red-600 ">{formik.errors.to}</p>
              ) : null}
            </div>
            <div className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
              <div className="text-xs">Designation</div>
              <div className=" border-gray-200 border rounded-md mt-1">
                <input
                  className="text-xs py-3 pl-3 w-full outline-none"
                  id="designation"
                  name="designation"
                  type="text"
                  placeholder="designation"
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.designation ? (
                <p className="text-xs text-red-600 ">
                  {formik.errors.designation}
                </p>
              ) : null}
            </div>
            <div className=" mt-10  text-white cursor-pointer flex justify-center items-center col-span-9 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
              <div className="bg-[#ea5455] px-6 py-2 rounded-md">
                <RiDeleteBinLine className="h-5 w-5" />
              </div>
            </div>
          </div>
        </>
      ))}

      <div className="my-10 flex justify-end">
        <div
          className="cursor-pointer hover:shadow-lg bg-[#7367f0] text-white rounded-md px-9 py-1.5 mx-1"
          onClick={formik.handleSubmit}
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

export default ExperienceDetail;
