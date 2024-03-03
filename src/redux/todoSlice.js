import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: { items: [] } };

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
  },
});

export const { addTodo, deleteTodo } = slice.actions;

export const todoReducer = slice.reducer;
