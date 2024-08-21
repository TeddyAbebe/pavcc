import React from 'react';

function PAInvestEX() {
  return (
    <>
      {/* About Two Start */}
      <section className="about-two" style={{ background: "#f0f3f8" }}>
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="row">
            {/* Start About Two Left */}
            <div className="col-xl-6">
              <div className="about-two__left">
                <div className="about-two__big-title">
                  <h2>PAIEX</h2>
                </div> 
                <div className="about-two__left-img-box">
                  <div className="about-two__left-img1">
                    <img src="/assets/conbiz/images/about/about-v2-img1.png" alt="" />
                  </div>
                  <div 
                    className="about-two__left-img2 wow zoomIn"
                    data-wow-delay="100ms"
                    data-wow-duration="3500ms"
                  >
                    <img src="/assets/conbiz/images/about/about-v2-img2.jpg" alt="" />
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
            {/* End About Two Left */}

            {/* Start About Two Right */}
            <div className="col-xl-6">
              <div className="about-two__right">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>About PAInvestEX</h4>
                  </div>
                  <h2 className="section-title__title">
                    PCInvestEX

                  </h2>
                </div>
                <div className="about-two__right-inner">
                  <p className="about-two__right-text">
                    is a premier membership platform designed to connect entrepreneurs with investors,
                    fostering a vibrant ecosystem for business growth across the continent.
                    Our mission is to facilitate meaningful partnerships that drive innovation and economic development <br></br>
                    Members gain exclusive access to a curated selection of vetted investment opportunities across diverse sectors, ensuring that both entrepreneurs and investors can engage with confidence. Our platform not only showcases promising startups but also provides a streamlined negotiation process, making it easier for parties to align their goals and forge successful collaborations.
                    To support our members further, the Pan Africa Investment Exchange offers hands-on management training tailored to enhance entrepreneurial skills and strengthen business acumen. This training equips entrepreneurs with the knowledge and tools necessary to navigate the complexities of scaling their businesses and attracting investment

                  </p>
                  <div className="about-two__right-bottom">

                    <div className="about-two__right-btn">
                      <a href="/aboutus" className="thm-btn">
                        Learn More
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End About Two Right */}
          </div>
        </div>
      </section>
      {/* About Two End */}
    </>
  );
}

export default PAInvestEX;
