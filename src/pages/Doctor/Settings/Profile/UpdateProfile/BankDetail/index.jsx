import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { UpdateDoctorsDetails } from '../../../../../../preseneter/DashBoard/Doctor';


const BankDetail = () => {
  const auth = useSelector((state) => state.auth.authData);
  const doctor = useSelector((state) => state.doctor)
  const { id, bankDetail } = doctor;
  const [inputs, setInputs] = useState(bankDetail);

  useEffect(() => {
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
          bankDetail: {
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
  

  return (
    <div className="text-[#626262] mt-6 px-7 col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col">
      <div className="mt-5 text-lg font-semibold flex flex-col">
        Bank Details
      </div>
      <div className="mt-5 flex flex-col">
        <div className="text-xs">Bank Name</div>
        <div className=" border-gray-200 border rounded-md">
          <input
            name="bankName"
            value={inputs?.bankName }
            onChange={handleChange}
            className="py-1 pl-3 w-full outline-none"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <div className="text-xs">Account Name</div>
        <div className=" border-gray-200 border rounded-md">
          <input
            name="degree"
            value={inputs?.accountName}
            onChange={handleChange}
            className="py-1 pl-3 w-full outline-none"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <div className="text-xs">Bank Account No.</div>
        <div className=" border-gray-200 border rounded-md">
          <input
            name="degree"
            value={inputs?.accountNumber}
            onChange={handleChange}
            className="py-1 pl-3 w-full outline-none"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <div className="text-xs">Bank IFSC Code</div>
        <div className=" border-gray-200 border rounded-md">
          <input
            name="degree"
            value={inputs?.ifsc}
            onChange={handleChange}
            className="py-1 pl-3 w-full outline-none"
          />
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

export default BankDetail;
