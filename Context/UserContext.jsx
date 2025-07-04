import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Fetch current user on mount
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_DOMAIN}/user/me`)
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
