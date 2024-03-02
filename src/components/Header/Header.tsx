import {NavLink} from "react-router-dom";

import css from './Header.module.css'

import {useTheme} from "../../hooks/ThemeContext";
const Header = () => {

    const { darkTheme, toggleTheme } = useTheme();

    return (
        <div className={`${css.Header} ${css.bodyOne} ${css.one} ${darkTheme ? css.headerLight : css.headerDark}`}>
            <p>MY MOVIES SITE</p>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={`search`}>Search</NavLink>
            {/*<button onClick={toggleTheme} className={darkTheme ? 'dark' : 'light'}>*/}
            {/*    Toggle Theme*/}
            {/*</button>*/}
            <button className={`${css.toggleButton} ${darkTheme ? 'dark' : 'light'}`}
                    onClick={toggleTheme}>
                {darkTheme ? 'Dark' : 'Light'}
            </button>

            {/*<button className={`${darkTheme ? css.dark : ''}`} onClick={toggleTheme}>*/}
            {/*    {darkTheme ? 'Dark' : 'Light'}*/}
            {/*</button>*/}
            {/*<button className={`${darkTheme ? css.dark : ''}`} onClick={handleThemeChange}>{`${darkTheme ? css.dark : 'Togle'}`}</button>*/}
            <img className={css.img}
                 src="data:image/png;base64,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"
                 alt='userAccount'/>
        </div>
    );
};

export {Header};