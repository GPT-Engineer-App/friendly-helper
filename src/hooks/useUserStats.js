import { useState, useEffect } from 'react';
import { fetchUserStats } from '../api/userApi';

const useUserStats = (userId) => {
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    fetchUserStats(userId).then(setUserStats);
  }, [userId]);

  return userStats;
};

export default useUserStats;