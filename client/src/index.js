import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware, combineReducers} from 'redux'
import {Provider}from 'react-redux'
import thunk from "redux-thunk"
import loginReducers from './components/login/reducers/loginReducers'
import homeReducers from './components/Home/reducers/HomeReducers';
import myTaskReducer from './components/MyTasks/reducers/myTaskReducer';
import TaskDetailReducer from './components/TaskDetail/reducers/TaskDetailReducer';
import CreateNewTaskReducer from './components/CreateNewTask/reducers/CreateNewTaskReducer';
import AssignedTasksReducer from './components/AssignedTasks/reducers/AssingedTaksReducer';
const store =createStore(
  combineReducers({loginReducers,homeReducers,myTaskReducer,TaskDetailReducer,CreateNewTaskReducer,AssignedTasksReducer}),
  applyMiddleware(thunk)
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
