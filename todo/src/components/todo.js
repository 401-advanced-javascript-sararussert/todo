import React from 'react';
import { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
const axios = require('axios');

const todoAPI = 'http://localhost:3001/todo';

function ToDo() {

  const [list, setList] = useState([
    { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
    { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
    { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
    { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
    { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
  ]);

  const [id, setId] = useState(6);
  
  function addItem(item) {
    item.due = new Date();
    item._id = id;
    setId(id + 1);
    item.complete = false;

    axios({
      method: 'post',
      url: todoAPI,
      data: item
      
    }).then(results => console.log(results.data));


    // let soup = [];
    // list.forEach(item => soup.push(item))
    // soup.push(item);
    // setList(soup);
    // console.log(soup);
  }

  function toggleComplete(id) {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let mappedList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(mappedList);
    }
  }

  async function getTodoItems() {
    try {
      const response = await axios(todoAPI);
      setList(response.data);
    } catch (error) {
      console.error(error);
    }
  }




  useEffect(() => {
  }, []);

  return (
    <>
      <header>
        <h2>
        There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </div>
      </section>
    </>
  );
}

export default ToDo;

