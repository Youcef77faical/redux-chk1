import React from 'react';
import Task from './Task';

const ListTask = ({
    tasks = [],
    filter = 'all',
    onSetFilter,
    onToggleTask,
    onEditTask,
    onDeleteTask
}) => {

    const safeOnSetFilter = onSetFilter || (() => { });
    const safeOnToggleTask = onToggleTask || (() => { });
    const safeOnEditTask = onEditTask || (() => { });
    const safeOnDeleteTask = onDeleteTask || (() => { });

    const filteredTasks = tasks.filter(task => {
        if (!task) return false;
        if (filter === 'active') return !task.isDone;
        if (filter === 'completed') return task.isDone;
        return true;
    });

    return (
        <div>
            <div className="flex mb-4">
                <button
                    onClick={() => safeOnSetFilter('all')}
                    className={`mr-2 p-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    All
                </button>
                <button
                    onClick={() => safeOnSetFilter('active')}
                    className={`mr-2 p-2 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Active
                </button>
                <button
                    onClick={() => safeOnSetFilter('completed')}
                    className={`p-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Completed
                </button>
            </div>
            {filteredTasks.length > 0 ? (
                filteredTasks.map(task => task && (
                    <Task
                        key={task.id}
                        task={task}
                        onToggle={() => safeOnToggleTask(task.id)}
                        onEdit={(newDescription) => safeOnEditTask(task.id, newDescription)}
                        onDelete={() => safeOnDeleteTask(task.id)}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500">No tasks found</p>
            )}
        </div>
    );
};

export default ListTask;