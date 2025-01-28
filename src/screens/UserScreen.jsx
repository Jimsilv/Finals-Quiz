import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserScreen = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/users/${match.params.id}`);
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [match.params.id]);

  return (
    <div className="user-screen">
      {user ? (
        <>
          <h1>{user.username}</h1>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Full Name:</strong> {user.full_name}</p>
          <p><strong>is_admin:</strong> {user.is_admin ? 'Yes' : 'No'}</p>
          <p><strong>is_staff:</strong> {user.is_staff ? 'Yes' : 'No'}</p>
          <p><strong>is_active:</strong> {user.is_active ? 'Yes' : 'No'}</p>
          <p><strong>Date Joined:</strong> {new Date(user.date_joined).toLocaleDateString()}</p>
          {/* Render any other relevant information */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserScreen;
