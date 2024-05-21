import React, { useState } from 'react';

const User = ({ user, deleteUser, updateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateUser(user.id, { name: editedName, email: editedEmail });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(user.name);
    setEditedEmail(user.email);
  };

  const handleChangeName = (e) => {
    setEditedName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEditedEmail(e.target.value);
  };

  return (
    <tr className="User">
      <td>
        {isEditing ? (
          <input type="text" value={editedName} onChange={handleChangeName} />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="email" value={editedEmail} onChange={handleChangeEmail} />
        ) : (
          user.email
        )}
      </td>
      <td className="edit-buttons">
        {isEditing ? (
          <>
            <button className="btn btn-success btn-sm" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary btn-sm" onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn btn-warning btn-sm btn-edit" onClick={handleEdit}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default User;
