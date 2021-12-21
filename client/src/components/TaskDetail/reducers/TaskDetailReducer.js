import { TASK_DETAIL_SUCCES,TASK_DETAIL_FAIL} from "../constants/Types";

const initialState = {
 items:[],
  };



  const TaskDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case TASK_DETAIL_SUCCES:
        return {
          
         items:[action.payload.payload]
        };
      case TASK_DETAIL_FAIL:
        return {
          ...state,
         
        };
        default:{
  
            return state;
        }
    }
  };
  
  export default TaskDetailReducer;