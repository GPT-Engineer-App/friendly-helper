import React from 'react';
import useUserData from '../hooks/useUserData';

const UserAvatar = ({ userId }) => {
  const { avatarUrl } = useUserData(userId);
  return <img src={avatarUrl} alt="User Avatar" className="user-avatar" />;
};

export default UserAvatar;