import {GET_MY_TASK_FAIL,GET_MY_TASK_SUCCES,DELETE_MY_TASK,UPDATE_MY_TASK} from '../constants/Types'
import axios from 'axios'

export const myTasksAction = () => (dispatch)=>{
    const headers={
        'Authorization':  `Bearer ${localStorage.getItem('jwtToken')}` 
      }
    axios
    .get (`http://localhost:5000/api/task/my-tasks`, {
        headers:headers
    })
    .then((response) =>{
         console.log(response.data.payload);
        dispatch({type: GET_MY_TASK_SUCCES, payload:response.data})

    }).catch((error)=>{
        dispatch({type: GET_MY_TASK_FAIL, payload:error})

    })
}
export const deleteMyTask=(id)=>(dispatch)=>{
    const headers={
        'Authorization':  `Bearer ${localStorage.getItem('jwtToken')}` 
      }
    axios.delete(`http://localhost:5000/api/task/${id}`, {
        headers:headers
    })
    .then((response) =>{
         console.log(response.data.payload.id);
        dispatch({type: DELETE_MY_TASK, payload:response.data})

    })
}

export const updateMyTasks=(id,title,description)=>(dispatch)=>{
    const headers={
        'Authorization':  `Bearer ${localStorage.getItem('jwtToken')}` 
      }
    axios.put(`http://localhost:5000/api/task/${id}`,{title,description}, {
        headers:headers
    })
    .then((response) =>{
         console.log(response.data.payload.id);
        dispatch({type: UPDATE_MY_TASK, payload:response.data})

    })
}







// .then((response) =>{
//      console.log(response.data.payload);
//     dispatch({type: DELETE_MY_TASK, payload:response.data})