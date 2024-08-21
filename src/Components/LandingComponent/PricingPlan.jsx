
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css';
function PricingPlan() {


  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section className="pricing-plan-one clearfix">
      <div
        className="pricing-plan-one__left-bg" 
        style={{
          backgroundImage: "url(/assets/conbiz/images/backgrounds/pricing-plan-v1-left-bg.png)"
        }}
      /> 
      <div
        className="pricing-plan-one__right-bg"
        style={{
          backgroundImage: "url(/assets/conbiz/images/backgrounds/pricing-plan-v1-right-bg.png)"
        }}
      />
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline">
            <span className="left" />
            <h4>Our Pricing Plan</h4>
            <span className="right" />
          </div>
          <h2 className="section-title__title">
            Smart Pricing Plan For
            <br />
            Marketing
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="pricing-plan-one__content">
              <div className="shape1 float-bob-y">
                <img src="/assets/conbiz/images/shapes/thm-shape-6.png" alt="Shape 1" />
              </div>
              <div className="shape2 float-bob-y">
                <img src="/assets/conbiz/images/shapes/thm-shape-2.png" alt="Shape 2" />
              </div>
              <div className="shape3 zoominout">
                <img src="/assets/conbiz/images/shapes/thm-shape-7.png" alt="Shape 3" />
              </div>
              <div className="shape4 zoominout">
                <img src="/assets/conbiz/images/shapes/thm-shape-5.png" alt="Shape 4" />
              </div>
              <div className="row">
                {/* Start Single Pricing Plan One */}
                <div
                  className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="pricing-plan-one__single">
                    <div className="table-header">
                      <div
                        className="table-header__bg"
                        style={{
                          backgroundImage: "url(/assets/conbiz/images/backgrounds/pricing-plan-v1-bg.png)"
                        }}
                      ></div>
                      <p>Basic Plan</p>
                      <h3>Monthly</h3>
                      <h2>
                        <span className="icon-dollar" />
                        29.99
                      </h2>
                    </div>
                    <div className="table-content">
                      <ul className="list-unstyled">
                        <li>Business Consultations</li>
                        <li>Marketing Consultations</li>
                        <li>Corporate Solutions</li>
                        <li>Financial Solutions</li>
                      </ul>
                    </div>
                    <div className="table-footer">
                      <a href="#" className="thm-btn">
                        Select Plan
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Pricing Plan One */}
                {/* Start Single Pricing Plan Two */}
                <div
                  className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="pricing-plan-one__single">
                    <div className="table-header">
                      <div
                        className="table-header__bg"
                        style={{
                          backgroundImage: "url(/assets/conbiz/images/backgrounds/pricing-plan-v1-bg.png)"
                        }}
                      ></div>
                      <p>Standard Plan</p>
                      <h3>6 Month</h3>
                      <h2>
                        <span className="icon-dollar" />
                        48.73
                      </h2>
                    </div>
                    <div className="table-content">
                      <ul className="list-unstyled">
                        <li>Business Consultations</li>
                        <li>Marketing Consultations</li>
                        <li>Corporate Solutions</li>
                        <li>Financial Solutions</li>
                      </ul>
                    </div>
                    <div className="table-footer">
                      <a href="#" className="thm-btn">
                        Select Plan
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Pricing Plan Two */}
                {/* Start Single Pricing Plan Three */}
                <div
                  className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="pricing-plan-one__single style2">
                    <div className="table-header">
                      <div
                        className="table-header__bg"
                        style={{
                          backgroundImage: "url(/assets/conbiz/images/backgrounds/pricing-plan-v1-bg.png)"
                        }}
                      ></div>
                      <p>Premium Plan</p>
                      <h3>12 Month</h3>
                      <h2>
                        <span className="icon-dollar" />
                        87.62
                      </h2>
                    </div>
                    <div className="table-content">
                      <ul className="list-unstyled">
                        <li>Business Consultations</li>
                        <li>Marketing Consultations</li>
                        <li>Corporate Solutions</li>
                        <li>Financial Solutions</li>
                      </ul>
                    </div>
                    <div className="table-footer">
                      <a href="#" className="thm-btn">
                        Select Plan
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Pricing Plan Three */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default PricingPlan