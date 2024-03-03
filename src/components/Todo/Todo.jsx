import { Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from "./Todo.module.css";
import { useDispatch } from 'react-redux';
import { addCurrentTodo, deleteTodo } from '../../redux/todoSlice';

export const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {index + 1}
      </Text>

      <Text>{todo.text}</Text>
      <button className={style.deleteButton} type="button" onClick={handleDelete}>
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button" onClick={() => dispatch(addCurrentTodo(todo))}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
