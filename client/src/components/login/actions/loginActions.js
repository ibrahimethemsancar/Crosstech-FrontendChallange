import {LOGIN_FAIL,LOGIN_SUCCES} from "../constants/loginActionTypes"
import axios from 'axios'

export const loginAction=(email)=>(dispatch)=>{

    axios.post("http://localhost:5000/api/auth/login",{
        email
    }).then((response)=>{
        const jwtToken=response.data.payload.jwtToken;
        localStorage.setItem("jwtToken",jwtToken);
        const userName=response.data.payload.name;
        localStorage.setItem("userName",userName)
        dispatch({type:LOGIN_SUCCES,payload:response.data})
        //console.log(localStorage.getItem("jwtToken"))
    })
    .catch((error)=>{
        dispatch({type:LOGIN_FAIL,payload:"Wrong Email!"})
    })
}