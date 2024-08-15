import React from 'react';
import useUserStats from '../hooks/useUserStats';

const UserStats = ({ userId }) => {
  const { posts, followers, following } = useUserStats(userId);
  return (
    <div className="user-stats">
      <span>Posts: {posts}</span>
      <span>Followers: {followers}</span>
      <span>Following: {following}</span>
    </div>
  );
};

export default UserStats;