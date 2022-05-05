import React from 'react';
import Navigator from './routes/homeStack';
 
//user Context provider here
const defaultUserState = {
  email: '',
  password: '',
  username: '',
  favCuisines: [],
};

export const UserContext = React.createContext(defaultUserState);

export default function App() {
  //setting blank state to context provider and updating on login press is username exists
  // if not alert username is incorrect
  return (
    <UserContext.Provider value={defaultUserState}>
      <Navigator/>
    </UserContext.Provider>
  );
}


