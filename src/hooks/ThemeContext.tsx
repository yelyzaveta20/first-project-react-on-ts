import {createContext, FC, ReactNode, useContext, useState} from "react";

interface ThemeContextType {
    darkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
        if (!darkTheme) {
            document.body.style.backgroundColor = "#020246";
        } else {

            document.body.style.backgroundColor = "#c0baba";
        }
    };

    return (
        <ThemeContext.Provider value={{darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
};