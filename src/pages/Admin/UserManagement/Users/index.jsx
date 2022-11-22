import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import ManageUser from './Manage';
import ManageDurationFee from './ManageDurationFee';
import {
  AiFillDelete,
  AiOutlineEye,
  AiOutlineDelete,
  AiOutlinePlus,
} from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { get, headers } from '../../../../api';
import { BaseSetting } from '../../../../utils/common';
const Users = () => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  //const [data, setData] = useState([]);
  //const [pending, setPending] = React.useState(true);
  let navigate = useNavigate();
  const manageUser = (id) => {
    navigate('/manage-user/' + id);
  };
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f8f8f8',
      },
    },
  };

  const columns = [
    {
      name: 'Sno.',
      selector: (row) => row.id,

      sortable: true,
    },
    {
      name: 'User Id',
      selector: (row) => row.userid,
    },
    {
      name: 'User Name',
      selector: (row) => row.name,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Phone Number',
      selector: (row) => row.phoneno,
    },
    {
      name: 'Date of Joning',
      selector: (row) => row.doj,
    },
    {
      name: 'Actions',
      selector: (row) => (
        <div className="py-3 flex flex-row">
          <div className="cursor-pointer hover:bg-[#7367f0] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#7367f0] border border-[#7367f0]">
            <AiOutlineEye onClick={() => manageUser(row.id)} />
          </div>
          <div className="ml-3 cursor-pointer hover:bg-[#ef8889] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#ef8889] border border-[#ef8889]">
            <AiOutlineDelete />
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      userid: '1',
      name: 'Amir Sohail',
      email: 'amir.sohail@qurex.ai',
      phoneno: '8058837333',
      doj: '21-07-2022',
      role: 'ADMIN',
    },
    {
      id: 2,
      userid: '2',
      name: 'Prashant Joshi',
      email: 'prashant@qurex.ai',
      phoneno: '7483187084',
      doj: '21-07-2022',
      role: 'ADMIN',
    },
    {
      id: 3,
      userid: '3',
      name: 'Anita Shyam',
      email: 'ahukumchand@yahoo.com',
      phoneno: '7416345577',
      doj: '21-07-2022',
      role: 'DOCTOR',
    },
    {
      id: 4,
      userid: '4',
      name: 'kapil',
      email: 'KAPSMITT@GMAIL.COM',
      phoneno: '9899856634',
      doj: '21-07-2022',
      role: 'CUSTOMER',
    },
    {
      id: 5,
      userid: '5',
      name: 'kapil',
      email: 'KAPSMITT@GMAIL.COM',
      phoneno: '9899856634',
      doj: '21-07-2022',
      role: 'BUSINESS OWNER',
    },
    {
      id: 6,
      userid: '6',
      name: 'Nisha',
      email: 'nisha.rajput@qurex.ai',
      phoneno: '9717550017',
      doj: '21-07-2022',
      role: 'CUSTOMER SUPPORT',
    },
    {
      id: 7,
      userid: '7',
      name: 'Mad Result',
      email: 'support@madresult.com',
      phoneno: '9717550017',
      doj: '21-07-2022',
      role: 'MARKETING MANAGER',
    },
  ];

  // useEffect(() => {
  //   getUsers()
  //   // apiData.map((item) => console.log(item._id));
  // }, []);

  // const getUsers = async () => {
  //   try {
  //     if (navigator.onLine) {
  //       const response = await get(
  //         BaseSetting.adminApiDomain + '/user/getAllUsers',
  //         headers
  //       );
  //       // setApiData(response.data.data);
  //       const result = response.data.data.map(
  //         ({ active, gender, createdAt, updatedAt, __v, ...rest }) => ({
  //           ...rest,
  //         })
  //       );
  //       const filteredItems = result.filter(
  //         (item) =>
  //           item.name &&
  //           item.name.toLowerCase().includes(filterText.toLowerCase())
  //       );
  //       setData(filteredItems);
  //       setPending(false);
  //     } else {
  //     }
  //   } catch (error) {}
  // };

  const filteredItems = data.filter(
    (item) =>
      (item.name &&
        item.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.role && item.role.toLowerCase().includes(filterText.toLowerCase()))
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <div className="flex flex-row">
        <div className=" pr-1 font-montserrat text-gray-400 font-normal text-[12px]">
          Search:
        </div>
        <input
          className="border px-1 rounded outline-none font-montserrat font-normal text-[12px]"
          onChange={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </div>
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <div className="font-montserrat flex flex-col px-10">
      <div className="py-6 font-semibold text-2xl text-[#636363]">
        User{`'s`} List
      </div>
      <div className="flex flex-row">
        <div className="cursor-pointer hover:bg-[#7367f0] hover:text-white rounded-md px-6 py-1.5 text-[#7367f0] border border-[#7367f0] flex flex-row">
          <div>
            <AiOutlinePlus className="pt-1 text-xl" />
          </div>
          <div className="pl-2 pt-[2px] text-sm">Add Staff</div>
        </div>
      </div>

      <div className="mt-10 shadow-lg  rounded-lg bg-white p-1">
        <DataTable
          title={
            <div className="overflow-y-auto font-montserrat flex justify-evenly">
              <div
                className="cursor-pointer  text-[#626262
] text-[15px] font-normal "
                onClick={(e) => setFilterText('ADMIN')}
              >
                ADMIN
              </div>
              <div
                className="cursor-pointer  text-[#626262
] text-[15px] font-normal "
                onClick={(e) => setFilterText('DOCTOR')}
              >
                DOCTOR
              </div>
              <div
                className="cursor-pointer  text-[#626262
] text-[15px] font-normal "
                onClick={(e) => setFilterText('CUSTOMER')}
              >
                CUSTOMER
              </div>
              <div
                className="cursor-pointer  text-[#626262
] text-[15px] font-normal "
                onClick={(e) => setFilterText('BUSINESS OWNER')}
              >
                BUSINESS OWNER
              </div>
              <div
                className="cursor-pointer  text-[#626262
] text-[15px] font-normal "
                onClick={(e) => setFilterText('CUSTOMER SUPPORT')}
              >
                CUSTOMER SUPPORT
              </div>
              <div
                className="cursor-pointer  text-[#626262
] text-[15px] font-normal "
                onClick={(e) => setFilterText('MARKETING MANAGER')}
              >
                MARKETING MANAGER
              </div>
            </div>
          }
          columns={columns}
          data={filteredItems}
          // progressPending={pending}
          // progressComponent={<>Loading ...</>}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          customStyles={customStyles}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        />
      </div>
    </div>
  );
};

export { ManageUser, ManageDurationFee };
export default Users;
