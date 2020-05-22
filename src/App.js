import React from 'react';
import { storeContext } from "./context/StoreContext";
import UnderApp from './UnderApp';

function App(){
    let store = {
        charging:false,
        setCharging:()=>{}
    }
    return(
        <storeContext.Provider value={store}>
            <UnderApp/>
        </storeContext.Provider>
    );
}

export default App;