import { useState, useEffect } from 'react';
import { fetchUserData } from '../api/userApi';

const useUserData = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData(userId).then(setUserData);
  }, [userId]);

  return userData;
};

export default useUserData;