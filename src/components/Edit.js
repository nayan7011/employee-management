import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [state,setState]=useState({
        f_name:'',
        l_name:'',
        email_id:'',
        mob_num:'',
        design:'',
        salary:''
    })
    const {id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3004/employee/"+id).then((res)=>{setState(res.data)})
    },[])

    const updateData=(event)=>{
        event.preventDefault()
        axios.put("http://localhost:3004/employee/"+id,state)
        .then((res)=>{
            navigate("/employee-list")
        })
    }

    const handler=(event)=>{
        const {name,value}=event.target
        setState({...state,[name]:value})
    }

  return (
   <>
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
          <form action="" onSubmit={updateData}>
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
                  value={state.f_name}
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
                  value={state.l_name}
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
                  value={state.email_id}
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
                  value={state.mob_num}
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
                  value={state.design}
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
                  value={state.salary}
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

export default Edit
