import React from 'react'
import NavBar from './NavBar'

const DeleteTodo = () => {
  return (
    <div>
        <NavBar/>
         <br></br> <h3 align="center" ><u>Delete Todo</u></h3><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Todo Code</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-col-xl-12 col-xxl-12">
                        <center><button className="btn btn-danger">Delete</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteTodo