import TotalBooking from './TotalBookings';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import {
  AiFillDelete,
  AiOutlineDownload,
  AiOutlineEye,
  AiOutlineDelete,
  AiOutlinePlus,
} from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
const Booking = () => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
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
    },
    {
      name: 'Booking Id',
      selector: (row) => row.bookingid,
    },

    {
      name: 'Doctor Name',
      selector: (row) => row.doctorname,
    },
    {
      name: 'Consultation Start Time',
      selector: (row) => row.consultationstarttime,
    },
    {
      name: 'Doctor Contact Number',
      selector: (row) => row.doctorcontactnumber,
    },
    {
      name: 'Patient Name',
      selector: (row) => row.patientname,
    },
    {
      name: 'Patient Contact Number',
      selector: (row) => row.patientcontactnumber,
    },
    {
      name: 'Patient Email',
      selector: (row) => row.patientemail,
    },

    {
      name: 'Doctor Join Time',
      selector: (row) => row.doctorjointime,
    },
    {
      name: 'Patient Join Time',
      selector: (row) => row.patientjointime,
    },
  ];

  const data = [
    {
      id: 1,
      bookingid: 'THK',
      doctorname: 'THK',
      consultationstarttime: 'THK',
      doctorcontactnumber: 'THK',
      patientname: 1,
      patientcontactnumber: 'THK',
      patientemail: 'THK',
      doctorjointime: 'THK',
      patientjointime: 'THK',
    },
  ];

  const filteredItems = data.filter(
    (item) =>
      item.doctorname &&
      item.doctorname.toLowerCase().includes(filterText.toLowerCase())
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
        <div className=" pr-1 font-montserrat font-normal text-[12px]">
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
      <div className="py-6 font-semibold text-2xl text-[#636363]">Bookings</div>

      <div className=" shadow-lg rounded-lg bg-white p-1">
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
    </div>
  );
};

export default Booking;

export { TotalBooking };
