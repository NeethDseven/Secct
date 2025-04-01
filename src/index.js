import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './page/App';
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './component/Header';
// import About from './page/About';
// import Salades from './page/Salades';
// import Vegetables from './page/Vegetables';
// import Others from './page/Others';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            { path: '/', element: <App /> },
// { path: '/about', element: <About /> },
// { path: '/salades', element: <Salades /> },
// { path: '/vegetables', element: <Vegetables /> },
// { path: '/others', element: <Others /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);