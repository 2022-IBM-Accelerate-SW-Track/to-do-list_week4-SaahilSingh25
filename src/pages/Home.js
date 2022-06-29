import React, { Component } from 'react';
import AddTodo from "../component/AddTodo.js";
import Todos from "../component/todos.js";
import "./Home.css";
  
class Home extends Component {
  // A default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos : []
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    const exists = this.state.todos.find(t => t.content === todo.content);
    const dueDate = todo.due;
    if (exists || dueDate == null || dueDate === "Invalid Date") { 
      return;
    }
    else {
      todo.id = Math.random();
      let new_list = [...this.state.todos, todo];
      this.setState({
        todos: new_list,
      });
    }
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Home;