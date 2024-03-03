import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTodo } from '../../redux/todoSlice';

export const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();


  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: nanoid(5),
      text: inputValue,
    };
    dispatch(addTodo(todo));
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        onChange={handleInput}
        value={inputValue}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
