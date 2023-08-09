import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './App.jsx'
import NewPost from './components/new-post/new-post';
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import RootLayout from "./routes/root-layout.jsx";

const router = createBrowserRouter([
    {path: '/',
        element: <RootLayout/>,
        children: [
            {path: '/', element: <Posts/>},
            {path: '/newpost', element: <NewPost/>},
    ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
