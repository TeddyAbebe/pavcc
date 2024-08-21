import React, { useEffect } from 'react';
// import WOW from 'wowjs';
import 'animate.css';

function WorkWithUs() {
  useEffect(() => {
    // new WOW.WOW().init();
  }, []);

  return ( 
    <>
      {/* Start Cta Two */}
      <section
        className="cta-one cta-one--cta-two jarallax"
        data-jarallax=""
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage: "url(/assets/conbiz/images/resources/cta-v2-bg-img.jpg)"
        }}
      > 
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-one--cta-two__wrapper">
                <div className="cta-one__wrapper">
                  <div className="section-title">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>Work With Us</h4>
                    </div>
                    <h2 className="section-title__title">
                      Let’s Get To Work Together
                      <br />
                      Ready To Work With Us
                    </h2>
                  </div>
                  <div className="cta-one__btn-box">
                    <a href="#" className="thm-btn">
                      Get Free Quote{" "}
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                    <div className="video-button">
                      <a
                        className="video-popup video-btn"
                        title="Conbiz Video Gallery"
                        href="https://www.youtube.com/watch?v=FgA6MwKmmc0"
                      >
                        <span className="txt">cause video</span>
                        <i className="fa fa-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="cta-one--cta-two__video-box wow zoomIn"
                  data-wow-delay="100ms"
                  data-wow-duration="3500ms"
                >
                  <div
                    className="icon wow zoomIn"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <a
                      className="video-popup link"
                      title="Video Gallery"
                      href="https://www.youtube.com/watch?v=FgA6MwKmmc0"
                    >
                      <i className="fa fa-play" aria-hidden="true" />
                    </a>
                    <span className="border-animation border-1" />
                    <span className="border-animation border-2" />
                    <span className="border-animation border-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Cta Two */}

      {/* Features One Start */}
      <section className="features-one clearfix">
        <div className="container">
          <div className="row">
            {/* Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{paddingRight:'1rem'}}>
              <div
                className="features-one__single wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon3.png" alt="" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                      1.	Impactful Engagement
                        
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
            {/* Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{paddingLeft:'1rem'}}>
              <div
                className="features-one__single wow fadeInRight animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                      2.	Diverse Roles
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



          <div className="row" >
            {/* Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{paddingRight:'1rem'}}>
              <div
                className="features-one__single wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon3.png" alt="" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                      3.	Networking Opportunities
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
            {/* Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{paddingLeft:'1rem'}}>
              <div
                className="features-one__single wow fadeInRight animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                      4.	Professional Development
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


          <div className="row" >
            {/* Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{paddingRight:'1rem'}}>
              <div
                className="features-one__single wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon3.png" alt="" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                      5.	Supportive Environment
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
            {/* Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{paddingLeft:'1rem'}}>
              <div
                className="features-one__single wow fadeInRight animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                      6.	Focus on Innovation
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
    </>
  );
}

export default WorkWithUs;
