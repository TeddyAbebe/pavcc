import React, { useEffect, useState } from 'react';
// import WOW from 'wowjs';
import 'animate.css';

function WorkWithUs() {  
  // useEffect(() => {
    // Initialize WOW.js for animations
    // new WOW.WOW().init();
  // }, []);
 
  // State to manage the visibility of the third row
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to show or hide the third row
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

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
                      Get Free Quote
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                    <div className="video-button">
                      <a
                        className="video-popup video-btn"
                        title="Conbiz Video Gallery"
                        href="https://www.youtube.com/watch?v=FgA6MwKmmc0"
                      >
                        <span className="txt">Watch Video</span>
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
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingRight: '1rem' }}>
              <div
                className="features-one__single wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon3.png" alt="Impactful Engagement" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                        1. Impactful Engagement
                      </a>
                      <p>Being part of this consortium allows you to contribute to the growth of businesses that can change communities and economies. Your work can directly influence startups and entrepreneurs, helping them scale and succeed</p>
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
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingLeft: '1rem' }}>
              <div
                className="features-one__single wow fadeInRight animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="Diverse Roles" />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                        2. Diverse Roles
                      </a>
                      <p>The consortium encompasses a variety of positions, including moderators, entrepreneurship instructors, mentors, consultants, marketers, portfolio managers, investment analysts, and general support staff. This diversity means that there is a role for everyone, regardless of their background or expertise</p>
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

          {/* Conditionally Rendered Third Row */}
          {isExpanded && (
            <>
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
                        <img src="/assets/conbiz/images/icon/features-v1-icon3.png" alt="Networking Opportunities" />
                      </div>
                      <div className="features-one__single-left-text">
                        <h4>
                          <a href="#">
                            3. Networking Opportunities
                          </a>
                          <p>Working with a consortium of venture capitalists, entrepreneurs, and industry leaders provides unparalleled networking opportunities. Collaborating with like-minded individuals can lead to new partnerships, ideas, and initiatives</p>
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
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingLeft: '1rem' }}>
                  <div
                    className="features-one__single wow fadeInRight animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="features-one__single-left">
                      <div className="features-one__single-left-icon">
                        <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="Professional Development" />
                      </div>
                      <div className="features-one__single-left-text">
                        <h4>
                          <a href="#">
                            4. Professional Development
                          </a>
                          <p>The consortium emphasizes continuous learning and growth. Participation allows individuals to enhance their skills, gain new insights into the venture capital landscape, and learn from experienced professionals in the field</p>
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
                        <img src="/assets/conbiz/images/icon/features-v1-icon3.png" alt="Supportive Environment" />
                      </div>
                      <div className="features-one__single-left-text">
                        <h4>
                          <a href="#">
                            5. Supportive Environment
                          </a>
                          <p>The consortium fosters a culture of collaboration and support. Whether you are mentoring entrepreneurs or working behind the scenes in support roles, you will be part of a team that values each member’s contribution and promotes collective success</p>
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
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingLeft: '1rem' }}>
                  <div
                    className="features-one__single wow fadeInRight animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="features-one__single-left">
                      <div className="features-one__single-left-icon">
                        <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="Work-Life Balance" />
                      </div>
                      <div className="features-one__single-left-text">
                        <h4>
                          <a href="#">
                            6. Work-Life Balance
                          </a>
                          <p>With a mission to drive entrepreneurship, the consortium is at the forefront of innovation in Africa. Those involved will have the chance to work on cutting-edge projects and support groundbreaking ideas that can lead to significant societal change</p>
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
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingLeft: '1rem' }}>
                  <div
                    className="features-one__single wow fadeInRight animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="features-one__single-left">
                      <div className="features-one__single-left-icon">
                        <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="Work-Life Balance" />
                      </div>
                      <div className="features-one__single-left-text">
                        <h4>
                          <a href="#">
                          7.	Contribution to Economic Growth
                          </a>
                          <p>By supporting startups and fostering entrepreneurship, participants play a crucial role in driving economic growth in Africa. This work not only benefits the businesses involved but also creates jobs and improves livelihoods across communities</p>
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
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingLeft: '1rem' }}>
                  <div
                    className="features-one__single wow fadeInRight animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="features-one__single-left">
                      <div className="features-one__single-left-icon">
                        <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="Work-Life Balance" />
                      </div>
                      <div className="features-one__single-left-text">
                        <h4>
                          <a href="#">
                          8.	Global Perspective
                          </a>
                          <p>The consortium often engages with international partners and investors, providing a global perspective on venture capital and entrepreneurship. This exposure can help participants understand global trends and best practices, which can be applied locally</p>
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
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingLeft: '1rem' }}>
                  <div
                    className="features-one__single wow fadeInRight animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="features-one__single-left">
                      <div className="features-one__single-left-icon">
                        <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="Work-Life Balance" />
                      </div>
                      <div className="features-one__single-left-text">
                        <h4>
                          <a href="#">
                          9.	Commitment to Sustainability
                          </a>
                          <p>The consortium is likely to prioritize sustainable business ampractices, ensuring that the ventures supported contribute positively to the environment and society. This commitment attracts individuals who are passionate about creating a better future</p>
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
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ paddingLeft: '1rem' }}>
                  <div
                    className="features-one__single wow fadeInRight animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="features-one__single-left">
                      <div className="features-one__single-left-icon">
                        <img src="/assets/conbiz/images/icon/features-v1-icon4.png" alt="Work-Life Balance" />
                      </div>
                      <div className="features-one__single-left-text">
                        <h4>
                          <a href="#">
                          10.	Legacy Building
                          </a>
                          <p>Being part of a pioneering initiative like the Pan Africa Venture Capital Consortium allows individuals to leave a lasting legacy in the entrepreneurial ecosystem of Africa, shaping the future of business on the continent</p>
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
            </>
          )}

          {/* Button to toggle the visibility of the third row */}
          <div className="text-center my-4">
            <button onClick={handleToggle} className="thm-btn">
              {isExpanded ? 'Hide Details' : 'Show More Details'}
            </button>
          </div>
        </div>
      </section>
      {/* Features One End */}
    </>
  );
}

export default WorkWithUs;
