import { TASK_DETAIL_SUCCES,TASK_DETAIL_FAIL} from '../constants/Types'
import axios from 'axios'
export const TaskDetailAction = (id) => (dispatch)=>{
    const headers={
        'Authorization':  `Bearer ${localStorage.getItem('jwtToken')}` 
      }
    axios.get(`http://localhost:5000/api/task/${id}`, {
        headers:headers
    })
    .then((response) =>{
         console.log(response.data.payload);
        dispatch({type: TASK_DETAIL_SUCCES, payload:response.data})

    }).catch((error)=>{
        dispatch({type: TASK_DETAIL_FAIL, payload:error})

    })
}