import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setTasks } from "../redux/taskSlice";
import { fetchTasks } from "../api/taskService";
import { RootState } from "../redux/store";
import TaskList from "../components/TaskList";

const TaskPage: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    const fetchData = async () => {
      const tasks = await fetchTasks();
      dispatch(setTasks(tasks));
    };
    fetchData();
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask(taskTitle));
      setTaskTitle("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold">Task Manager</h1>
      <div className="flex gap-2 my-4">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Enter Task..."
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div className="filter-group">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default TaskPage;
