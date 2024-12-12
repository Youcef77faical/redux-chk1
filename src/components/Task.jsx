import React, { useState } from 'react';

const Task = ({ task, onToggle, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);

    const handleEdit = () => {
        if (editedDescription.trim()) {
            onEdit(editedDescription);
            setIsEditing(false);
        }
    };

    return (
        <div className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={onToggle}
                    className="mr-2"
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        className="flex-grow p-1 border rounded"
                    />
                ) : (
                    <span className={`${task.isDone ? 'line-through text-gray-500' : ''}`}>
                        {task.description}
                    </span>
                )}
            </div>
            <div>
                {isEditing ? (
                    <button
                        onClick={handleEdit}
                        className="mr-2 text-green-500 hover:text-green-700"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="mr-2 text-blue-500 hover:text-blue-700"
                    >
                        Edit
                    </button>
                )}
                <button
                    onClick={onDelete}
                    className="text-red-500 hover:text-red-700"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Task;