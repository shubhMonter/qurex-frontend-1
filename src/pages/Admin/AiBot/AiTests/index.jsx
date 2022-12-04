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
const AiTests = () => {
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
      name: 'Test Id',
      selector: (row) => row.testid,
    },
    {
      name: 'Test Name',
      selector: (row) => row.testname,
    },
    {
      name: 'Applicable Gender',
      selector: (row) => row.gender,
    },

    {
      name: 'Actions',
      selector: (row) => row.actions,
    },
  ];

  const data = [
    {
      id: 1,
      testid: 'THK',
      testname: 'THK',
      gender: 'THK',

      actions: (
        <div className="py-3 flex flex-row">
          <div className="cursor-pointer hover:bg-[#7367f0] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#7367f0] border border-[#7367f0]">
            <AiOutlineDownload />
          </div>
          <div className="ml-3 cursor-pointer hover:bg-[#7367f0] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#7367f0] border border-[#7367f0]">
            <BsPencilSquare />
          </div>
          <div className="ml-3 cursor-pointer hover:bg-[#ef8889] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#ef8889] border border-[#ef8889]">
            <AiOutlineDelete />
          </div>
        </div>
      ),
    },
  ];

  const filteredItems = data.filter(
    (item) =>
      item.testname &&
      item.testname.toLowerCase().includes(filterText.toLowerCase())
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
      <div className="py-6 font-semibold text-2xl text-[#636363]">AI Bot</div>
      <div className="flex flex-row">
        <div className="cursor-pointer hover:bg-[#7367f0] hover:text-white rounded-md px-6 py-1.5 text-[#7367f0] border border-[#7367f0] flex flex-row">
          <div>
            <AiOutlineDownload className="pt-1 text-xl" />
          </div>
          <div className="pl-2 pt-[2px] text-sm">Download Formate</div>
        </div>
        <div className="ml-3 cursor-pointer hover:shadow-lg  rounded-md px-6 py-1.5 text-white border bg-[#7367f0] flex flex-row">
          <div>
            <AiOutlinePlus className="pt-1 text-xl" />
          </div>
          <div className="pl-2 pt-[2px] text-sm">Add Test</div>
        </div>
      </div>

      <div className="mt-10 shadow-lg rounded-lg bg-white p-1">
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

export default AiTests;
