import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            onAddTask(description);
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a new task"
                className="flex-grow p-2 border rounded-l-lg"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
            >
                Add Task
            </button>
        </form>
    );
};

export default AddTask;