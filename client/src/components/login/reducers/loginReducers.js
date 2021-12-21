import { LOGIN_FAIL, LOGIN_SUCCES}from "../constants/loginActionTypes"

const loginState={
    isLoggedIn:false,
    code:"",
    payload:{
        name:"",
        email:"",
        id:null,
        deparment:null,
        jwtToken:"",

    }
}

const loginReducer=(state=loginState,action)=>{
    switch(action.type){
        case LOGIN_SUCCES:
            return{
                ...state,
                isLoggedIn:true,
                code:action.code,
                payload:action.payload
            }
            case LOGIN_FAIL:
                return{
                    ...state,
                    code:action.payload
                }
                default:
                    return{
                        ...state
                    }
    }
}

export default loginReducer;