import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Casino from "./Pages/Casino/Casino";
import Login from "./Components/Login/Login"
import CasinoAddPage from "./Pages/CasinoAddPage/CasinoAddPage";
import AllMarketBook from "./Pages/AllMarketBook/AllMarketBook";
import Profile from "./Pages/Profile/Profile"
import Password from "./Pages/Password/Password";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/Allcasino",
    element: <Casino />,
  },
  {
    path:"/Login",
    element: <Login/>,
  },
  {
    path:"/CasinoAddPage",
    element: <CasinoAddPage/>,
  }
  ,
  {
    path:"/runningmarketanalysis",
    element: <AllMarketBook/>,
  },

  {
    path:"/Profile",
    element: <Profile/>,
  }
  ,

  {
    path:"/Userchangepassword",
    element: <Password/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
