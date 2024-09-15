import React from 'react';
import ToDoList from './ToDoList';
import 'bulma/css/bulma.min.css';
import  "./App.css";

function App() {
  return (
    <header className='App-header' >
      <div className='lista'><ToDoList /></div>
      
    </header>
  );
}

export default App;
