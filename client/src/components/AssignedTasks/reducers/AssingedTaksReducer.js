import { ASSIGNED_TASKS_SUCCES,REJECT_ASSIGNED_TASKS,COMPLETE_ASSIGNED_TASKS } from "../constants/Types";

const initialState = {
 items:[],
  };



  const AssignedTasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ASSIGNED_TASKS_SUCCES:
        return {
          
         items:[...state.items,action.payload.payload]
        };
      case REJECT_ASSIGNED_TASKS:
        return {
            ...state,
          items:[...state.items,action.payload.payload]
         
        };
        case COMPLETE_ASSIGNED_TASKS:
        return {
            ...state,
          items:[...state.items,action.payload.payload]
         
        };
        default:{
  
            return state;
        }
    }
  };
  
  export default AssignedTasksReducer;