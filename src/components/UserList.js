import React from 'react';
import User from './User';

const UserList = ({ users, deleteUser, updateUser }) => {
  return (
    <div className="card">
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <User key={user.id} user={user} deleteUser={deleteUser} updateUser={updateUser} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
