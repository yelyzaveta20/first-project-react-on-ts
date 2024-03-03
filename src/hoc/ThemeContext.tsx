import {createContext, FC, ReactNode, useContext, useEffect, useState} from "react";

interface ThemeContextType {
    darkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    // Read the theme from local storage or default to false
    const savedTheme = localStorage.getItem("darkTheme");
    const [darkTheme, setDarkTheme] = useState(savedTheme ? JSON.parse(savedTheme) : false);

    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
        document.body.style.backgroundColor = darkTheme ? "#020246" : "#c0baba";
    }, [darkTheme]);

    const toggleTheme = () => {
        // Toggle the theme
        setDarkTheme((prevTheme: boolean) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};