import React from 'react';

function Footer() {
  return (
    <>
  {/*Start Footer One*/}
  <footer className="footer-one">
    <div className="container">
      <div className="footer-one__top">
        <div
          className="footer-one__bg" 
          style={{
            backgroundImage: "url(/assets/conbiz/images/backgrounds/footer-v1-bg.png)"
          }}
        /> 
        <div className="big-title">
          <h2>Footer</h2>
        </div>
        <div className="row">
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-2 col-lg-2 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="footer-widget__column footer-widget__overview mar-top">
              <h3 className="footer-widget__title">Overview</h3>
              <ul className="footer-widget__overview-list list-unstyled">
                <li>
                  <a href="index-2.html">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Consultant
                  </a>
                </li>
                <li>
                  <a href="services-1.html">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Company</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <a href="about.html">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="company-history.html">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Company History
                  </a>
                </li>
                <li>
                  <a href="career.html">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Need a Career
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Working Process
                  </a>
                </li>
                <li>
                  <a href="news.html">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Blog Post
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="footer-widget__column footer-widget__newsletter mar-top">
              <h3 className="footer-widget__title">Newsletter</h3>
              <p className="footer-widget__newsletter-text">
                Quis autem veleum prehendet <br />
                voluptate velit esse
              </p>
              <form className="footer-widget__newsletter-form">
                <div className="footer-widget__newsletter-input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                </div>
                <div className="newsletter__button">
                  <button type="submit" className="footer-btn">
                    <span className="thm-btn">
                      Subscription
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.7s"
          >
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__about-logo">
                <a href="index-2.html">
                  <img
                    src="/assets/conbiz/images/resources/logo-1.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="footer-contact-info">
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="icon-pin map" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>
                        256 Elizaberth Ave, Brooklyn,
                        <br />
                        CA, 90025
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-letter" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="mailto:info@templatepath.com">
                        supportconbiz@gmail.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-phone-call" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="tel:123456789">+012 (345) 678 99</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End Footer Widget Column*/}
        </div>
      </div>
      {/*Start Footer One Bottom*/}
      <div className="footer-one__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-one__bottom-inner">
              <div className="footer-one__bottom-text text-center">
                <p>
                  ©2021 <a href="#">Conbiz</a>. All Rights Reserved, Design By
                  Webtend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Footer One Bottom*/}
    </div>
  </footer>
  {/*End Footer One*/}
</>

  );
}

export default Footer;
