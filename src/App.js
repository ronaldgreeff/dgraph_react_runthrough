import React from 'react';
import 'todomvc-app-css/index.css'

function App() {
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
        />
      </header>
    </div>
  );
}

export default App;
