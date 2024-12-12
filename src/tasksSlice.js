import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    filter: 'all'
  },
  reducers: {
    addTask: {
      reducer: (state, action) => {
        const newTask = action.payload;
        if (newTask && newTask.description && newTask.description.trim()) {
          state.items.push(newTask);
        }
      },
      prepare: (description) => ({
        payload: {
          id: nanoid(),
          description: description.trim(),
          isDone: false
        }
      })
    },
    toggleTask: (state, action) => {
      const task = state.items.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.items.find(task => task.id === id);
      if (task && description && description.trim()) {
        task.description = description.trim();
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const {
  addTask,
  toggleTask,
  editTask,
  deleteTask,
  setFilter
} = tasksSlice.actions;

export default tasksSlice.reducer;