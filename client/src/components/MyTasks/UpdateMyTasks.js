import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateMyTasks } from './actions/myTasksAction'
import Header from '../Header/Header'
function UpdateMyTasks() {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('')
    const dispatch = useDispatch()
    let { id } = useParams()
    //console.log(id)
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(updateMyTasks(id,title,description))
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
            
            <button className='btn btn-primary newTaskBtn'>Save</button>
            </form>
        </div>
        </div>
    )
}

export default UpdateMyTasks
