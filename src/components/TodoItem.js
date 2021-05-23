import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';


function TodoItem() {
      return (
          <div className="todo-list">
          <input type="checkbox" />
          <p>Some text here</p>
          </div>
          );
    
  } 
  export default TodoItem
  
  ReactDOM.render(
    <React.StrictMode>
    </React.StrictMode>,
    document.getElementById('root'),
  
  );

  reportWebVitals();