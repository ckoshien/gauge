import React from 'react';
import { storeContext } from "./context/StoreContext";
import UnderApp from './UnderApp';
import { MyReducer } from './context/reducer';

function App(){
    const {state , dispatch} = MyReducer();
    return(
        <storeContext.Provider value={{state, dispatch}}>
            <UnderApp/>
        </storeContext.Provider>
    );
}

export default App;