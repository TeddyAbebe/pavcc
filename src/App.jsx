import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Admin } from "./Pages/Admin";
import { Entrepreneur } from "./Pages/Entrepreneur";
import { Ventura } from "./Pages/Ventura";
import { EntrepreneurRegister } from "./Pages/Auth/Entrepreneur";
import { Login } from "./Pages/Landing";
import { Landing } from "./Pages/Landing/home";
import LandingLayout from "./LandingLayout";
import { HomeDetail } from "./Pages/Landing/home/Detail";
import { RegisterAndPay } from "./Pages/Auth/Ventura";
import { VentureRegister } from "./Pages/Auth/Ventura/Register";
import AboutUs from "./Pages/Landing/About";
import Services from "./Pages/Landing/Services";
import InvestmentGuide from "./Pages/Landing/InvestmentGuide";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div className="centered"></div>}>
            <LandingLayout>
              <Landing />
            </LandingLayout>
          </Suspense>
        }
      />
      <Route
        path="/idea-detail/:id"
        element={
          <Suspense fallback={<div className="centered"></div>}>
            <LandingLayout>
              <HomeDetail />
            </LandingLayout>
          </Suspense>
        }
      />
      <Route
        path="/register/entrepreneur"
        element={
          <Suspense fallback={<div className="centered"></div>}>
            <LandingLayout>
              <EntrepreneurRegister />{" "}
            </LandingLayout>
          </Suspense>
        }
      />
      <Route
        path="/register/vc"
        element={
          <Suspense fallback={<div className="centered"></div>}>
            <LandingLayout>
              <VentureRegister />{" "}
            </LandingLayout>
          </Suspense>
        }
      />
      <Route
        path="/register/pay"
        element={
          <Suspense fallback={<div className="centered"></div>}>
            <LandingLayout>
              <RegisterAndPay />{" "}
            </LandingLayout>
          </Suspense>
        }
      />

      <Route
        path="/aboutus"
        element={
          <Suspense fallback={<div className="centered"></div>}>
            <LandingLayout>
              <AboutUs />{" "}
            </LandingLayout>
          </Suspense>
        }
      />
      <Route
        path="/services"
        element={
          <Suspense fallback={<div className="centered"></div>}>
            <LandingLayout>
              <Services />
            </LandingLayout>
          </Suspense>
        }
      />
      <Route
        path="/investmentguide"
        element={
          <Suspense fallback={<div className="centered"></div>}>
            <LandingLayout>
              <InvestmentGuide />
            </LandingLayout>
          </Suspense>
        }
      />
      <Route path="#pricing-section" element={<Navigate path="/" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/entrepreneur/*" element={<Entrepreneur />} />
      <Route path="/ventura/*" element={<Ventura />} />
    </Routes>
  );
};
