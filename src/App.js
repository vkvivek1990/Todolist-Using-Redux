import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {store} from './store/Store.js';
import {ADDTODO,REMOVETODO} from './actions/actions';

window.store= store;
window.REMOVETODO = REMOVETODO;


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todo:'',
      TodoList:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.todoAddfun = this.todoAddfun.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  
  
  handleChange(e){
    this.setState({todo:e.target.value})
  }

  todoAddfun(e){
    store.dispatch(ADDTODO({name:this.state.todo}));
    //console.log('bb',store.getState());
    this.setState({TodoList:store.getState()})
    //store.subscribe(()=>(console.log('Triggerd..',store.getState())));
    //console.log('Current State...',store.getstate());
  }

  removeTodo(e){
    store.dispatch(REMOVETODO(e));
    this.setState({TodoList:store.getState()})
    console.log('Key',e);
  }

  

  render() {
    const  articles = store.getState();    
    //const  todolist = this.state.TodoList;
    //todolist = todolist.TodoList;
    //console.log(todolist.TodoList);
    return (      
      <div className="App">       
        <p>TodoList</p>
        <input type="text" value={this.state.todo} onChange={this.handleChange}/>
        <button onClick={this.todoAddfun}> ADD </button>
        <ul className="ulTodo">
          {
            articles.TodoList.map((item,key)=>{
              return <li  className="todoList" key={key}>{item.name} <a onClick={ () => this.removeTodo(key) } href="#" ><span className="close">X</span></a></li>
            })
          } 
        </ul>       
      </div>
    );
  }
}

export default App;
