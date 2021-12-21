import {GET_ALL_DEPARTMENT_TASK_FAIL,GET_ALL_DEPARTMENT_TASK_SUCCES } from '../constants/Types'
import axios from 'axios'
export const homeActions = () => (dispatch)=>{
    const headers={
        'Authorization':  `Bearer ${localStorage.getItem('jwtToken')}` 
      }
    axios.get("http://localhost:5000/api/task", {
        headers:headers
    })
    .then((response) =>{
         console.log(response.data.payload);
        dispatch({type: GET_ALL_DEPARTMENT_TASK_SUCCES, payload:response.data})

    }).catch((error)=>{
        dispatch({type: GET_ALL_DEPARTMENT_TASK_FAIL, payload:error})

    })
}