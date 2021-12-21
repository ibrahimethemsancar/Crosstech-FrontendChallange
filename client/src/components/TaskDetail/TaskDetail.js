import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { TaskDetailAction } from './actions/TaskDetailAction'
function TaskDetail() {
    const dispatch = useDispatch()
    let { id } = useParams()

    useEffect(async () => {
        await dispatch(TaskDetailAction(Number(id)))
    }, [])

    const getTaskDetail = useSelector((state) => state.TaskDetailReducer.items)
    console.log(getTaskDetail)


    const department = (dep) => {
        switch (dep) {
            case 1:
                return ('Human Resources Department')
            case 2:
                return ('Sales Department')
            case 3:
                return ('Marketing Department')


        }
    }
    const status = (stat) => {
        switch (stat) {
            case 0:
                return ('Pending')
            case 1:
                return ('Compeleted')
            case 2:
                return ('Rejected')


        }
    }
    return (
        <div>
            <h3>Task Detail</h3>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Assigned Department</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created by</th>

                    </tr>
                </thead>
                <tbody>
                    <tr >

                        {getTaskDetail && <>
                        <th scope="row">{getTaskDetail[0]?.id}</th>
                        <td>{getTaskDetail[0]?.title}</td>
                        <td>{department(getTaskDetail[0]?.assignedDepartment)}</td>
                        <td>{getTaskDetail[0]?.description}</td>
                        <td>{status(getTaskDetail[0]?.status)}</td>
                        <td>{getTaskDetail[0]?.logs[0]?.userName} at {getTaskDetail[0]?.logs[0]?.date}</td></>}

                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default TaskDetail
