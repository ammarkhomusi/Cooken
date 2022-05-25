import React from 'react';
import Navigator from './routes/homeStack';
 
const defaultUserState = {
  email: '',
  password: '',
  username: '',
  favCuisines: [],
};

export const UserContext = React.createContext(defaultUserState);

export default function App() {
  return (
    <UserContext.Provider value={defaultUserState}>
      <Navigator/>
    </UserContext.Provider>
  );
}


