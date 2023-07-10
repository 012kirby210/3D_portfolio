import { createContext, useContext, useState, useLayoutEffect } from "react";

const keyIndex = "NOIATECH_THEME_PREFERENCE";

const ThemeContext = createContext();
const ThemeProvider = ({children}) => {

    const initialTheme = () => {
        const theme = localStorage.getItem(keyIndex);
        console.log("valeur du theme " + theme);
        if ( 'undefined' === theme ){
            console.log("undefined theme key");
            localStorage.setItem(keyIndex,"dark")
        }
        return localStorage.getItem(keyIndex);
    }
    const [ theme, setTheme ] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme( (theme) => ( "dark" === theme) ? "light" : "dark");
    };

    useLayoutEffect( () => {
       localStorage.setItem("NOIATECH_THEME_PREFERENCE", theme);
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
const useTheme = () => {
    const context = useContext(ThemeContext);

    if ( undefined == context){
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}

export { ThemeProvider, useTheme };