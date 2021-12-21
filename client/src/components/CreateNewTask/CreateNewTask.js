import React,{useState} from 'react'
import './CreateNewTask.css'
import {useDispatch} from 'react-redux'
import { CreateNewTaskAction } from './actions/CreateNewTaskAction'
import Header from '../Header/Header'

function CreateNewTask() {
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [assignedDep,setAssingedDep]=useState(null)
    const dispatch=useDispatch()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
       
        dispatch(CreateNewTaskAction(title,description,assignedDep))
        
    }

    return (
        <div>
            <Header/>
        <div className='entryDiv'>
            <form onSubmit={handleSubmit}>
            <label className='label'id='firstLabel'>Title:</label>
            <input className="form-control" type="text" placeholder="title" aria-label="default input example" onChange={(e)=>{setTitle(e.target.value)}}/>
            <label className='label'>Description</label>
            <input className="form-control" type="text" placeholder="description" aria-label="default input example"  onChange={(e)=>{setDescription(e.target.value)}}/>
            <label className='label'>Department</label>
            <input className="form-control" type="number" placeholder="assignedDepartment" aria-label="default input example"  onChange={(e)=>{setAssingedDep(e.target.value)}}/>
            <button className='btn btn-primary newTaskBtn'>Save</button>
            </form>
        </div>
        </div>
        
    )
}

export default CreateNewTask
