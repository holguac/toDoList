
   
import React from "react";
import { useState } from "react";


export const ToDo = ({ toDo, index, checkToDo, deleteToDo }) => {
  return (
    <div className="ToDo" style={{ backgroundColor: toDo.isDone ? "" : "" }}>
      <div className="toDo-item-left">
        <button id="button-check" onClick={() => checkToDo(index)} style={{ color: toDo.isDone ? "black" : "" }}>DONE</button>{" "}
      <span className="toDo-item-text" style={{ textDecoration: toDo.isDone ? "line-through" : "", color: toDo.isDone ? "black" : "" }}>
        {toDo.text}
      </span>
      </div>
      
      <div>
        <button id="button-delete" onClick={() => deleteToDo(index)} style={{ color: toDo.isDone ? "black" : "" }}>DELETE</button>
      </div>
    </div>
  );
};


