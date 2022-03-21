import React, { useState } from "react";
import "./App.css";
import { Archive } from "./Components/Archive";
import { ToDo } from "./Components/ToDo";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

// defining the App component 
function App() {
	const [toDos, setToDos] = useState([
		{
			text: "Make to do list",
			isDone: true,
		},
	]);

	const addToDo = (text) => {
		const newToDos = [...toDos, { text }];
		setToDos(newToDos);
	};

	const checkToDo = (index) => {
		const newToDos = [...toDos];
		newToDos[index].isDone = true;
		setToDos(newToDos);
	};

	// Splice used to return array elements 
	const deleteToDo = (index) => {
		const newToDos = [...toDos];
		newToDos.splice(index, 1);
		setToDos(newToDos);
	};

	return (
		<div className="app">
			<div className="app-content">
				<div className="form">
				<h2>TO DO LIST</h2>
					<Archive addToDo={addToDo} />
				</div>

				<div className="toDo-list">
					<div className="toDo-bar">
						{toDos.map((toDo, index) => (
							<div>
								<ToDo
									key={index}
									index={index}
									toDo={toDo}
									checkToDo={checkToDo}
									deleteToDo={deleteToDo}
								/>
							</div>
						))}
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default App;
