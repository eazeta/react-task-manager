import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Cycling with Josh',
			day: 'November 13th at 1:30pm',
		},
		{
			id: 2,
			text: 'Dentist Appointment',
			day: 'November 8th at 2:30pm',
		},
	]);

	// Add Task
	const addTask = task => {
		const id = tasks.length + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
		console.log(id);
	};

	// Delete Task
	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	return (
		<div className='container'>
			<Header
				name='Emmanuel'
				onAdd={() => setShowAddTask(!showAddTask)}
				showAddButton={showAddTask}
			/>
			{showAddTask ? <AddTask onAdd={addTask} /> : 'Click add to add a new task'}
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : ' '}
		</div>
	);
}

export default App;
