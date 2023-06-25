import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
// import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css"

function App() {
  return (
    <div className='App'>
      <TodoList/>
    </div>
  );
}

export default App;
