import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import consultationAPI from '../../../../api/consultation';
const Consultation = () => {
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [data ,setData] =  useState();
  const auth = useSelector((state)=> state.auth.authData);
  useEffect(()=>{
    if(auth.isAuthenticated){
      getConsultationData(auth.user.id,auth.token)
    }
  },[])
  const getConsultationData = async(id,token) =>{
    try {
      const response =  await consultationAPI.getByUserId(id,token);
      if(response){
        setData(response);
      }else{
        alert('Something Went Wrong')
      }
    } catch (error) {
      alert('Something Went Wrong')
    }
  }
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f8f8f8',
      },
    },
  };
  const columns = [
    // {
    //   name: 'Sno',
    //   selector: (row) => row.,
    // },
    {
      name: 'Patient Name',
      selector: (row) => row.patientId.name,
    },
    {
      name: 'Symtoms/Issue',
      selector: (row) => row.issue,
    },
    {
      name: 'Facing Since',
      selector: (row) => row.since,
    },
    {
      name: 'Dignosis',
      selector: (row) => row.diagnosis,
    },
    {
      name: 'Medicine',
      selector: (row) => row.medicine,
    },
    {
      name: 'General Advice',
      selector: (row) => row.doctorAdvice,
    }
  ];



  // const data = [
  //   {
  //     id: 1,
  //     ticketid: 'Beetlejuice',
  //     ticketname: '1988',
  //     raisedby: 'AAA',
  //     raisedon: 'Beetlejuice',
  //     timeremaining: '1988',
  //     ticketstatus: (
  //       <div className="py-3 flex flex-row">
  //         <div className="ml-3 cursor-pointer bg-[#7367f0] hover:shadow-lg   px-4 py-[2px] rounded-xl text-white border ">
  //           Open
  //         </div>
  //       </div>
  //     ),

  //     actions: (
  //       <div className="py-3 flex flex-row">
  //         <div className="ml-3 cursor-pointer hover:bg-[#7367f0] hover:bg-opacity-20  rounded-md px-2 py-2 text-[#7367f0] border border-[#7367f0]">
  //           <BsPencil />
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];

  // const filteredItems = data.filter(
  //   (item) =>
  //     item.ticketname &&
  //     item.ticketname.toLowerCase().includes(filterText.toLowerCase())
  // );

  // const subHeaderComponentMemo = React.useMemo(() => {
  //   const handleClear = () => {
  //     if (filterText) {
  //       setResetPaginationToggle(!resetPaginationToggle);
  //       setFilterText('');
  //     }
  //   };

  //   return (
  //     <div className="flex flex-row">
  //       <div className=" pr-1 font-montserrat font-normal text-[12px]">
  //         Search:
  //       </div>
  //       <input
  //         className="border px-1 rounded outline-none font-montserrat font-normal text-[12px]"
  //         onChange={(e) => setFilterText(e.target.value)}
  //         onClear={handleClear}
  //         filterText={filterText}
  //       />
  //     </div>
  //   );
  // }, [filterText, resetPaginationToggle]);
  return (<div> <div className="font-montserrat flex flex-col px-10">
  <div className="py-6 font-semibold text-2xl text-[#636363]">Consultation</div>

  <div className="shadow-lg rounded-lg bg-white p-1">
   {data && data.length > 0 &&  <DataTable
      title=""
      columns={columns}
      data={data}
      pagination
      paginationResetDefaultPage={resetPaginationToggle}
      customStyles={customStyles}
      subHeader
      //subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
    />}
  </div>
</div></div>);
};

export default Consultation;
