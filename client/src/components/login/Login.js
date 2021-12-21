import React, { useState } from 'react'
import './Login.css'
import {useDispatch} from 'react-redux'
import {loginAction} from './actions/loginActions'
import {useNavigate} from 'react-router-dom'
export default function Login() {
    const dispatch=useDispatch()
    const[email,setEmail]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(loginAction(email))
        if(email==''){
            alert('Please enter a valid email adress')
        }
        else if(localStorage.getItem('jwtToken')){
            navigate('/Home')
            
        }
    }
    return (
        <div className='loginDiv' >
            <img src="https://media-exp1.licdn.com/dms/image/C561BAQFQiEN0z2FaXQ/company-background_10000/0/1569827861772?e=2159024400&v=beta&t=EZpn3YMJnO4iu-G86b72WdCFrgk-PkXe-hvuVuI2e0A" alt="" className='loginImg' />
            <form className='loginForm' onSubmit={handleSubmit}>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
                        
                </div>

                <button type="submit" className="btn btn-primary submitBtn">Submit</button>
            </form>
        </div>
    )
}
