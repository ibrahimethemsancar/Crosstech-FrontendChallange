import { GET_MY_TASK_FAIL,GET_MY_TASK_SUCCES,DELETE_MY_TASK,UPDATE_MY_TASK} from '../constants/Types'
const initialState = {
   items:[],
  };



  const myTaskReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MY_TASK_SUCCES:
        return {
        items:[...state.items,action.payload.payload]
        };
      case GET_MY_TASK_FAIL:
        return {
          ...state
        };
        case DELETE_MY_TASK:
            return{
                ...state,
                items:[...state.items]
            }
            case UPDATE_MY_TASK:
            return{
                ...state,
                items:[...state.items]
            }
        default:{
  
            return state;
        }
    }
  };
  
  export default myTaskReducer;