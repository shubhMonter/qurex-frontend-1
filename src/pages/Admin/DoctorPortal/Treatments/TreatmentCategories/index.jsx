import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import axios from 'axios';
import { get, headers, post, put } from '../../../../../api/index';
import { BaseSetting } from '../../../../../utils/common';
const TreatmentCategories = () => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState({});
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [rowId, setRowId] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [pending, setPending] = React.useState(true);
  const [inputs, setInputs] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({});
  const getDatabyId = (id) => {
    const editFilterData = data.filter((item) => {
      return item._id == id;
    })[0];
    setEditData(editFilterData);
    setShowModal(true);
    //console.log(editData);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateData();
  };
  const updateData = async () => {
    try {
      if (navigator.onLine) {
        const response = await put(
          BaseSetting.adminApiDomain +
            `/treatmentcategory/updateTreatmentCategory/${editData._id}`,
          inputs,
          headers
        );
        // setApiData(response.data.data);
        const result = response.data;
        if (result.status == 1) {
          getData();

          setPending(false);
          alert('Succesfully Updated');
        }
      } else {
      }
    } catch (error) {
      alert('Error Updating Data');
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };
  const postData = async () => {
    try {
      if (navigator.onLine) {
        const response = await post(
          BaseSetting.adminApiDomain +
            '/treatmentcategory/addNewTreatmentCategory',
          inputs,
          headers
        );
        // setApiData(response.data.data);
        const result = response.data;
        if (result.status == 1) {
          getData();

          setPending(false);
          alert('Succesfully Added');
        }
      } else {
      }
    } catch (error) {
      alert('Error Adding Data');
    }
  };
  useEffect(() => {
    getData();

    // apiData.map((item) => console.log(item._id));
  }, []);
  const getData = async () => {
    try {
      if (navigator.onLine) {
        const response = await get(
          BaseSetting.adminApiDomain +
            '/treatmentcategory/getAllTreatmentCategories',
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
  const deleteRow = async (id) => {
    try {
      if (navigator.onLine) {
        await axios
          .delete(
            BaseSetting.adminApiDomain +
              `/treatmentcategory/removeTreatmentCategory/${id}`,
            { headers }
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
      name: 'ID',
      selector: 'serial',
      width: '10%',
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.name,
      width: '20%',
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
      width: '40%',
      style: { height: '100px' },
      sortable: true,
    },

    {
      name: 'Image',
      selector: (row) => {
        return (
          <div>
            <img
              className="py-3"
              height={34}
              src={`https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg`}
              alt=""
            />
          </div>
        );
      },
    },
    {
      name: 'Actions',
      selector: (row) => (
        <>
          <div className="flex flex-row py-3">
            <div
              className="cursor-pointer hover:bg-[#7367f0] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#7367f0] border border-[#7367f0]"
              key={row._id}
            >
              <BsPencilSquare onClick={() => getDatabyId(row._id)} />
            </div>
            <div className="ml-3 cursor-pointer hover:bg-[#ef8889] hover:bg-opacity-20 rounded-md px-2 py-2 text-[#ef8889] border border-[#ef8889]">
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
              <div className="fixed inset-0 z-50 flex items-center overflow-x-hidden overflow-y-auto outline-none transjustify-center focus:outline-none">
                <div className="relative w-auto max-w-3xl mx-auto my-6">
                  {/*content*/}
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    {/*header*/}
                    <div className="bg-[#f8f8f8] flex items-start justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-[#2c2c2c] mt-2 text-md  font-semibold">
                        Are you Sure ?
                      </h3>
                      <button
                        className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                        onClick={() => setDeleteModal(false)}
                      >
                        <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    {/* <div className="relative flex-auto p-3">
                    Are you Sure ??
                  </div> */}
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                      <button
                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear outline-none text-emerald-500 background-transparent focus:outline-none"
                        type="button"
                        onClick={() => setDeleteModal(false)}
                      >
                        No
                      </button>
                      <button
                        className="bg-[#ef4444] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => deleteRow(rowId)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-30"></div>
            </>
          ) : null}
        </>
      ),
    },
  ];

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <div className="flex flex-row">
        <div className=" pr-1 font-montserrat font-normal text-[12px] text-[#636363]">
          Search:
        </div>
        <input
          className="border px-1 rounded outline-none font-montserrat font-normal text-[12px] text-[#636363]"
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
        Treatments Categories
      </div>
      <div className="flex flex-row">
        <div className="cursor-pointer hover:bg-[#ef8889] hover:text-white rounded-md px-6 py-1.5 text-[#ef8889] border border-[#ef8889] flex flex-row">
          <div>
            <AiOutlineDelete className="pt-1 text-xl" />
          </div>
          <div className="pl-2 pt-[2px] text-sm">Delete All</div>
        </div>
        <div
          className="ml-4 cursor-pointer hover:bg-[#7367f0] hover:text-white rounded-md px-6 py-1.5 text-[#7367f0] border border-[#7367f0] flex flex-row"
          onClick={() => setShowModal(true)}
        >
          <div>
            <AiOutlinePlus className="pt-1 text-xl" />
          </div>
          <div className="pl-2 pt-[2px] text-sm">Add</div>
        </div>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center overflow-x-hidden overflow-y-auto outline-none transjustify-center focus:outline-none">
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="bg-[#f8f8f8] flex items-start justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-[#2c2c2c] mt-2 text-md  font-semibold">
                      Add a Treatment Category
                    </h3>
                    <button
                      className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <form>
                    <div className="relative flex-auto p-3">
                      <div className="grid grid-cols-2 gap-5 p-6 leading-relaxed">
                        <div className="flex flex-col ">
                          <div className="flex flex-row">
                            <input
                              className="w-full border px-1 rounded outline-none font-montserrat font-normal text-gray-400 text-[12px]"
                              placeholder="Category Name"
                              name="name"
                              value={inputs.name || editData?.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mt-5 text-xs text-gray-600">
                            Category description
                          </div>
                          <div className="flex flex-row">
                            <textarea
                              className="min-h-[250px] w-full border px-1 rounded outline-none font-montserrat font-normal text-gray-400 text-[12px]"
                              placeholder="Please provide Category description"
                              name="description"
                              value={
                                inputs.description || editData?.description
                              }
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="max-w-xl">
                          <label className="flex justify-center w-full h-full px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                            <span className="flex items-center space-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <span className="font-medium text-gray-600">
                                Drop files to Attach, or
                                <span className="text-blue-600 underline">
                                  browse
                                </span>
                              </span>
                            </span>
                            <input
                              type="file"
                              name="file_upload"
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                      <button
                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      {Object.keys(editData).length > 0 ? (
                        <button
                          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          onClick={(e) => {
                            handleUpdate(e);
                            setShowModal(false);
                          }}
                        >
                          Update Changes
                        </button>
                      ) : (
                        <button
                          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          onClick={(e) => {
                            handleSubmit(e);
                            setShowModal(false);
                          }}
                        >
                          Save Changes
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-30"></div>
          </>
        ) : null}
      </div>

      <div className="p-1 mt-10 bg-white rounded-lg shadow-lg">
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
      </div>
    </div>
  );
};

export default TreatmentCategories;
