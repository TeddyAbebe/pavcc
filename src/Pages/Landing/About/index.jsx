import React from "react";
import Header from "../../../Components/LandingComponent/layouts/header";
import FeaturesAndAbout from "../../../Components/LandingComponent/featuresandabout";
import Pricing from "../../../Components/LandingComponent/pricing";
import ProcessSection from "../../../Components/LandingComponent/layouts/PAVCIProcess";
import PAInvestmentGuide from "../../../Components/LandingComponent/layouts/PAInvestmentGuide";
import PAVCCServices from "../../../Components/LandingComponent/layouts/PAVCCServices";
import WorkWithUs from "../../../Components/LandingComponent/layouts/WorkWithUs";
import Footer from "../../../Components/LandingComponent/layouts/footer";

function AboutUs() {
  return (
    <>
      <Header />
      <>
        {/*Page Header Start*/}
        <section
          className="page-header clearfix"
          style={{
            backgroundImage:
              "url(assets/conbiz/images/backgrounds/page-header-bg.jpg)",
          }}
        >
          <div className="container">
            <div className="page-header__inner clearfix">
              <h2
                className="wow slideInDown animated"
                data-wow-delay="0.3s"
                data-wow-duration="1500ms"
              >
                About Us
              </h2>
              <ul
                className="thm-breadcrumb list-unstyled wow slideInUp animated"
                data-wow-delay="0.3s"
                data-wow-duration="1500ms"
              >
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </section>
        {/*Page Header End*/}
      </>

      <FeaturesAndAbout />
      <Pricing />

      <ProcessSection />
      <PAInvestmentGuide />
      <PAVCCServices />
      <WorkWithUs />

      <Footer />
    </>
  );
}

export default AboutUs;
