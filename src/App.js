import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const App = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{props.heading}</h1>
      <p>{counter}</p>
      <ButtonGroup aria-label="Basic example">
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
          variant="outline-primary"
        >
          +1
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -1
        </Button>
      </ButtonGroup>
    </>
  );
};
export default App;
