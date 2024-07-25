import React, {createContext, useState} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const[theme, setTheme] = useState("bg-slate-300");
    const[textColor, setTextColor] = useState("text-black")

    return(
        <ThemeContext.Provider value = {{theme, setTheme, textColor, setTextColor}}>
            {children}
        </ThemeContext.Provider> 
    );
};

export default ThemeContext;