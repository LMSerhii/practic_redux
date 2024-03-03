import { Section, Container, Header, Text, Form, TodoList, EditForm } from 'components';
import { selectCurrentTodo } from './redux/selectors';
import { useSelector } from 'react-redux';
export const App = () => {
  const isEdit = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {/* <Text textAlign="center">Create your first todo😉</Text> */}
          {!isEdit ? <Form /> : <EditForm />}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
