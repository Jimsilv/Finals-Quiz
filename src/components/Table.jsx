// src/components/Table.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ users }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Admin</th>
            <th>Staff</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.is_admin ? 'Yes' : 'No'}</td>
              <td>{user.is_staff ? 'Yes' : 'No'}</td>
              <td>{user.is_active ? 'Yes' : 'No'}</td>
              <td>
                <Link to={`/user/${user.id}`} className="btn btn-info btn-sm">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
