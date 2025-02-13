import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/taskSlice";

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskProps> = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center p-2 border-b">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTask(id))}
      />
      <span className={completed ? "line-through text-gray-500" : ""}>
        {title}
      </span>
      <button
        className="btn btn-danger btn-sm mx-2"
        onClick={() => dispatch(deleteTask(id))}
      >
        X
      </button>
    </li>
  );
};

export default TaskItem;
