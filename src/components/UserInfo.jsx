import React from 'react';
import useUserData from '../hooks/useUserData';

const UserInfo = ({ userId }) => {
  const { name, email } = useUserData(userId);
  return (
    <div className="user-info">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserInfo;