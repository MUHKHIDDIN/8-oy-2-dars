import React, { useState } from "react";
import { useTodo } from "../Store/todo";

export const TodoList = () => {
  const { data, addTodo, editTodo, deleteTodo } = useTodo((state) => state);
  const [todo, setTodo] = useState(""); 
  const [isEditing, setIsEditing] = useState(false); 
  const [currentIndex, setCurrentIndex] = useState(null); 

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim()) {
      if (isEditing) {
        editTodo(currentIndex, todo); 
        setIsEditing(false); 
        setCurrentIndex(null); 
      } else {
        addTodo({ name: todo }); 
      }
      setTodo(""); 
    }
  };

  const handleEditTodo = (index) => {
    setCurrentIndex(index); 
    setTodo(data[index].name); 
    setIsEditing(true); 
  };

  const handleDeleteTodo = (index) => {
    deleteTodo(index); 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Todo List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={todo}
          onChange={handleInputChange}
          placeholder="Enter todo"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddTodo}
          className={`ml-2 px-4 py-2 font-semibold text-white rounded-md ${
            isEditing ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
          } transition duration-300`}
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-sm"
          >
            <h1 className="text-lg">{item.name}</h1>
            <div className="space-x-2">
              <button
                onClick={() => handleEditTodo(index)}
                className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
