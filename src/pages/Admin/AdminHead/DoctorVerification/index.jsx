import React, { useEffect,useState } from 'react';
import DataTable from 'react-data-table-component';
import loader from '../../../../assets/loader.gif';
import doctorApi from '../../../../api/doctorAPI';
import { Navigate } from 'react-router';
import { BsClipboardCheck } from 'react-icons/bs';
import { get, headers, post, put } from '../../../../api';
import { BaseSetting } from '../../../../utils/common';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

const DoctorVerification = () => {
  const [allDoctorData, setAllDoctorData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showLoader,setShowLoader] = useState(false);
  const [showLoader2,setShowLoader2] = useState(false);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f8f8f8',
      },
    },
  };

  const getAllDoctors = async() => { 
    
    setShowLoader(true);
    let response = await doctorApi.getAllDoctors();
    console.log("all doctors..");
    console.log(response);
    setAllDoctorData(response);
    setFilteredItems(response);
    setShowLoader(false);
  };

  const verifyDoctor = async (id) => {
    try {
      if (navigator.onLine) {
        document.getElementsByClassName(id)[0].style.display = "block";
        document.getElementsByClassName(id)[1].style.display = "none";
        await axios
          .put(
            BaseSetting.doctorApiDomain +
              `/verify/${id}`,
              { verified: true }
          )
          .then((res) => {
            console.log(res);
            getAllDoctors();
            document.getElementsByClassName(id)[0].style.display = "none";
            document.getElementsByClassName(id)[1].style.display = "block";
          });
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDoctors();    
  }, []);

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.userId.name,
    },
    {
      name: 'City',
      selector: (row) => row.userId.city,
    },
    {
      name: 'Degree',
      selector: (row) => row.professionalDetail.degree,
    },
    {
      name: 'Fee Charge',
      selector: (row) => row.feeCharge,
    },
    {
      name: 'Contact',
      selector: (row) => row.userId.mobile,
    },
    {
      name: 'Actions',
      selector: (row) => (
        <>
        <div className={`${row._id} hidden`}><img className="block m-auto w-4" src={loader}/></div>
        <div className={row._id}>
          {
          row.verified ?
          <span className='text-green-800 font-bold flex'><BsClipboardCheck />&nbsp; Verified</span> :
          <span onClick={() => verifyDoctor(row._id)} className='btn btn-primary text-sm font-bold pl-5 pr-5'>Verify</span> 
          }
        </div>
        </>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: 'Beetlejuice',
      degree: '1988',
      actions: 'AAA',
    },
    {
      id: 2,
      name: 'Ghostbusters',
      degree: '1984',
      actions: 'BBB',
    },
  ];

  
  const verifyDocData = async (optionVal) =>
  {
    console.log(optionVal);
    let newDocs = allDoctorData;
    document.getElementById("input-group-dropdown-1").textContent = optionVal;
    if(optionVal != "Both")
    {
      var isVerified = (optionVal === "true");
      document.getElementById("input-group-dropdown-1").textContent = isVerified ? "Verified" : "Not Verified";
      newDocs = allDoctorData.filter((item) => {
        return item.verified == isVerified;
      });
    }
    setFilteredItems(newDocs);
  };


  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <div className="flex flex-row float-right">
        <InputGroup className="mb-3">
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" title="Select status" id="input-group-dropdown-1">
                Select Status
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="button" onClick={() => verifyDocData("true")} href="#">Verified</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={() => verifyDocData("false")} href="#">Not Verified</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={() => verifyDocData("Both")} href="#">Both</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        </InputGroup>
      </div>
    );
  });

  return (
    <div>
    <div className="flex flex-col px-10 font-montserrat">
      <div className="py-6 font-semibold text-2xl text-[#636363]">
        Doctor Verification
      </div>
      <div className="pb-6 font-semibold text-sm text-[#636363]">
        Instructions:
      </div>
      <div className="mb-4 ">
        <ol className="pl-10 list-decimal font-medium drop-shadow-xs text-[14px] text-[#626262]">
          <li>
            Please ensure that the uploaded degree image is clear, and is from a
            recognized institution.
          </li>
          <li>
            If IMR Registration details are provided, please verify them from
            Indian Medical Registry database.
          </li>
          <li>
            Be diligent and careful while approving, as millions of patients
            trust our doctors and services.
          </li>
        </ol>
      </div>
      <div className="p-1 bg-white rounded-lg shadow-lg">
      {showLoader? 
        <div><img className="block m-auto" src={loader}/></div> :
        <DataTable
          title=""
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          customStyles={customStyles}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        />
      }
      </div>
    </div>
  </div>
  );
};

export default DoctorVerification;
