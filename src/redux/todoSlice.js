import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], currentTodo: null };

const slice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },

    deleteTodo: (state, action) => {
      const index = state.items.findIndex(
        todo => todo.id === action.payload.id,
      );
      state.items.splice(index, 1);
    },
    addCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      state.items = state.items.map(item => {
        return item.id === state.currentTodo.id
          ? { text: action.payload, id: state.currentTodo.id }
          : item;
      });
    },
  },
});

export const { addTodo, deleteTodo, addCurrentTodo, updateTodo } = slice.actions;

export const todoReducer = slice.reducer;
