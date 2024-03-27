"use client"
// contexts/UserContext.js
import { createContext, useState } from 'react';

const BaseContext = createContext();

export const BaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <BaseContext.Provider value={{ user, setUser }}>
      {children}
    </BaseContext.Provider>
  );
};

export default BaseContext;
