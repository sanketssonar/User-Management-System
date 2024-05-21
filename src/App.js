import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm'; // Import UserAddForm
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // Load users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  // Save users to localStorage whenever users state changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? { ...user, ...updatedUser } : user)));
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <h1 className="navbar-text user-management-text">
            User Management System
          </h1>
          <button className="btn btn-primary add-user-button" data-toggle="modal" data-target="#addUserModal">
            Add User
          </button>
        </div>
      </nav>
      <div className="container mt-4">
        <UserList users={users} deleteUser={deleteUser} updateUser={updateUser} />
      </div>
      <UserAddForm addUser={addUser} />
    </div>
  );
}

export default App;
