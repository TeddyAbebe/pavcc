import React from 'react';

function PAVCCServices() {
  return (
    <section className="working-process-one">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline">
            <span className="left" />
            <h4>PAVCC Services </h4>
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
              <div className="service-two__btn text-center" style={{ paddingTop: '5rem' }}>
                <a href="/aboutus" className="thm-btn">
                  Read More
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PAVCCServices;
