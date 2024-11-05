import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import './index.css';
import Home from './Home';
import Builder from './Builder'

import Nav from './components/Nav';
import Footer from './components/Footer';

// Browser Router allows us to create routes to other "screens" (this is like React's "Native Stack Navigator" where inside our NavigationContainer we created Stack.Screen for all our screen components)
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Home/>} />
            <Route path='builder' element={<Builder/>} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        {/* We use React Helmet to update information in the html's head. This is mainly for updating metadata across different screens */}
        <HelmetProvider>
            <>
                {/* This is where our router will load our routes */}
                {/* We can also put components here which will be loaded globally. This means "Nav" will load on the page no matter which route is active */}
                <Nav/>
                <RouterProvider router={router} />
                <Footer/>
            </>
        </HelmetProvider>
    </React.StrictMode>
);