import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AssignedTasksAction,RejectAssignedTask,CompleteAssignedTask} from'./actions/AssignedTasksAction'
import './AssignedTasks.css'
import Header from '../Header/Header'
function AssignedTasks() {
    const dispatch=useDispatch();
    const assignedTasks=useSelector((state)=>state.AssignedTasksReducer.items[0])
    console.log(assignedTasks)
    useEffect(()=>{
        dispatch(AssignedTasksAction())
    },[])
    const status = (stat) => {
        switch (stat) {
            case 0:
                return ('Pending')
            case 1:
                return ('Compeleted')
            case 2:
                return ('Rejected')


        }
    }
  const  handleReject=(id)=>{
        dispatch(RejectAssignedTask(id))
    }
    const handleComplete=(id)=>{
        dispatch(CompleteAssignedTask(id))
    }
    return (
        <div>
            <Header/>
        <div>
            <h3 className='tasksHeader'>Assigned Tasks</h3>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Process</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        assignedTasks?.map((item, index) => {
                            return (

                                <tr key={index} >

                                    <th scope="row">{item.id}</th>
                                    <td>{item.title}</td>
                                    <td>{status(Number(item.status))}</td>
                                    <td><div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-danger" onClick={(e)=>{e.preventDefault();handleReject(Number(item.id))}} >Reject</button>
                                        
                                        <button type="button" className="btn btn-success" onClick={(e)=>{e.preventDefault();handleComplete(Number(item.id))}}>Complete</button>
                                    </div></td>

                                </tr>)
                        })
                    }


                </tbody>
            </table>
        </div>
    </div>
    )
}

export default AssignedTasks
