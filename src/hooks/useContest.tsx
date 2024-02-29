import {createContext, FC, ReactNode, useContext, useState} from "react";

interface ThemeContextProps {
    darkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
        if (!darkTheme) {
            document.body.style.backgroundColor = '#647f94';
        } else {
            document.body.style.backgroundColor = '#020246';
        }
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};