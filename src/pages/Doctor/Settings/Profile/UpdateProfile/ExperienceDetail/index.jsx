import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { UpdateDoctorsDetails } from '../../../../../../preseneter/DashBoard/Doctor';
import moment from 'moment';
const ExperienceDetail = () => {
  const auth = useSelector((state) => state.auth.authData);
  const doctor  = useSelector((state) => state.doctor);
  const {experience:experienceData,id} = doctor


  const updateData = async (experience) => {
    experience.map(x=> x._id && delete x._id)
    return await UpdateDoctorsDetails(id,{experience},auth.token)
  }
  const deleteExpirience = async(id) => {
    const index = experienceData.findIndex(x => x._id == id);
    const experience = experienceData;
    experience.splice(index, 1);
    try {
      if (navigator.onLine) {
        const response = await updateData(experience)
        if (!response) {
          alert('Error Updating Data');
        }
      } 
    } catch (error) {
      alert('Error Updating Data');
    }
  }
  
  const formik = useFormik({
    initialValues: {
      hospitalName: '',
      from: '',
      to: '',
      designation: '',
    },
    validationSchema: Yup.object({
      hospitalName: Yup.string()
        .max(50, 'Name must be 20 Characters or less')
        .required('Required'),
      from: Yup.string().required('Required'),
      to: Yup.string().required('Required'),
    }),
    onSubmit: async (values,{resetForm}) => {
      const postUpdatedData = {
        hospitalName: values.hospitalName,
        from: values.from,
        to: values.to,
        designation: values.designation,
      };
      try {
        if (navigator.onLine) {
          const response = await updateData([...experienceData, postUpdatedData])
          if (response) {
            resetForm();
          } else {
            alert('Error Updating Data');
          }
        } 
      } catch (error) {
        alert('Error Updating Data');
      }
    },
  });
  const experinceUI =  experienceData?.map(x => {
    return (
      <>
        <div className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
    
    <div className=" border-gray-200 border rounded-md mt-1">
      <input
        className="text-xs py-3 pl-3 w-full outline-none"
        id="hospitalName"
        name="hospitalName"
        type="text"
        placeholder="hospitalName"
        defaultValue={x.hospitalName}
        disabled
      />
    </div>
   
  </div>
  <div className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
   
    <div className=" border-gray-200 border rounded-md mt-1">
      <input
        className="text-xs py-3 pl-3 w-full outline-none"
        id="from"
        name="from"
        type="text"
        value={moment(x.from).format('YYYY')}
        disabled
      />
    </div>
   
  </div>
  <div className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
   
    <div className=" border-gray-200 border rounded-md mt-1">
      <input
        className="text-xs py-3 pl-3 w-full outline-none"
        id="to"
        name="to"
        type="text"
        placeholder="to"
        value={moment(x.to).format('YYYY')}
        disabled
      />
    </div>
   
  </div>
  <div className="col-span-9 md:col-span-2 lg:col-span-2 xl:col-span-2  mt-5 flex flex-col">
    
    <div className=" border-gray-200 border rounded-md mt-1">
      <input
        className="text-xs py-3 pl-3 w-full outline-none"
        id="designation"
        name="designation"
        type="text"
        placeholder="designation"
        value={x.designation}
        disabled
      />
    </div>
   
        </div>
        <div className=" mt-10  text-white cursor-pointer flex justify-center items-center col-span-9 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
    <div className="bg-[#ea5455] px-6 py-2 rounded-md" onClick={()=> deleteExpirience(x._id)}>
      <RiDeleteBinLine className="h-5 w-5" />
    </div>
  </div>
      </>
    )
  })
  return (
    <div className="text-[#626262] mt-6 px-9 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
      <div className="mt-5 text-lg font-semibold flex flex-col">Experience</div>
     
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
                  type="month"
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
                  type="month"
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
          
          {
           experinceUI
          }
            
          </div>
        </>
    

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
