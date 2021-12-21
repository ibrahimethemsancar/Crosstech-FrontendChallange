import React, { useEffect, useState } from 'react'

import {Link,NavLink,useNavigate} from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userName');
        navigate('/')

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to={'/Home'} className='link'><a className="nav-link " href="#">Home </a></NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to={'/MyTasks'} className='link'> <a className="nav-link" href="#">My Tasks</a></NavLink>
                        </li>
                        <li className="nav-item">
                        <Link to={'/CreateNewTask'} className='link'> <a className="nav-link" href="#">Create A New Task</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/AssignedTasks'} className='link'><a className="nav-link" href="#">Assigned Tasks</a></Link>
                        </li>
                    </ul>
                    <span className='userName' >{localStorage.getItem('userName')}</span>
                    <button className='btn btn-danger logOutBtn' onClick={handleLogOut}> Log Out</button>
                </div>
            </nav>
    )
}

export default Header
