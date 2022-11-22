import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import {
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineDownload,
  AiOutlineUpload,
} from 'react-icons/ai';
import { BsEye, BsPencilSquare } from 'react-icons/bs';
const SEO = () => {
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
      name: 'Sno',
      selector: (row) => row.id,
    },
    {
      name: 'Page Name',
      selector: (row) => row.pagename,
    },
    {
      name: 'Meta Keywords',
      selector: (row) => row.metakywords,
    },
    {
      name: 'Meta Description',
      selector: (row) => row.metadescription,
    },

    {
      name: 'Action',
      selector: (row) => row.actions,
    },
  ];

  const data = [
    {
      id: 1,
      pagename: 'Beetlejuice',
      metakywords: '1988',
      metadescription: 'AAA',

      actions: (
        <div className="py-3 flex flex-row">
          <div className="ml-3 cursor-pointer hover:bg-[#7367f0] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#7367f0] border border-[#7367f0]">
            <BsEye />
          </div>
          <div className="ml-3 cursor-pointer hover:bg-[#7367f0] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#7367f0] border border-[#7367f0]">
            <BsPencilSquare />
          </div>
        </div>
      ),
    },
  ];

  const filteredItems = data.filter(
    (item) =>
      item.pagename &&
      item.pagename.toLowerCase().includes(filterText.toLowerCase())
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
      <div className="py-6 font-semibold text-2xl text-[#636363]">SEO</div>

      <div className="shadow-lg rounded-lg bg-white p-1">
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

export default SEO;
