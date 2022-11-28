import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Index from './pages/Dashboard/counter/Index';
import Create from './pages/Dashboard/counter/Create';

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />
    }, 
    {
        path : '/dashboard',
        element : <Index />
    }, 
    {
        path : '/counter/create',
        element : <Create />
    }, 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <RouterProvider router={router} />
);
 