import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        addTask(inputValue);
        setInputValue(''); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
