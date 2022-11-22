import axios from 'axios';
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
const Roles = () => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [data, setData] = useState([]);
  const [rowId, setRowId] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  const [rolesBox, setRolesBox] = useState(false);
  const getRowId = (id) => {
    console.log(id);
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (id) => {
    try {
      if (navigator.onLine) {
        await axios
          .delete(
            BaseSetting.adminApiDomain + `/role/removeRole/${id}`,
            headers
          )
          .then(() => {
            getData();
            setDeleteModal(false);
          });
      } else {
      }
    } catch (error) {}
  };
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
      name: 'Role Name',
      selector: (row) => row.name,

      sortable: true,
    },
    {
      name: 'Total Users',
      selector: (row) => row.access.length,

      sortable: true,
    },
    {
      name: 'Actions',

      sortable: true,
      selector: (row) => (
        <>
          {' '}
          <div className="py-3 flex flex-row" key={row._id}>
            <div className="cursor-pointer hover:bg-[#ef8889] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#ef8889] border border-[#ef8889]">
              Manage
            </div>
            <div className="ml-3 cursor-pointer hover:bg-[#ef8889] hover:bg-opacity-20  rounded-md px-3 py-2 text-[#ef8889] border border-[#ef8889]">
              <AiOutlineDelete
                onClick={() => {
                  setDeleteModal(true);
                  setRowId(row._id);
                }}
              />
            </div>
          </div>
          {deleteModal ? (
            <>
              <div className="transjustify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="bg-[#f8f8f8] flex items-start justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-[#2c2c2c] mt-2 text-md  font-semibold">
                        Are you Sure ?
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setDeleteModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    {/* <div className="relative p-3 flex-auto">
       Are you Sure ??
     </div> */}
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-emerald-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setDeleteModal(false)}
                      >
                        No
                      </button>
                      <button
                        className="bg-[#ef4444] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => deleteData(rowId)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      ),
    },
  ];

  const getData = async () => {
    try {
      if (navigator.onLine) {
        const response = await get(
          BaseSetting.adminApiDomain + '/role/getAllRoles',
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
      <div className="py-6 font-semibold text-2xl text-[#636363]">Roles</div>
      <div className="flex flex-row">
        <div
          className="cursor-pointer hover:bg-[#7367f0] hover:text-white rounded-md px-6 py-1.5 text-[#7367f0] border border-[#7367f0] flex flex-row"
          onClick={() => setRolesBox(!rolesBox)}
        >
          <div>
            <AiOutlinePlus className="pt-1 text-xl" />
          </div>
          <div className="pl-2 pt-[2px] text-sm">Add</div>
        </div>
      </div>

      <div className="mt-10 shadow-lg rounded-lg bg-white p-1">
        {rolesBox ? (
          <div className="text-[#626262] flex flex-col p-10 ">
            <div className="font-semibold pb-3 border border-transparent border-b-gray-300 flex flex-row">
              <div className="pt-[2px] mr-1 ">
                <FiUsers />
              </div>
              <div>Role Name</div>
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
              {[
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
              ].map((item) => (
                <>
                  <div className="my-3 grid grid-cols-7 gap-1">
                    <div className="col-span-2 font-medium text-xs md:text-[15px] lg:text-sm xl:text-sm ">
                      Degree Verification
                    </div>
                    <div className="col-span-1 font-medium text-xs">
                      <input
                        onClick={() => getRowId(item.id)}
                        type="checkbox"
                      />
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

export default Roles;
