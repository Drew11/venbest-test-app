import React, { useState } from 'react';
import UserList from '../user-list/user-list';
import Filter from '../fiter/filter';
import './root.css';

const Root = () => {

  const [filter, setFilter] = useState({
      name: '',
      lastname: '',
      age: 0,
      sex: {m: true, f: true},
  });

  return (
    <div className="App">
        <header>
            <h1>Test task</h1>
        </header>

        <main>
            <Filter setFilter={setFilter} filter={filter}/>
            <UserList filter={filter}/>
        </main>

        <footer>
        </footer>
    </div>
  );
};

export default Root;
