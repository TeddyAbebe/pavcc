import React from "react";
import Header from "../../../Components/LandingComponent/layouts/header";
import Banner from "../../../Components/LandingComponent/banner";
import Business from "../../../Components/LandingComponent/layouts/BusinessProfile";
import Pricing from "../../../Components/LandingComponent/pricing";
import FeaturesAndAbout from "../../../Components/LandingComponent/featuresandabout";
import PAInvestEX from "../../../Components/LandingComponent/PAInvestEX";
import PAInvestmentGuide from "../../../Components/LandingComponent/PAInvestmentGuide";
import RevenueModel from "../../../Components/LandingComponent/RevenueModel";
import PAEDCenter from "../../../Components/LandingComponent/PAEDCenter";
import PanAVCIProcesstwo from "../../../Components/LandingComponent/PanAVCIProcesstwo";
import PAVCCServices from "../../../Components/LandingComponent/PAVCCServices";
import WorkWithUs from "../../../Components/LandingComponent/WorkWithUs";
import FAQ from "../../../Components/LandingComponent/FAQ";
import IPIContributors from "../../../Components/LandingComponent/IPIContributors";
import Footer from "../../../Components/LandingComponent/layouts/footer";

export const Landing = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <>
        <div className="stricky-header stricky-header--style3 stricked-menu main-menu">
          <div className="sticky-header__content"></div>
          {/* /.sticky-header__content */}
        </div>
        {/* /.stricky-header */}
      </>
      <Banner />

      <Business />

      <Pricing />
      <FeaturesAndAbout />
      <PAInvestEX />
      {/* <PanAVCIProcess /> */}
      <PAInvestmentGuide />
      <RevenueModel />
      <PAEDCenter />
      <PanAVCIProcesstwo />
      <PAVCCServices />
      <WorkWithUs />
      <FAQ />
      <IPIContributors />
      <Footer />
    </div>
  );
};
