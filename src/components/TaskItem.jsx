import React from "react";
import {TrashIcon} from '@heroicons/react/outline'

function TaskItem( {task, handleDelete }) {

    return (
      <div className="flex bg-teal-100 p-2 border-4 border-gray-300 rounded-md">
        <div className="flex-1">{task.text}</div>
        <button
          className="bg-blue-800 p-2 rounded-md" onClick={() => handleDelete(task.id)}
        >
          <TrashIcon
            height={24}
            color="white"
            />
        </button>
      </div>
    );
}

export default TaskItem;