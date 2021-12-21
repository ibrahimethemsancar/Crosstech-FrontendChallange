import { GET_ALL_DEPARTMENT_TASK_FAIL,GET_ALL_DEPARTMENT_TASK_SUCCES } from "../constants/Types";

const initialState = {
 items:[],
  };



  const homeReducers = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_DEPARTMENT_TASK_SUCCES:
        return {
          
         items:[...state.items,action.payload.payload]
        };
      case GET_ALL_DEPARTMENT_TASK_FAIL:
        return {
          ...state,
         
        };
        default:{
  
            return state;
        }
    }
  };
  
  export default homeReducers;