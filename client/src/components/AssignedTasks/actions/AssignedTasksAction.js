import {ASSIGNED_TASKS_SUCCES,REJECT_ASSIGNED_TASKS,COMPLETE_ASSIGNED_TASKS } from '../constants/Types'
import axios from 'axios'
export const AssignedTasksAction = () => (dispatch)=>{
    const headers={
        'Authorization':  `Bearer ${localStorage.getItem('jwtToken')}` 
      }
    axios.get("http://localhost:5000/api/task/pendings", {
        headers:headers
    })
    .then((response) =>{
         console.log(response.data.payload);
        dispatch({type: ASSIGNED_TASKS_SUCCES, payload:response.data})

    })
}

export const RejectAssignedTask = (id) => (dispatch)=>{
    const headers={
        'Authorization':  `Bearer ${localStorage.getItem('jwtToken')}` 
      }
    axios.get(`http://localhost:5000/api/task/reject/${id}`, {
        headers:headers
    })
    .then((response) =>{
         console.log(response.data.payload.status);
        dispatch({type: REJECT_ASSIGNED_TASKS, payload:response.data})

    })
}

export const CompleteAssignedTask = (id) => (dispatch)=>{
    const headers={
        'Authorization':  `Bearer ${localStorage.getItem('jwtToken')}` 
      }
    axios.get(`http://localhost:5000/api/task/complete/${id}`, {
        headers:headers
    })
    .then((response) =>{
         console.log(response.data.payload.status);
        dispatch({type: COMPLETE_ASSIGNED_TASKS, payload:response.data})

    })
}
