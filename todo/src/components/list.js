import React from 'react';
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'

function TodoList(props) {

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
  
  return(
    <div>
        {props.list.map(item => (
          <Toast
            className={`complete-${item.complete.toString()}`}
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

{/* <Toast>
  <Toast.Header onClose={}>
    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
    <strong className="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast> */}