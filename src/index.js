import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './page/App';
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from './page/About';
// import Home from './page/Home'
// import Salades from './page/Salades';
// import Vegetables from './page/Vegetables';
// import Others from './page/Others';

const router = createBrowserRouter([


    {
        path: "/",
        element: <App />
        // children: [
          //  { path: "/", element: <Home /> },
          //  { path: "/about", element: <About /> }
           // ],
     }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);