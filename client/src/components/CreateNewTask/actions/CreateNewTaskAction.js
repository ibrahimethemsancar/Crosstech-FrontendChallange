import {CREATE_NEW_TASK_SUCCES,CREATE_NEW_TASK_FAIL } from '../constants/Types'
import axios from 'axios'
export const CreateNewTaskAction = (title, description, assignedDepartment) => (dispatch)=>{
    const headers={
        'Authorization':  `Bearer ${localStorage.getItem('jwtToken')}` 
      }
    axios.post("http://localhost:5000/api/task",{title,description,assignedDepartment}, {
        headers:headers
    })
    .then((response) =>{
         console.log(response.data.payload);
        dispatch({type: CREATE_NEW_TASK_SUCCES, payload:response.data})

    }).catch((error)=>{
        dispatch({type: CREATE_NEW_TASK_FAIL, payload:error})

    })
}

