import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    addUser({ name, email });
    setName('');
    setEmail('');
    setIsOpen(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <button
          className={`btn btn-primary btn-block ${isOpen ? 'active' : ''}`}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="addUserForm"
        >
          {isOpen ? 'Close Form' : 'Add User'}
        </button>
      </div>
      <div className={`collapse ${isOpen ? 'show' : ''}`} id="addUserForm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success mr-2">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={handleToggle}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
