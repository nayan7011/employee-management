import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Employee = () => {
  const [state,setState]=useState(
    {
      f_name:'',
      l_name:'',
      email_id:'',
      mob_num:'',
      design:'',
      salary:''
    }
  )

  const handler=(event)=>{
    const {name,value}=event.target
    setState({...state,[name]:value})
  }

  const saveData=(event)=>{
    event.preventDefault()
    axios.post("http://localhost:3004/employee",state)
    .then((res)=>{
      if(res.status==201 || res.status==200){
        toast.success("data save successfully")
        event.target.reset()

      }else{
        toast.error("data not save")
      }
    })
  }
  return (
   <>
   <Toaster/>
    <div style={{textAlign:"center", fontSize:"40px", textTransform:"uppercase", color:"purple", fontWeight:"bold"}}>Fill Employee Details </div>
    <div className="container">
      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6">
          <form action="" onSubmit={saveData}>
            <>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                 Employee First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Employee First Name "
                  name='f_name'
                  onChange={handler}
                />
              </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                 Employee Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Employee Last Name "
                  name='l_name'
                  onChange={handler}
                />
              </div>
              
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                 Employee Email Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Employee Email_Id "
                  name='email_id'
                  onChange={handler}
                />
              </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                 Employee Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Employee Mobile Number "
                  name='mob_num'
                  onChange={handler}
                />
              </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                 Employee Designation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Employee Designation "
                  name='design'
                  onChange={handler}
                />
              </div>
              
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                 Employee Salary
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Employee Salary "
                  name='salary'
                  onChange={handler}
                />
              </div>
              <div className="mb-3">
                <div style={{textAlign:"centre"}}>
                  <input type="submit" value="submit detail" className='btn btn-success' />
                </div>
              </div>
            </>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default Employee
