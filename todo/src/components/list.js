import React from 'react';
import { useContext } from 'react';
import { SiteContext } from '../context/site.jsx';
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'

function TodoList(props) {

  const siteContext = useContext(SiteContext);

  function itemCompleteHead(item) {
    if (item.complete === true) {
      return <Button type="submit" size="sm" variant="outline-success"><span onClick={() => props.handleComplete(item._id)}>Complete</span></Button>;
    } else {
      return <Button type="submit" size="sm" variant="outline-danger"><span onClick={() => props.handleComplete(item._id)}>Pending</span></Button>;
    }
  }
  function itemCompleteBody(item) {
    if (item.complete === true) {
      return 'Item complete: ';
    } else {
      return 'Item to be completed: ';
    }
  }

  function setClass(item) {
    if (siteContext.showCompleted === true) {
      return 'none'
    } else {
      return `complete-${item.complete.toString()}`;
    }
  }

  // function limitEntries(array) {
  //   let entries = siteContext.listSize;
  //   let pages = Math.ceil(array.length/entries);
  //   let pageRange = [];
  //   let arrayCount = 0;
  //   for (let i = 0; i < pages; i++) {
  //     let innerArray = [];
  //     if (arrayCount < array.length) {
  //       innerArray.push(array[arrayCount]);
  //     }
  //     if (arrayCount < array.length) {
  //       innerArray.push(array[arrayCount + 1]);
  //     }
  //     if (arrayCount < array.length) {
  //       innerArray.push(array[arrayCount + 2]);
  //     }
  //     pageRange.push(innerArray);
  //     arrayCount += 3;
  //   }
  //   return pageRange;
  // }

  // let pages = limitEntries(props.list);
  // let page1 = pages[0]
  
  return(
    <div>
        <button onClick={() => siteContext.toggleComplete()}>{siteContext.toggleMsg}</button>
        {props.list.map(item => (
          <Toast
            className={setClass(item)}
            key={item._id} onClose={() => props.handleDelete(item._id)}>
            <Toast.Header closeButton="true">
              <small>{itemCompleteHead(item)}</small>
              <strong className="mr-auto">{item.assignee}</strong>
            </Toast.Header>
            <Toast.Body>
                {itemCompleteBody(item)}
                {item.text}
                
            </Toast.Body>
            <Toast.Body>
                <small>Difficulty: {item.difficulty}</small>
            </Toast.Body>
          </Toast>
        ))}
      </div>
    
  )
}

export default TodoList;
