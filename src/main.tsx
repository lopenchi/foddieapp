import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import App from "./App.tsx";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: "contacts/:contactId",
                element: <App />,
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
