import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { get, headers, put } from '../../../../../../api';
import { BaseSetting } from '../../../../../../utils/common';
import jwt_decode from 'jwt-decode';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
const Award = () => {
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

  let name = data?.awards?.map((item) => item.name)[0];
  let year = data?.awards?.map((item) => item.year)[0];
  const formik = useFormik({
    initialValues: {
      name: name,
      year: year,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Name must be 20 Characters or less')
        .required('Required'),
      year: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      const postUpdatedData = {
        name: values.name,
        year: values.year,
      };
      //console.log(postUpdatedData);
      //dispatch(postActions.updatePost(postUpdatedData));
      try {
        if (navigator.onLine) {
          console.log(data);
          const response = await put(
            BaseSetting.doctorApiDomain + `/${data?._id}`,
            {
              awards: postUpdatedData,
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
    <div className="text-[#626262] mt-6 px-7 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
      <div className="mt-5 text-lg font-semibold flex flex-col">Award</div>
      {[1].map((item) => (
        <>
          <div className="grid grid-cols-5 gap-1 md:gap-5 lg:gap-5 xl:gap-5 ">
            <div className="col-span-5 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
              <div className="text-xs">Awards</div>
              <div className=" border-gray-200 border rounded-md mt-1">
                <input
                  className="text-xs py-3 pl-3 w-full outline-none"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.name ? (
                <p className="text-xs text-red-600 ">{formik.errors.name}</p>
              ) : null}
            </div>
            <div className="col-span-5 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
              <div className="text-xs">Year</div>
              <div className=" border-gray-200 border rounded-md mt-1">
                <input
                  className="text-xs py-3 pl-3 w-full outline-none"
                  id="year"
                  name="year"
                  type="text"
                  placeholder="year"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.year ? (
                <p className="text-xs text-red-600 ">{formik.errors.year}</p>
              ) : null}
            </div>

            <div className=" mt-10  text-white cursor-pointer flex justify-center items-center col-span-5 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
              <div className="bg-[#ea5455] px-6 py-2 rounded-md">
                <RiDeleteBinLine className="h-5 w-5" />
              </div>
            </div>
          </div>
        </>
      ))}

      <div className="my-10 flex justify-end">
        <div
          className="cursor-pointer hover:shadow-lg bg-[#7367f0] text-white rounded-md px-5 py-1.5 mx-1"
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

export default Award;
