import { createContext } from 'react';

export const Context = createContext({
  dataUser: [
    {
      id: 1,
      username: 'user_1',
      password: 'user_1',
      role: 'user',
    },
    {
      id: 2,
      username: 'user_2',
      password: 'user_2',
      role: 'user',
    },
    {
      id: 3,
      username: 'admin',
      password: 'admin',
      role: 'admin',
    },
  ],
  isLogin: false,
});

function ContextProvider({ children }) {
  <Context.Provider>{children}</Context.Provider>;
}

export default ContextProvider;
