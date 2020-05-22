import { createContext, useCallback, useState, useContext } from 'react';


const defaultContext = {
  charging: true,
  setCharging: () => {},
};

// context object
export const storeContext = createContext(defaultContext);

// custom Hook
export const useStore = () => {
  const [ charging, setC ] = useState(true);
  const setCharging = useCallback((bool) => {
    setC(bool)
  },[]);
  return{
    charging,
    setCharging
  }
}