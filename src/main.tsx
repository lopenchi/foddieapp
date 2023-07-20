import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {loader as rootLoader} from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css'
import Card from "./components/ingredient/Card.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children: [
            {
                path: "ingredients/:ingredientId",
                element: <Card />,
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
