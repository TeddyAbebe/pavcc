import React, { useEffect } from 'react';
// import WOW from 'wowjs';

const FeaturesAndAbout = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    // new WOW.WOW().init();
  }, []);

  return (
    <> 
      {/* Features One Start */}
      <section className="features-one clearfix"> 
        <div className="container">
          <div className="row">
            {/* Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingRight: '1rem' }}>
              <div 
                className="features-one__single wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon1.png" alt="" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="about.html">
                        We focus on sectors that have
                        <br />
                        the potential for significant impact
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="features-one__single-right">
                  <div className="features-one__single-right-btn">
                    <a href="services-1.html">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Features One */}
            {/* Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingLeft: '1rem' }}>
              <div
                className="features-one__single wow fadeInRight animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon2.png" alt="" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                        Our mission is to empower startups
                        <br />
                        and small to medium enterprises (SMEs)
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="features-one__single-right">
                  <div className="features-one__single-right-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Features One */}
          </div>
        </div>
      </section>
      {/* Features One End */}

      {/* About One Start */}
      <section className="about-one" >
        <div className="container">
          <div className="row">
            {/* Start About One Left */}
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="shape1 float-bob-y">
                  <img src="/assets/conbiz/images/shapes/thm-shape-1.png" alt="" />
                </div>
                <div className="about-one__left-img">
                  <img src="/assets/conbiz/images/about/about-v1-1.jpg" alt="" />
                </div>
                <div className="about-one__left-bottom">
                  <div className="about-one__logo">
                    <img src="/assets/conbiz/images/about/about-v1-logo.png" alt="" />
                  </div>
                  <div
                    className="about-one__video-gallery wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <img src="/assets/conbiz/images/about/about-v1-2.jpg" alt="" />
                    <div className="video-box">
                      <a
                        className="video-popup wow zoomIn animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                        title=" Video Gallery"
                        href="https://www.youtube.com/watch?v=FgA6MwKmmc0"
                        style={{
                          visibility: "visible",
                          animationDuration: "1500ms",
                          animationDelay: "300ms",
                          animationName: "zoomIn"
                        }}
                      >
                        <i className="fa fa-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End About One Left */}
            {/* Start About One Right */}
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>About PAVCC</h4>
                  </div>
                  <h2 className="section-title__title">
                    Build Your Business <br />
                    With Right Way
                  </h2>
                </div>
                <div className="about-one__right-inner">
                  <h5 className="about-one__right-tagline">
                    Pan Africa Venture Capital Consortium (PAVCC) is a dynamic investment platform
                  </h5>
                  <p className="about-one__right-text">
                    Our approach combines financial investment with strategic support, ensuring that our portfolio companies not only receive funding but also benefit from mentorship, operational guidance, and access to global markets. We believe in the transformative power of entrepreneurship and work tirelessly to create an ecosystem where innovative ideas can flourish.
                    By collaborating with local and international stakeholders, PAVCC aims to bridge the gap between capital and innovation, ultimately contributing to the development of vibrant economies throughout Africa. We are committed to making a meaningful difference in the communities we serve, driving job creation, and enhancing the quality of life for millions across the continent
                  </p>

                  <div className="about-one__btn">
                    <a href="about.html" className="thm-btn">
                      Learn More{" "}
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End About One Right */}
          </div>
        </div>
      </section>
      {/* About One End */}
    </>
  );
};

export default FeaturesAndAbout;
