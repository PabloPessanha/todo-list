import React from 'react';
import { Container, ButtonAdd, Title } from './styles/AppStyles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount() {
    const todoList = localStorage.getItem('list');
    if (todoList) {
      this.setState({ todos: JSON.parse(todoList) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { todos } = this.state;
    if (todos !== prevState) localStorage.setItem('list', JSON.stringify(todos));
  }

  handleChange({ target }) {
    this.setState({ newTodo: target.value });
  }

  addTodo() {
    const { todos, newTodo } = this.state;
    if (!todos.some((todo) => todo === newTodo)) {
      this.setState({ todos: [...todos, newTodo] }, () => {
        this.setState({ newTodo: '' });
      });
    } else {
      alert('Repeated todo not allowed!');
      this.setState({ newTodo: '' });
    }
  }

  removeTodo(todo) {
    const { todos } = this.state;
    this.setState({ todos: todos.filter((item) => item !== todo) });
  }

  render() {
    const { todos, newTodo } = this.state;
    return (
      <>
        <Title>Todo application</Title>
        <Container>
          <input
            placeholder="Add a new todo"
            type="text"
            onChange={(e) => this.handleChange(e)}
            value={newTodo}
          />
          <ButtonAdd onClick={this.addTodo}>+</ButtonAdd>
          { todos.length !== 0 && <hr />}
          <ul>
            {todos.map((todo) => (
              <li key={todo}>
                {todo}
                <button type="button" onClick={() => this.removeTodo(todo)}>Remover</button>
              </li>
            ))}
          </ul>
        </Container>

      </>
    );
  }
}

export default App;
