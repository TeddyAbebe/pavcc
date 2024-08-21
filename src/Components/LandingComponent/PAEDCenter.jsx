import React from 'react'

function PAEDCenter() {
  return (
    
        <section className="service-two" style={{background: "#f0f3f8"}}>
          <div
            className="service-two__bg"
            style={{
              backgroundImage: "url(/assets/conbiz/images/backgrounds/service-two-bg.png)"
            }}
          ></div>
          <div className="container">
            <div className="row"> 
              <div className="col-xl-8">
                <div className="service-two__content-box">
                  <div className="section-title"> 
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>PAEDC</h4>
                      <span className="right" />
                    </div>
                    <h2 className="section-title__title">
                    Online Education 
                      <br />
                      Center
                    </h2>
                  </div>
                  <div className="service-two__inner">
                    <div className="row">
                      {/* Start Single Service Two */}
                      <div
                        className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="service-two__single">
                          <div className="service-two__single-icon">
                            <img src="/assets/conbiz/images/icon/service-v2-icon1.png" alt="Media Marketing" />
                          </div>
                          <div className="service-two__single-text">
                            <h4>
                              <a href="services-details.html">Lifelong Free Training</a>
                            </h4>
                            <p>
                            The PAEDC provides ongoing training programs that cover a wide range of topics essential for business success. 
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Single Service Two */}
                      {/* Start Single Service Two */}
                      <div
                        className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="service-two__single">
                          <div className="service-two__single-icon">
                            <img src="/assets/conbiz/images/icon/service-v2-icon2.png" alt="Web Development" />
                          </div>
                          <div className="service-two__single-text">
                            <h4>
                              <a href="services-details.html">Mentoring</a>
                            </h4>
                            <p>
                            PAVCC pairs entrepreneurs with experienced mentors who provide personalized guidance and support
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Single Service Two */}
                      {/* Start Single Service Two */}
                      <div
                        className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="service-two__single">
                          <div className="service-two__single-icon">
                            <img src="/assets/conbiz/images/icon/service-v2-icon3.png" alt="Apps Development" />
                          </div>
                          <div className="service-two__single-text">
                            <h4>
                              <a href="services-details.html">Teaching Resources Access</a>
                            </h4>
                            <p>
                            Participants in the PAEDC have access to a wealth of teaching resources, including instructional materials, case studies, and best practice guides
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Single Service Two */}
                      {/* Start Single Service Two */}
                      <div
                        className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
                        data-wow-delay="0.7s"
                      >
                        <div className="service-two__single">
                          <div className="service-two__single-icon">
                            <img src="/assets/conbiz/images/icon/service-v2-icon4.png" alt="Product Engineering" />
                          </div>
                          <div className="service-two__single-text">
                            <h4>
                              <a href="services-details.html">Consulting Services</a>
                            </h4>
                            <p>
                            When necessary, PAVCC offers consulting services to address specific business challenges faced by entrepreneurs
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Single Service Two */}
                    </div>
                    <div className="service-two__btn">
                      <a href="services-1.html" className="thm-btn">
                        Learn More
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 wow slideInRight"
                data-wow-delay="500ms"
                data-wow-duration="2500ms"
              >
                <div className="service-two__img-box">
                  <div className="service-two__img">
                    <img src="/assets/conbiz/images/services/service-v2-img1.png" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    


export default PAEDCenter;