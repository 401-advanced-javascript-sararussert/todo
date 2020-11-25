import React from 'react';
import { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
const axios = require('axios');

const todoAPI = 'http://localhost:3001/todo';


const ToDo = () => {

  const [list, setList] = useState([]);
  const [id, setId] = useState(Math.floor(Math.random()*100));

  const _addItem = (item) => {
    item.due = new Date();
    item._id = id;
    setId(id + 1);
    item.complete = false;
    console.log(item);
    axios({
      method: 'post',
      url: todoAPI,
      data: item
      
    }).then(results => {setList([...list, results.data])
    }).catch(error => console.log(error));
    
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let paramUrl = `${todoAPI}/${id}`;

      axios({
        method: 'put',
        url: paramUrl,
        data: item
      })
      .then(function (response) {
        console.log(response);
        setList(list.map(listItem => listItem._id === item._id ? item : listItem));
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  };

  const _deleteItem = (id) => {
    let paramUrl = `${todoAPI}/${id}`;
    axios({
      method: 'delete',
      url: paramUrl
    })
    .then(function (response) {
      let newList = []
      list.forEach(listItem => {
        if (listItem._id !== id) {
          newList.push(listItem);
        }
      });
      setList(newList);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const _getTodoItems = () => {
    axios.get(todoAPI)
      .then(function (response) {
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;