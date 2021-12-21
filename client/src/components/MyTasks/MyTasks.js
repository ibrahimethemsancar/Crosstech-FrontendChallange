import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { myTasksAction,deleteMyTask } from './actions/myTasksAction'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
function MyTasks() {
   // const [id,setId]=useState(null)
    const dispatch = useDispatch()
    const getMyTasks = useSelector((state) => state.myTaskReducer.items[0])
    console.log(getMyTasks)
    useEffect(() => {
        dispatch(myTasksAction())
    }, [dispatch])
    const department = (dep) => {
        switch (dep) {
            case 1:
                return ('Human Resources Department')
            case 2:
                return ('Sales Department')
            case 3:
                return ('Marketing Department')


        }
    }
        const handleDelete=(id)=>{
            dispatch(deleteMyTask(id))
            
        }
        const handleUpdate=(id)=>{
            
        }
       // console.log(id)
    return (
        <div>
            <Header/>
            <div>
                <h3 className='tasksHeader'>My Tasks</h3>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Assigned Department</th>
                            <th scope="col">Process</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            getMyTasks?.map((item, index) => {
                                return (

                                    <tr key={index} >

                                        <th scope="row">{item.id}</th>
                                        <td>{item.title}</td>
                                        <td>{department(Number(item.assignedDepartment))}</td>
                                        <td><div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                            <button type="button" className="btn btn-danger" onClick={(e)=>{e.preventDefault();handleDelete(item.id)}} >Delete</button>
                                            
                                           <button type="button" className="btn btn-success"
                                            onClick={(e)=>{e.preventDefault()}}> <Link to={`/UpdateMyTasks/${item.id}`} className='link'>Update</Link></button>
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

export default MyTasks
