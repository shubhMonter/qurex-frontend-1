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
const Prescription = () => {
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
      name: 'Prescription Url',
      selector: (row) => row.prescriptionurl,
    },
    {
      name: 'Link Generated On',
      selector: (row) => row.linkgeneratedon,
    },
    {
      name: 'Expiry',
      selector: (row) => row.expiry,
    },
  ];

  const data = [
    {
      id: 1,
      bookingid: 'THK',
      doctorname: 'THK',
      prescriptionurl: 'THK',
      linkgeneratedon: 'THK',

      expiry: '22',
    },
  ];

  const filteredItems = data.filter(
    (item) =>
      item.helpertestname &&
      item.helpertestname.toLowerCase().includes(filterText.toLowerCase())
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
      <div className="py-6 font-semibold text-2xl text-[#636363]">
        Late Prescription
      </div>

      <div className="mt-10 shadow-lg rounded-lg bg-white p-1">
        <DataTable
          title={
            <div className="mt-10 cursor-pointer hover:bg-[#7367f0] hover:text-white text-lg truncate rounded-md w-64 pl-5 py-1 border border-[#7367f0] text-[#7367f0]">
              <span className="text-xl">+</span> Generate Prescription
            </div>
          }
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

export default Prescription;
