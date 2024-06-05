import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import Swal from 'sweetalert2'
import ReactPaginate from 'react-paginate';


const Employeelist = () => {
    const [state,setState]=useState([]);
    const [total,setTotal]=useState(1);
    const [page,setPage]=useState(0);

    const getTotal=()=>{
        axios.get('http://localhost:3004/employee')
        .then((res)=>{
            setTotal(res.data.length / 10)
        })
    }
    getTotal()

    const allData=()=>{
        axios.get('http://localhost:3004/employee?_page='+page+"&_limit=10")
        .then((res)=>{
            setState(res.data)
        })
    }
    useEffect(()=>{
      
        
        allData()
    },[page])
    const handlePageClick=(data)=>{
        setPage(data.selected + 1)
    }
    
   

 

    const deleteData=(id)=>{
        Swal.fire({
            title: "Are you sure want to delete this id"+id+"?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            axios.delete("http://localhost:3004/employee/"+id)
            .then((res)=>{
                if(res.status==201 || res.status==200){
                    toast.success("data delete successfully")
                   allData()
            
                  }else{
                    toast.error("data not delete successfully")
                  }

            })
            }
          });
    }
  return (
   <>
    <Toaster/>
    <div style={{textAlign:"center", fontSize:"40px", textTransform:"uppercase", color:"purple", fontWeight:"bold"}}>Employee List</div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Mobile No</th>
                        <th>Designation</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                {
                    state.map((data,index)=>
                        <tbody>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.f_name}</td>
                                <td>{data.l_name}</td>
                                <td>{data.email_id}</td>
                                <td>{data.mob_num}</td>
                                <td>{data.design}</td>
                                <td>{data.salary}</td>
                                <td>
                                    <Link to={`/edit/${data.id}`}>
                                        <img src="edit.png" alt="" style={{width:"30px", height:"30px"}}/>
                                    </Link>
                                    <a href="javascript:void(0)" onClick={()=>{deleteData(data.id)}}><img src='delete.png' style={{width:"50px", height:"30px"}}/ ></a>
                                </td>
                            </tr>
                        </tbody>                    
                    )
                }

                </table>
            </div>
        </div>
        <ReactPaginate 
                        previousLabel={'Previous'}
                        nextLabel= {'Next'}
                        breakLabel={'...'}
                        pageCount={total}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={6}
                        onPageChange={handlePageClick}
                       containerClassName={'pagination'}
                       pageClassName={'page-item'}
                       pageLinkClassName={'page-link'}
                       previousClassName={'page-item'}
                       previousLinkClassName={'page-link'}
                       nextClassName={'page-item'}
                       nextLinkClassName={'page-link'}
                       breakClassName={'page-item'}
                       breakLinkClassName={'page-link'}
                       activeClassName={'active'}
                    />
    </div>
   </>
  )
}

export default Employeelist
