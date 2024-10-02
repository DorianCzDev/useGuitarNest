import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import axios from "axios";
import { Toaster } from "react-hot-toast";
import Account from "./pages/Account";
import Amplifiers from "./pages/Amplifiers";
import Guitars from "./pages/Guitars";
import Home from "./pages/Home";
import MultiEffects from "./pages/MultiEffects";
import Pickups from "./pages/Pickups";
import ProductDetails from "./pages/ProductDetails";
import AppLayout from "./ui/AppLayout";
import User from "./ui/User";
import ChangePassword from "./ui/ChangePassword";
import ProtectedRoute from "./ui/ProtectedRoutes";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import UpdateOrderingUser from "./ui/UpdateOrderingUser";
import OrderOverview from "./pages/OrderOverview";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import PageNotFound from "./pages/PageNotFound";
import Orders from "./pages/Orders";
import SingleOrder from "./pages/SingleOrder";
import { useEffect, useState } from "react";
import getLocalStorageItem from "./utilities/getLocalStorageItem";

axios.defaults.withCredentials = true;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          {/* <Route path="payment/:id" element={<Payment />} /> */}
          <Route path="sign-up" element={<SignUp />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          <Route path="login" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="guitars" element={<Guitars />} />
            <Route path="amplifiers" element={<Amplifiers />} />
            <Route path="pickups" element={<Pickups />} />
            <Route path="multieffects" element={<MultiEffects />} />

            <Route path="cart" element={<Cart />} />

            <Route path="cart/update-user" element={<UpdateOrderingUser />} />
            <Route path="cart/overview" element={<OrderOverview />} />

            <Route
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            >
              <Route path="account/user" element={<User />} />
              <Route
                path="account/change-password"
                element={<ChangePassword />}
              />
              <Route path="account/orders" element={<Orders />} />
              <Route path="account/orders/:id" element={<SingleOrder />} />
            </Route>

            <Route path="/product/:name" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 8000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#181C28",
            color: "#e5e5e5",
            border: "#384661",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
