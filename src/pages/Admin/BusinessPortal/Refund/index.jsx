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
const Refund = () => {
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
      name: 'Refund Id',
      selector: (row) => row.refundid,
    },
    {
      name: 'Customer Name',
      selector: (row) => row.customername,
    },
    {
      name: 'Doctor Name',
      selector: (row) => row.doctorname,
    },
    {
      name: 'Consultation Time',
      selector: (row) => row.consultationtime,
    },
    {
      name: 'Refund Amount',
      selector: (row) => row.refundamount,
    },
    {
      name: 'Doctor Paid Fees',
      selector: (row) => row.doctorpaidfees,
    },
    {
      name: 'Refunded By',
      selector: (row) => row.refundedby,
    },
    {
      name: 'Refunded On',
      selector: (row) => row.refundedon,
    },
    {
      name: 'Refund Status',
      selector: (row) => row.refundstatus,
    },
  ];

  const data = [
    {
      id: 1,
      bookingid: 'THK',
      refundid: 'THK',
      customername: 'THK',
      doctorname: 'THK',
      consultationtime: 1,
      refundamount: 'THK',
      doctorpaidfees: 'THK',
      refundedby: 'THK',
      refundedon: 'THK',
      refundstatus: '22',
    },
  ];

  const filteredItems = data.filter(
    (item) =>
      item.refundid &&
      item.refundid.toLowerCase().includes(filterText.toLowerCase())
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
        Manual Refund
      </div>

      <div className="mt-10 shadow-lg rounded-lg bg-white p-1">
        <DataTable
          title={
            <div className="mt-10 cursor-pointer hover:bg-[#7367f0] hover:text-white text-lg truncate rounded-md w-32 pl-5 py-1 border border-[#7367f0] text-[#7367f0]">
              <span className="text-xl">+</span> Refund
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

export default Refund;
