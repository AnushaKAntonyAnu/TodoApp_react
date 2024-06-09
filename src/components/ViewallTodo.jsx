import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallTodo = () => {
    const[data,changeData]=useState({"todos":[]})
       const fetchData=()=>{
        axios.get("https://dummyjson.com/todos").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
       }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <br></br> <h3 align="center" ><u>ViewAll Todo</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped table-hover">
                           
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Todo</th>
                                        
                                        <th scope="col">UserID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {data.todos.map(
                                    (value,index)=>{
                                        return <tr>
                                       
                                        <td>{value.id}</td>
                                        <td>{value.todo}</td>
                                        <td>{value.userId}</td>
                                    </tr>
                                    }
                                   )}
                                </tbody>
                            </table>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallTodo