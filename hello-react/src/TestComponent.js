import React from 'react'

const TestComponent = (props) => (  
    <div className="test">
        <h1>{props.age}</h1> 
        <button onClick={props.onClick}></button>
    </div>
);

export default TestComponent;