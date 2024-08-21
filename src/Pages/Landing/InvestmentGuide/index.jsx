import React from "react";
import Header from "../../../Components/LandingComponent/layouts/header";
import Investment from "../../../Components/LandingComponent/layouts/Investment";
import Footer from "../../../Components/LandingComponent/layouts/footer";

function InvestmentGuide() {
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
                Investment Guide
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
                <li>Investment Guide Page</li>
              </ul>
            </div>
          </div>
        </section>
        {/*Page Header End*/}
      </>

      <Investment />
      <Footer />
    </>
  );
}

export default InvestmentGuide;
