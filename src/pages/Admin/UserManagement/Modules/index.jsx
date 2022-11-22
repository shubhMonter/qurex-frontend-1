import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import {
  AiFillDelete,
  AiOutlineDelete,
  AiOutlineLock,
  AiOutlinePlus,
} from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { get, headers } from '../../../../api';
import { BaseSetting } from '../../../../utils/common';
const Modules = () => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [moduleBox, setModuleBox] = useState(false);

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f8f8f8',
      },
    },
  };
  data.forEach((item, index) => {
    item.serial = index + 1;
  });
  const columns = [
    {
      name: 'Sno.',
      selector: 'serial',

      sortable: true,
    },
    {
      name: 'Module Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Controller Name',
      selector: (row) => row.controllername,
      sortable: true,
    },
    {
      name: 'Actions',
      selector: (row) => (
        <div className="py-3 flex flex-row">
          <div className="cursor-pointer hover:bg-[#ef8889] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#ef8889] border border-[#ef8889]">
            Manage
          </div>
        </div>
      ),
    },
  ];
  useEffect(() => {
    getModules();

    // apiData.map((item) => console.log(item._id));
  }, []);
  const getModules = async () => {
    try {
      if (navigator.onLine) {
        const response = await get(
          BaseSetting.adminApiDomain + '/module/getAllModules',
          headers
        );
        // setApiData(response.data.data);
        const result = response.data.data.map(
          ({ active, gender, createdAt, updatedAt, __v, ...rest }) => ({
            ...rest,
          })
        );
        const filteredItems = result.filter(
          (item) =>
            item.name &&
            item.name.toLowerCase().includes(filterText.toLowerCase())
        );
        setData(filteredItems);
        setPending(false);
      } else {
      }
    } catch (error) {}
  };

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
      <div className="py-6 font-semibold text-2xl text-[#636363]">Modules</div>
      <div className="flex flex-row">
        <div
          className="cursor-pointer hover:bg-[#7367f0] hover:text-white rounded-md px-6 py-1.5 text-[#7367f0] border border-[#7367f0] flex flex-row"
          onClick={() => setModuleBox(!moduleBox)}
        >
          <div>
            <AiOutlinePlus className="pt-1 text-xl" />
          </div>
          <div className="pl-2 pt-[2px] text-sm">Add</div>
        </div>
      </div>

      <div className="mt-10 shadow-lg rounded-lg bg-white p-1">
        {moduleBox ? (
          <div className="text-[#626262] flex flex-col p-10 ">
            <div className="font-semibold pb-3 border border-transparent border-b-gray-300 flex flex-row">
              <div className="pt-[2px] mr-1 ">
                <FiUsers />
              </div>
              <div>Module Name</div>
            </div>
            <div className="mt-4">
              <input className="text-xs py-3 pl-5 outline-none w-full border rounded-md" />
            </div>
            <div className="mt-7 font-semibold pb-3 border border-transparent border-b-gray-300 flex flex-row">
              <div className="pt-[2px] mr-1 ">
                <FiUsers />
              </div>
              <div>Controller Name</div>
            </div>
            <div className="mt-4">
              <input className="text-xs py-3 pl-5 outline-none w-full border rounded-md" />
            </div>
            <div className="font-semibold mt-10 pb-3 border border-transparent border-b-gray-300 flex flex-row">
              <div className="pt-[2px] mr-1 ">
                <AiOutlineLock />
              </div>
              <div>Permission</div>
            </div>
            <div className="mt-10 grid grid-rows-2">
              <div className="grid grid-cols-7 gap-1">
                <div className="col-span-2 font-semibold text-xs">Module</div>
                <div className="col-span-1 font-semibold text-xs">Read</div>
                <div className="col-span-1 font-semibold text-xs">Write</div>
                <div className="col-span-1 font-semibold text-xs">Create</div>
                <div className="col-span-1 font-semibold text-xs">Delete</div>
                <div className="col-span-1 font-semibold text-xs">NA</div>
              </div>
              {[1, 1, 1, 1, 1, 1, 2, 2, 2].map((item) => (
                <>
                  <div className="my-3 grid grid-cols-7 gap-1">
                    <div className="col-span-2 font-medium text-xs md:text-[15px] lg:text-sm xl:text-sm ">
                      Degree Verification{' '}
                    </div>
                    <div className="col-span-1 font-medium text-xs">
                      <input type="checkbox" />
                    </div>
                    <div className="col-span-1 font-medium text-xs">
                      <input type="checkbox" />
                    </div>
                    <div className="col-span-1 font-medium text-xs">
                      <input type="checkbox" />
                    </div>
                    <div className="col-span-1 font-medium text-xs">
                      <input type="checkbox" />
                    </div>
                    <div className="col-span-1 font-medium text-xs">
                      <input type="checkbox" />
                    </div>
                  </div>
                </>
              ))}
              <div className="flex justify-end">
                <div className="bg-[#ea5455] px-5 py-1.5 text-white rounded-md hover:shadow-md mx-2 cursor-pointer">
                  Cancel
                </div>
                <div className="bg-[#7367f0] px-5 py-1.5 text-white rounded-md hover:shadow-md mx-2 cursor-pointer">
                  Add Role
                </div>
              </div>
            </div>
          </div>
        ) : (
          <DataTable
            title=""
            columns={columns}
            data={data}
            progressPending={pending}
            progressComponent={<>Loading ...</>}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            customStyles={customStyles}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
          />
        )}
      </div>
    </div>
  );
};

export default Modules;
