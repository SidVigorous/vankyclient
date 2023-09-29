import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Casino from "./Pages/Casino/Casino";
import Login from "./Components/Login/Login";
import CasinoAddPage from "./Pages/CasinoAddPage/CasinoAddPage";
import AllMarketBook from "./Pages/AllMarketBook/AllMarketBook";
import Profile from "./Pages/Profile/Profile";
import Password from "./Pages/Password/Password";
import MyCommission from "./Pages/MyCommission/MyCommission";
import IplWinner from "./Pages/IPLWinner/IplWinner";
import AccountStatement from "./Pages/AccountStatement/AccountStatement";
import ProfitLoss from "./Pages/Profit&Loss/ProfitLoss";
import TotalLedger from "./Pages/TotalLegder/TotalLedger";
import BetHistory from "./Pages/BetHistory/BetHistory";
import LiveBetHistory from "./Pages/LiveBetHistory/LiveBetHistory";
import AddPageLive from "./Pages/AddPageLive/AddPageLive";
import ViewMatch from "./Pages/ViewMatch/ViewMatch";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoutes from "./utils/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
  },
  {
    path: "/Allcasino",
    element: (
      <PrivateRoute>
        <Casino />
      </PrivateRoute>
    ),
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/CasinoAddPage",
    element: (
      <PrivateRoute>
        <CasinoAddPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/runningmarketanalysis",
    element: (
      <PrivateRoute>
        <AllMarketBook />
      </PrivateRoute>
    ),
  },
  {
    path: "/Profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/Userchangepassword",
    element: (
      <PrivateRoute>
        <Password />
      </PrivateRoute>
    ),
  },
  {
    path: "/MyCommission",
    element: (
      <PrivateRoute>
        <MyCommission />
      </PrivateRoute>
    ),
  },
  {
    path: "/CupWinner",
    element: (
      <PrivateRoute>
        <IplWinner />
      </PrivateRoute>
    ),
  },
  {
    path: "/AccountStatement",
    element: (
      <PrivateRoute>
        <AccountStatement />
      </PrivateRoute>
    ),
  },
  {
    path: "/ProfitLoss",
    element: (
      <PrivateRoute>
        {" "}
        <ProfitLoss />
      </PrivateRoute>
    ),
  },

  {
    path: "/TotalLedger",
    element: (
      <PrivateRoute>
        <TotalLedger />
      </PrivateRoute>
    ),
  },
  {
    path: "/BetHistory",
    element: (
      <PrivateRoute>
        <BetHistory />
      </PrivateRoute>
    ),
  },
  {
    path: "/LiveBetHistory",
    element: (
      <PrivateRoute>
        <LiveBetHistory />
      </PrivateRoute>
    ),
  },
  {
    path: "/addapagelive",
    element: (
      <PrivateRoute>
        <AddPageLive />
      </PrivateRoute>
    ),
  },
  {
    path: "/ViewMatch",
    element: (
      <PrivateRoute>
        <ViewMatch />
      </PrivateRoute>
    ),
  },
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
