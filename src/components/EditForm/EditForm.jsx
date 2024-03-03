import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { selectCurrentTodo } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';


import style from './EditForm.module.css';
import { addCurrentTodo, updateTodo } from '../../redux/todoSlice';

export const EditForm = () => {
  const currTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {value} = e.target.elements.text;
    dispatch(updateTodo(value));
    dispatch(addCurrentTodo(null));
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={() => dispatch(addCurrentTodo(null))}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};

