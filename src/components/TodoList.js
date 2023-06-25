import React, { useEffect, useState } from 'react'
import CreateTask from '../modals/createTask'
import { Button } from 'reactstrap';
import Card from './Card'

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(()=> {
    let arr = localStorage.getItem("taskList")
    if(arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, []);

  const deleteTask = (index) => {
    console.log(index,"index")
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const updateListArray = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const showModal = () =>{
    setModal(true);
  }

  const toggle = () => {
    setModal(!modal);
  }

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(taskList)
    setModal(false)
  }

  const task = localStorage.getItem('taskList');

  useEffect(()=>{console.log(JSON.parse(task),"task #")},[task])

  return (
    <>
    <div className='header text-center'>
         <h3>Todo List</h3>
         <Button className='btn btn-primary mt-2' onClick={showModal}>Create Task</Button>
    </div>
    <div className='task-container'>
      {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} 
      deleteTask={deleteTask} updateListArray={updateListArray}/> )}
    </div>
    <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    </>
    
  );
};

export default TodoList;
