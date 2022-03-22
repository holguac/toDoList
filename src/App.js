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
			<svg viewBox="0 0 1440 319">
				 	<path fill="white" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
			</svg>
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
