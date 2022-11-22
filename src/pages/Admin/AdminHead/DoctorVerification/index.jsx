import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const DoctorVerification = () => {
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
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Degree',
      selector: (row) => row.degree,
    },
    {
      name: 'Actions',
      selector: (row) => row.actions,
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

  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
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

export default DoctorVerification;
