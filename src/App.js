import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
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

  render() {
    const { todos, newTodo } = this.state;
    return (
      <>
        <input type="text" onChange={(e) => this.handleChange(e)} value={newTodo} />
        <button type="button" onClick={this.addTodo}>Adicionar tarefa</button>
        <ul>
          {todos.map((todo) => <li key={todo}>{todo}</li>)}
        </ul>
      </>
    );
  }
}

export default App;
