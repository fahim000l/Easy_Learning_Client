import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const UtilityContext = createContext();

const UtilityProvider = ({ children }) => {

    const [mode, setMode] = useState(true);

    const utilityInfo = { mode, setMode }

    return (
        <UtilityContext.Provider value={utilityInfo}>
            {children}
        </UtilityContext.Provider>
    );
};

export default UtilityProvider;