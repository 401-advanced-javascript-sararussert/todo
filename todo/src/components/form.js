import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';


function TodoForm(props) {
  const [item, setItem] = useState({});

  function handleInputChange(e) {
    item[e.target.name]= e.target.value;
    setItem(item);
  };

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  };

  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalTask">
          <Form.Label column sm={2}>
            New Task
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="text" placeholder="Add To Do List Item" onChange={handleInputChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalAssignee">
          <Form.Label column sm={2}>
            Assigned To
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Group>
        <Button type="submit" variant="secondary">Add Task</Button>
      </Form>
    </>
  );
}

export default TodoForm;

