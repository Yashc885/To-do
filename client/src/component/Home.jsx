"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { PencilIcon, TrashIcon, PlusCircleIcon, CheckCircleIcon } from "lucide-react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get("/api/task");
      setTasks(res.data);
      console.log("✅ Tasks fetched: ", res.data);
    } catch (error) {
      console.error("❌ Error fetching tasks: ", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add or Update task
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTaskId) {
        await axios.put(`/api/task/${editingTaskId}`, { title });
        console.log("✅ Task updated successfully");
      } else {
        await axios.post("/api/task", { title });
        console.log("✅ Task added successfully");
      }
      setTitle("");
      setEditingTaskId(null);
      fetchTasks();
    } catch (error) {
      console.error("❌ Error submitting task: ", error);
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/task/${id}`);
      console.log("✅ Task deleted successfully");
      fetchTasks();
    } catch (error) {
      console.error("❌ Error deleting task: ", error);
    }
  };

  // Set task to edit
  const handleEdit = (task) => {
    setTitle(task.title);
    setEditingTaskId(task._id);
  };

  // Reset form
  const handleCancelEdit = () => {
    setTitle("");
    setEditingTaskId(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">My Todo List</h1>

      {/* Task Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter your task..."
          className="flex-1 border rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button
          type="submit"
          className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {editingTaskId ? <CheckCircleIcon size={20} /> : <PlusCircleIcon size={20} />}
          {editingTaskId ? "Update" : "Add"}
        </button>
        {editingTaskId && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="flex items-center gap-1 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Task List */}
      <ul className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
            >
              <span className="truncate">{task.title}</span>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(task)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <PencilIcon size={20} />
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <TrashIcon size={20} />
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">No tasks available</li>
        )}
      </ul>
    </div>
  );
}
