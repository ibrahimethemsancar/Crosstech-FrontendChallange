import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { homeActions } from './actions/HomeActions'
import './Home.css'
import {Link,NavLink} from 'react-router-dom'
import Header from '../Header/Header'



function Home() {
    const dispatch = useDispatch()
   
    const allDepartmentsTask = useSelector((state) => state.homeReducers.items[0])
   
    console.log(allDepartmentsTask)
    useEffect(() => {
        dispatch(homeActions())
        console.log(localStorage.getItem('jwtToken'))
    }, [])
    const department=(dep)=>{
        switch (dep) {
            case 1:
                return('Human Resources Department')
            case 2:
                return('Sales Department')
            case 3:
                return('Marketing Department')
        
         
        }
    }
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
    return (
        <div>
            <Header/>

            <div>
                <h3 className='taskHeader'>All Tasks</h3>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Assigned Department</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {   
                            allDepartmentsTask?.map((item, index) => {
                                return(
                                   
                                <tr key={index}>
                                    
                                    <Link to={`/Home/${item.id}`}><th scope="row">{item.id}</th></Link>
                                    <td>{item.title}</td>
                                    <td>{department(Number(item.assignedDepartment))}</td>
                                    <td>{status(item.status)}</td>
                                    
                                </tr> )
                            })
                        }


                    </tbody>
                </table>
            </div>
          
        </div>
    )
}

export default Home
