import React from 'react'

function Random(props) {

    const style= {
        border: "2px solid rgb(31, 29, 29)",
        borderRadius: "10px",
        padding: "20px",
        margin:"20px",
        textAlign: "center",
        backgroundColor: "rgb(228, 228, 250)",

    };
  return (
    <div style={style}>Random value between {props.min} and {props.max} = {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}
    </div>
  )
}

export default Random