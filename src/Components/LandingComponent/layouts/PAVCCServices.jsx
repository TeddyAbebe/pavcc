import React, { useState } from 'react';

function PAVCCServices() {  
  // State to manage the visibility of the third row
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to show or hide the third row
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return ( 
    <section className="working-process-one" style={{ background: "#f0f3f8" }}>
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline">
            <span className="left" />
            <h4>PAVCC Services</h4> 
            <span className="right" />
          </div>
          <h2 className="section-title__title">
            Pan Africa Venture Capital offers <br />
            a comprehensive suite
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="working-process-one__wrapper">
              <div className="working-process-one__shape">
                <img
                  src="/assets/conbiz/images/shapes/working-process-v1-shape1.png"
                  alt="Shape"
                />
              </div>
              <ul className="list-unstyled">
                {/* Start Working Process One Single */}
                <li
                  className="working-process-one__single top50 text-center wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1000ms"
                >
                  <div className="working-process-one__single-icon">
                    <span className="icon-coffee-cup" />
                    <div className="count-box">1</div>
                  </div>
                  <h3 className="working-process-one__single-title">
                    <a href="#">Promising Business Sourcing</a>
                  </h3>
                  <p className="working-process-one__single-text">
                    We specialize in identifying <br /> high-potential startups and <br />
                    businesses that align with investors' interests.
                  </p>
                </li>
                {/* End Working Process One Single */}
                {/* Start Working Process One Single */}
                <li
                  className="working-process-one__single style2 text-center wow fadeInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="1000ms"
                >
                  <div className="working-process-one__single-icon">
                    <span className="icon-advisor" />
                    <div className="count-box">2</div>
                  </div>
                  <h3 className="working-process-one__single-title">
                    <a href="#">Deal Negotiation</a>
                  </h3>
                  <p className="working-process-one__single-text">
                    This service focuses on facilitating <br /> negotiations between investors and
                    <br />
                    businesses to secure favorable terms for both parties.
                  </p>
                </li>
                {/* End Working Process One Single */}
                {/* Start Working Process One Single */}
                <li
                  className="working-process-one__single top65 text-center wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1000ms"
                >
                  <div className="working-process-one__single-icon">
                    <span className="icon-dashboard" />
                    <div className="count-box">3</div>
                  </div>
                  <h3 className="working-process-one__single-title">
                    <a href="#">Management Services</a>
                  </h3>
                  <p className="working-process-one__single-text">
                    Our management services <br /> provide businesses <br /> with the operational support <br /> they need to thrive.
                  </p>
                </li>
                {/* End Working Process One Single */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally Rendered Third Row */}
      {isExpanded && (
        <div className="container" style={{ paddingTop: '5rem' }}>
          <div className="row">
            <div className="col-xl-12">
              <div className="working-process-one__wrapper">
                <div className="working-process-one__shape">
                  <img
                    src="/assets/conbiz/images/shapes/working-process-v1-shape1.png"
                    alt="Shape"
                  />
                </div>
                <ul className="list-unstyled">
                  {/* Start Working Process One Single */}
                  <li
                    className="working-process-one__single style2 top20 text-center wow fadeInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-success" />
                      <div className="count-box">4</div>
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">One-stop Technology Solutions</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      We recognize the critical role of <br /> technology in business success.
                    </p>
                  </li>
                  {/* End Working Process One Single */}
                  {/* Start Working Process One Single */}
                  <li
                    className="working-process-one__single top50 text-center wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-coffee-cup" />
                      <div className="count-box">5</div>
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Consulting</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      Our consultants bring industry knowledge <br /> and analytical skills <br /> to help clients navigate the complexities <br /> of the African business landscape.
                    </p>
                  </li>
                  {/* End Working Process One Single */}
                  {/* Start Working Process One Single */}
                  <li
                    className="working-process-one__single style2 text-center wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-advisor" />
                      <div className="count-box">6</div>
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Research</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      This data-driven approach empowers <br /> businesses and investors to make <br /> strategic choices based on robust evidence.
                    </p>
                  </li>
                  {/* End Working Process One Single */}
                  {/* Start Working Process One Single */}
                  <li
                    className="working-process-one__single top65 text-center wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-dashboard" />
                      <div className="count-box">7</div>
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Training</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      We offer training programs <br /> designed to build capacity and <br /> enhance skills within organizations.
                    </p>
                  </li>
                  {/* End Working Process One Single */}
                  {/* Start Working Process One Single */}
                  <li
                    className="working-process-one__single style2 top20 text-center wow fadeInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-success" />
                      <div className="count-box">8</div>
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Events</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      We organize networking events, <br /> conferences, and workshops <br /> that bring together industry leaders, <br /> entrepreneurs, and investors.
                    </p>
                  </li>
                  {/* End Working Process One Single */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Button to Show/Hide Third Row */}
      <div className="text-center" style={{ marginTop: '20px' }}>
        <button onClick={handleToggle} className="thm-btn">
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
}

export default PAVCCServices;
