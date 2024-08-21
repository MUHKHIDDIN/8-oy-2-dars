import create from "zustand";

export const useTodo = create((set) => ({
  data: [],
  addTodo: (newTodo) =>
    set((state) => ({
      data: [...state.data, newTodo],
    })),
  editTodo: (index, updatedTodo) =>
    set((state) => {
      const newData = [...state.data];
      newData[index] = { ...newData[index], name: updatedTodo };
      return { data: newData };
    }),
  deleteTodo: (index) =>
    set((state) => {
      const newData = state.data.filter((_, i) => i !== index);
      return { data: newData };
    }),
}));
