import doctor from '../../../../../assets/pngs/doctor.png';
import { useParams, useNavigate } from 'react-router-dom';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import DataTable from 'react-data-table-component';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import React, { useState } from 'react';

const ManageUser = () => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  let navigate = useNavigate();
  const manageduration = (id) => {
    navigate('/duration-and-fee-settings/' + id);
  };
  const params = useParams();
  var id2 = params.id;
  const data = [
    {
      id: 1,
      userid: '1',
      name: 'Amir Sohail',
      email: 'amir.sohail@qurex.ai',
      phoneno: '8058837333',
      doj: '21-07-2022',
      role: 'ADMIN',
      bookingid: 'CLT-c581829e-84e6-4bf0-bd24-a06c422e9efc',
      consultationid: '00b8c975-2452-4752-9b23-3cc4e4bf430f',
      patientname: 'puneet',
      consultationslot: '3rd October,2022 07:15 PM-07:15 PM',
      issue: 'Erectile Dysfunction',
    },
    {
      id: 2,
      userid: '2',
      name: 'Prashant Joshi',
      email: 'prashant@qurex.ai',
      phoneno: '7483187084',
      doj: '21-07-2022',
      role: 'ADMIN',
      bookingid: 'CLT-af032d9a-7913-4b09-9f17-2f23953ff0d0',
      consultationid: 'b4315c29-5b67-4dc4-9f47-31dbaf8cf223',
      patientname: 'Sujeet',
      consultationslot: '1st September,2022 07:30 PM-07:30 PM',
      issue: 'Low Libido, Erectile dysfunction',
    },
    {
      id: 3,
      userid: '3',
      name: 'Anita Shyam',
      email: 'ahukumchand@yahoo.com',
      phoneno: '7416345577',
      doj: '21-07-2022',
      role: 'DOCTOR',
      bookingid: 'CLT-af032d9a-7913-4b09-9f17-2f23953ff0d0',
      consultationid: 'b4315c29-5b67-4dc4-9f47-31dbaf8cf223',
      patientname: 'Sujeet',
      consultationslot: '1st September,2022 07:30 PM-07:30 PM',
      issue: 'Low Libido, Erectile dysfunction',
    },
    {
      id: 4,
      userid: '4',
      name: 'Rahul Reddy',
      email: 'Drrahulreddy@gmail.com',
      phoneno: '9908050090',
      doj: '21-07-2022',
      role: 'DOCTOR',
      bookingid: 'CLT-af032d9a-7913-4b09-9f17-2f23953ff0d0',
      consultationid: 'b4315c29-5b67-4dc4-9f47-31dbaf8cf223',
      patientname: 'Sujeet',
      consultationslot: '1st September,2022 07:30 PM-07:30 PM',
      issue: 'Low Libido, Erectile dysfunction',
    },
    {
      id: 5,
      userid: '5',
      name: 'Pradnya Kamble',
      email: 'pradnyakamble2791@gmail.com',
      phoneno: '9136011808',
      doj: '21-07-2022',
      role: 'DOCTOR',
      bookingid: 'CLT-af032d9a-7913-4b09-9f17-2f23953ff0d0',
      consultationid: 'b4315c29-5b67-4dc4-9f47-31dbaf8cf223',
      patientname: 'Sujeet',
      consultationslot: '1st September,2022 07:30 PM-07:30 PM',
      issue: 'Low Libido, Erectile dysfunction',
    },
  ];
  var user = data.find(function (post, index) {
    return post.id == id2;
  });
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f8f8f8',
      },
    },
  };

  const columns = [
    {
      name: 'Booking Id',
      selector: (row) => row.bookingid,
    },
    {
      name: 'Consultation Id',
      selector: (row) => row.consultationid,
    },
    {
      name: 'Patient Name',
      selector: (row) => row.patientname,
    },
    {
      name: 'Consultation Slot',
      selector: (row) => row.consultationslot,
    },
    {
      name: 'Issue',
      selector: (row) => row.issue,
    },
    {
      name: 'Status',
      selector: (row) => (
        <div className="py-3 flex flex-row">
          <div className="cursor-pointer rounded-xl px-2 py-[2px] bg-[#28c76f] shadow-lg shadow-[#28c76f] text-white text-xs">
            Completed
          </div>
        </div>
      ),
    },
  ];
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
      <div className="pl-4 py-8 sm:p-8 md:p-8 lg:p-8 xl:p-8 flex flex-col mt-10 shadow-lg rounded-lg bg-white">
        <div className="flex flex-row">
          <div>
            <img
              className="h-28 w-44 sm:h-32 md:h-32 lg:h-32 xl:h-32 sm:w-32 md:w-32 lg:w-32 xl:w-32 rounded-2xl"
              src={doctor}
              alt="img"
            />
          </div>
          <div className="pl-3 sm:pl-7 md:pl-7 lg:pl-7 xl:pl-7 pt-2  font-montserrat grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
            <div className="text-sm font-bold text-[#626262] col-span-1">
              <div>Name - </div>
              <div>Phone -</div>
              <div>Email -</div>
              <div>DoJ -</div>
              {user.role == 'DOCTOR' ? (
                <>
                  <div>Fees -</div>
                  <div>Settlement fee -</div>
                </>
              ) : (
                ''
              )}
            </div>
            <div className="text-sm font-normal text-[#626262] col-span-1">
              <div>{user.name}</div>
              <div>{user.phoneno}</div>
              <div>{user.email}</div>
              <div>{user.doj}</div>
              {user.role == 'DOCTOR' ? (
                <>
                  <div>₹800</div>
                  <div>₹800</div>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        {user.role == 'DOCTOR' ? (
          <>
            <div
              className="cursor-pointer duration-500
ease-in-out hover:shadow-lg hover:transform hover:duration-500 hover:ease-in-out rounded-lg mt-4 w-52 bg-[#7367f0] px-6 py-3 flex flex-row"
              onClick={() => manageduration(user.id)}
            >
              <div>
                <BiMessageRoundedAdd className="mt-1" />
              </div>
              <div className="pl-2">Practise Details</div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      {user.role == 'DOCTOR' ? (
        <>
          <div className="mt-10 shadow-lg  rounded-lg bg-white p-1">
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
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default ManageUser;
