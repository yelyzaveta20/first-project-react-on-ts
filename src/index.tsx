import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';
import {router} from "./router";
import {ThemeProvider} from "./hooks/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider>
    <RouterProvider router={router}/>
        </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
