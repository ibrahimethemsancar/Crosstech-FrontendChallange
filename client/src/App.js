import React from "react";
import Login from './components/login/Login'
import Home from './components/Home/Home'
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  useHistory,
  Navigate
} from "react-router-dom";
import TaskDetail from "./components/TaskDetail/TaskDetail";
import MyTasks from "./components/MyTasks/MyTasks";
import CreateNewTask from "./components/CreateNewTask/CreateNewTask";
import AssignedTasks from "./components/AssignedTasks/AssignedTasks";
import Header from "./components/Header/Header";
import {NavLink,Link} from'react-router-dom'
import UpdateMyTasks from "./components/MyTasks/UpdateMyTasks";
function App() {
  const token = localStorage.getItem("jwtToken")
  const username = useSelector((state) => state.loginReducers.payload.name)
  return (


    <Router>
     
      
      <Routes>
      
        <Route
          exact
          path="/"
          element={<Login />}
        />
        <Route
          path="/Home"
          element={<Home />}
        />

        <Route
          exact
          path="/Home/:id"
          element={<TaskDetail />}
        />
         <Route
          exact
          path="/MyTasks"
          element={<MyTasks />}
        />
         <Route
          exact
          path="/UpdateMyTasks/:id"
          element={<UpdateMyTasks />}
        />
         <Route
          exact
          path="/CreateNewTask"
          element={<CreateNewTask />}
        />
         <Route
          exact
          path="/AssignedTasks"
          element={<AssignedTasks />}
        />
      </Routes>
    </Router>
  );
}

export default App;
