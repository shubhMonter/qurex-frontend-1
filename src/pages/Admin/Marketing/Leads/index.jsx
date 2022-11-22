import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import {
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineDownload,
  AiOutlineUpload,
} from 'react-icons/ai';
import { BsEye, BsPencilSquare } from 'react-icons/bs';
const Leads = () => {
  const [filterText, setFilterText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [inputs, setInputs] = useState({});
  const [editData, setEditData] = useState({});
  const getDatabyId = (id) => {
    const editFilterData = data.filter((item) => {
      return item.id == id;
    })[0];
    setEditData(editFilterData);
    setShowModal(true);
    //console.log(editData);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);
  };

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
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Mobile',
      selector: (row) => row.mobile,
    },
    {
      name: 'Message',
      selector: (row) => row.message,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
    },
    {
      name: 'Action',
      selector: (row) => (
        <>
          {' '}
          <div className="py-3 flex flex-row">
            <div className="ml-3 cursor-pointer hover:bg-[#7367f0] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#7367f0] border border-[#7367f0]">
              <BsEye />
            </div>
            <div className="ml-3 cursor-pointer hover:bg-[#7367f0] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#7367f0] border border-[#7367f0]">
              <BsPencilSquare onClick={() => getDatabyId(1)} />
            </div>
            <div className="ml-3 cursor-pointer hover:bg-[#ef8889] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#ef8889] border border-[#ef8889]">
              <AiOutlineDelete />
            </div>
          </div>
          {showModal ? (
            <>
              <div className="transjustify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="bg-[#f8f8f8] flex items-start justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-[#2c2c2c] mt-2 text-md  font-semibold">
                        Add a Specialization
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <form>
                      <div className="relative p-3 flex-auto">
                        <div className="leading-relaxed p-6 grid grid-cols-2 gap-5">
                          <div className="flex flex-col ">
                            <div className="flex flex-row">
                              <input
                                className="w-full border px-1 rounded outline-none font-montserrat font-normal text-gray-400 text-[12px]"
                                placeholder="specialization name"
                                name="name"
                                value={inputs.name || editData?.name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="mt-5 text-xs text-gray-600">
                              Specialization description
                            </div>
                            <div className="flex flex-row">
                              <textarea
                                className="min-h-[250px] w-full border px-1 rounded outline-none font-montserrat font-normal text-gray-400 text-[12px]"
                                placeholder="Please provide Specialization description"
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
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          onClick={(e) => {
                            handleSubmit(e);
                            setShowModal(false);
                          }}
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
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

  const data = [
    {
      id: 1,
      name: 'Beetlejuice',
      email: '1988',
      mobile: 'AAA',
      message: 'AAA',
      date: 'AAA',
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
    <div className="font-montserrat flex flex-col px-10">
      <div className="py-6 font-semibold text-2xl text-[#636363]">Leads</div>

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

export default Leads;
