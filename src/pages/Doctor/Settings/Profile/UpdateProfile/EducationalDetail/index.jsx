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

const EducationalDetail = () => {
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

  const updateForm = async (education) => {
    education.map(x=> x._id && delete x._id)
    return put(
      BaseSetting.doctorApiDomain + `/${data?._id}`,
      {
        education
      },

      headers
    );
  }

  // let degree = data?.education?.map((item) => item?.degree)[0];
  // let institution = data?.education?.map((item) => item?.institution)[0];
  // let year = data?.education?.map((item) => item?.year)[0];
  const formik = useFormik({
    initialValues: {
      degree: '',
      institution: '',
      year: '',
    },
    validationSchema: Yup.object({
      degree: Yup.string()
        .max(50, 'Degree must be 10 Characters or less')
        .required('Required'),
      institution: Yup.string().required('Required'),
      year: Yup.string().required('Required'),
    }),
    onSubmit: async (values,{resetForm}) => {
      const postUpdatedData = {
        degree: values.degree,
        institution: values.institution,
        year: values.year,
      };
      //dispatch(postActions.updatePost(postUpdatedData));
      try {
        if (navigator.onLine) {
          const response = await updateForm([...data.education,postUpdatedData])
          const result = response.data;
          console.log(result);
          if (result.status == 1) {
            getData();
            resetForm();
           
           // alert('Succesfully Updated');
          }
        } else {
        }
      } catch (error) {
        console.log(error);
        alert('Error Updating Data');
      }
      getData();
    },
    
  });

  const deleteById = async (id) => {
    const index = data.education.findIndex(x => x._id == id);
    const education = data.education;
    education.splice(index, 1);
    
    try {
      if (navigator.onLine) {
        const response = await updateForm([...education])
        const result = response.data;
        console.log(result);
        if (result.status == 1) {
          getData();
        }
      } 
    } catch (error) {
      console.log(error);
      alert('Error Updating Data');
    }
  }

  return (
    <form>
      <div className="text-[#626262] mt-6 px-7 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
        <div className="mt-5 text-lg font-semibold flex flex-col">
          Educational Details
        </div>
      
          <>
            <div className="grid grid-cols-7 gap-1 md:gap-5 lg:gap-5 xl:gap-5 ">
              <div className="col-span-7 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
                <div className="text-xs">Degree</div>
                <div className=" border-gray-200 border rounded-md mt-1">
                 
                    <input
                      className="text-xs py-3 pl-3 w-full outline-none"
                      id="degree"
                      name="degree"
                      type="text"
                      placeholder="Degree"
                      value={formik.values.degree}
                      onChange={formik.handleChange}
                    />
                 
                
                </div>
                {formik.errors.degree ? (
                  <p className="text-xs text-red-600 ">
                    {formik.errors.degree}
                  </p>
                ) : null}
              </div>
              <div className="col-span-7 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
                <div className="text-xs">College/Institute</div>
                <div className=" border-gray-200 border rounded-md mt-1">
                  
                    <input
                      className="text-xs py-3 pl-3 w-full outline-none"
                      id="institution"
                      name="institution"
                      type="text"
                      placeholder="Institution"
                      value={formik.values.institution}
                      onChange={formik.handleChange}
                    />
             
                </div>
                {formik.errors.institution ? (
                  <p className="text-xs text-red-600 ">
                    {formik.errors.institution}
                  </p>
                ) : null}
              </div>
              <div className="col-span-7 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
                <div className="text-xs">Year of Completion</div>
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
              {/* <div className=" mt-10  text-white cursor-pointer flex justify-center items-center col-span-7 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                <div className="bg-[#ea5455] px-6 py-2 rounded-md">
                  <RiDeleteBinLine className="h-5 w-5" />
                </div>
              </div> */}
            </div>
        </>
        <>
        <div className="grid grid-cols-7 gap-1 md:gap-5 lg:gap-5 xl:gap-5 ">
            
            {/* <div className="text-xs">Degree</div> */}
              {data && data?.education?.map(x => {
                return (
                  <>
                    <div className="col-span-7 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
                    <div className=" border-gray-200 border rounded-md mt-1">
            <input
                      className="text-xs py-3 pl-3 w-full outline-none"
                      value={x.degree}
                      //onClick={() => setInput1(!input1)}
                        disabled
                />
                      </div>
                    </div>
                    <div className="col-span-7 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
              <div className=" border-gray-200 border rounded-md mt-1">
              <input
                      className="text-xs py-3 pl-3 w-full outline-none"
                      value={x.institution}
                      //onClick={() => setInput2(!input2)}
                      disabled
                      />
                      </div>
                    </div>
                    <div className="col-span-7 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
                    <div className=" border-gray-200 border rounded-md mt-1">
              <input
                      className="text-xs py-3 pl-3 w-full outline-none"
                      value={x.year}
                     // onClick={() => setInput3(!input3)}
                     disabled
                    />
              </div>
                    </div>
              
                  <div className=" mt-10  text-white cursor-pointer flex justify-center items-center col-span-7 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                 <div className="bg-[#ea5455] px-6 py-2 rounded-md">
                  <RiDeleteBinLine className="h-5 w-5" onClick={()=>deleteById(x._id)}/>
                 </div>
                  </div>
                  </>
                )
              })
                  }
              </div>
            
        </>
   

        <div className="my-10 flex justify-end">
          <div
            className="cursor-pointer hover:shadow-lg bg-[#7367f0] text-white rounded-md px-7 py-1.5 mx-1"
            onClick={formik.handleSubmit}
          >
            Save Changes
          </div>
          <div className="cursor-pointer hover:shadow-lg text-[#ff9f43] border border-[#ff9f43] rounded-md px-10 py-1.5 mx-1">
            Cancel
          </div>
        </div>
      </div>
    </form>
  );
};

export default EducationalDetail;
