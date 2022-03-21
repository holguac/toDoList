import React, { useState } from "react";

// Export archive.js to be used in app.js file
export const Archive = ({ addToDo }) => {
  // useState hook to state variable inside a function
  const [value, setValue] = useState("");


  const handleSubmit = (i) => {
    // preventDefault used to prevent refreshing of entire webapp
    i.preventDefault();
    if (!value)
      return;
    addToDo(value);
    setValue("");
  };

  // form used to enable user input 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={value}
          onChange={(i) => setValue(i.target.value)}
          placeholder="type here" />
      </div>
      
      <button type="submit" id="form-button">ADD</button>
    </form>
  );
};