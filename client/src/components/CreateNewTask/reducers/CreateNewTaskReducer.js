import { CREATE_NEW_TASK_FAIL,CREATE_NEW_TASK_SUCCES,DELETE_MY_TASK} from "../constants/Types";

const initialState = {
 items:[],
  };



  const CreateNewTaskReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_NEW_TASK_SUCCES:
        return {
          
         items:[...state.items,action.payload.payload]
        };
      case CREATE_NEW_TASK_FAIL:
        return {
          ...state,
         
        };
        default:{
  
            return state;
        }
    }
  };
  
  export default CreateNewTaskReducer;