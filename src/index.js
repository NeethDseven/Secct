import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './page/App';
import NotFound from './page/NotFound';
import "./styles/index.css"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '*', element: <NotFound />}

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
