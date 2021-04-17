import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['test1', 'test2'],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <ul>
          {todos.map((todo) => <li key={todo}>{todo}</li>)}
        </ul>
      </>
    );
  }
}

export default App;
