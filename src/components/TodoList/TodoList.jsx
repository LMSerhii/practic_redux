import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/selectors';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <div>
        <Grid>
          {todos.map((todo, index) => {
            return (
              <GridItem key={todo.id}>
                <Todo todo={todo} index={index}/>
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
