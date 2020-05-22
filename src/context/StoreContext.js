import { createContext, useCallback, useContext, useMemo } from 'react';


const defaultContext = {
  charging: true,
  setCharging: () => {},
};

// context object
export const storeContext = createContext();

// custom Hook
export const useStore = () => {
  const { charging, setCharging } = useContext(storeContext);
  //const [ charging, setState ] = useState(true);
  //console.log(charging);
  const setC = useCallback((bool) => {
      setCharging(bool);
  },[]);
  return{
    charging,
    setC
  }
}