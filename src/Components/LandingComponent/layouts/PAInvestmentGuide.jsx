import React, { useState } from 'react';


function PAInvestmentGuide() { 
// State to manage the visibility of the third row
const [isExpanded, setIsExpanded] = useState(false);

// Toggle function to show or hide the third row
const handleToggle = () => {
  setIsExpanded(!isExpanded);
};
 
  return (
    <section className="services-three clearfix">
      <div className="container"> 
        <div className="section-title text-center">
          <div className="section-title__tagline">
            <span className="left" />
            <h4>PA Investment Guide </h4>
            <span className="right" />
          </div>
          <h2 className="section-title__title">
            It serves as a comprehensive resource for
            <br />
            understanding the investment landscape across Africa
          </h2>
        </div>
        <div className="row">
          {/*Start Single Services Three*/}
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-brainstorm" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Country Profiles</a>
                </h3>
                <p className="services-three__single-text">
                  a.	In-depth analysis of individual countries economies
                  b.	GDP growth rates, key sectors,
                  c.	Demographic insights.
                  d.	Economic performance,
                  e.	Major industries
                  f.	Market potential. Profiles typically cover

                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-brainstorm" />
              </div>
            </div>
          </div>
          {/*End Single Services Three*/}
          {/*Start Single Services Three*/}
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-compliant" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Investment Climate</a>
                </h3>
                <p className="services-three__single-text">
                  a.	Evaluation of the overall investment environment in each country, including ease of doing business rankings, <br />
                  b.	Political stability, and legal frameworks that govern foreign investment.

                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-compliant" />
              </div>
            </div>
          </div>
          {/*End Single Services Three*/}
          {/*Start Single Services Three*/}
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-analysis" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Sectoral Opportunities</a>
                </h3>
                <p className="services-three__single-text">
                  Identification of lucrative sectors for investment, such as agriculture, manufacturing, <br />
                  technology, energy, infrastructure , and emerging trends and market gaps that present opportunities for investors.
                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-analysis" />
              </div>
            </div>
          </div>
          {/*End Single Services Three*/}
{/* Conditionally Rendered Third Row */}
{isExpanded && (

          <>
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-analysis" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Regulatory Framework</a>
                </h3>
                <p className="services-three__single-text">
                  Overview of the laws and regulations affecting investment, including taxation policies, foreign ownership restrictions, <br />
                  and compliance requirements. This information is vital for investors to navigate the legal landscape
                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-analysis" />
              </div>
            </div>
          </div>
          {/*End Single Services Three*/}
          {/*Start Single Services Three*/}
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-analysis" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Bilateral Agreements and Trade Policies</a>
                </h3>
                <p className="services-three__single-text">
                  Information on trade agreements and investment treaties between African countries and other regions, <br />
                  which could facilitate cross-border investments and enhance market access
                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-analysis" />
              </div>
            </div>
          </div>
          {/*End Single Services Three*/}
          {/*Start Single Services Three*/}
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-analysis" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Funding and Incentives</a>
                </h3>
                <p className="services-three__single-text">
                  Insights into available funding sources, including government incentives for foreign direct investment, grants, and <br /><br />
                  loans from international financial institutions
                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-analysis" />
              </div>
            </div>
          </div>
          {/*End Single Services Three*/}

          {/*Start Single Services Three*/}
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-analysis" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Case Studies</a>
                </h3>
                <p className="services-three__single-text">
                  Real-life examples of successful investments in various sectors across the continent, <br />
                  showcasing best practices and lessons learned
                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-analysis" />
              </div>
            </div>
          </div>
          {/*End Single Services Three*/}


          {/*Start Single Services Three*/}
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-analysis" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Challenges and Risks</a>
                </h3>
                <p className="services-three__single-text">
                  Analysis of potential challenges investors may face, including political risk, currency fluctuations, and <br />
                  infrastructure deficits, alongside strategies for mitigating these risks
                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-analysis" />
              </div>
            </div>
          </div>
          {/*End Single Services Three*/}


          {/*Start Single Services Three*/}
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-analysis" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Networking and Support</a>
                </h3>
                <p className="services-three__single-text">
                  Information on investment forums, business associations, and <br />
                  networking opportunities that can assist investors in establishing connections and gaining local insights
                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-analysis" />
              </div>
            </div>
          </div>
          {/*End Single Services Three*/}

          {/*Start Single Services Three*/}
          {/* <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="services-three__single">
              <div className="services-three__single-icon">
                <span className="icon-analysis" />
              </div>
              <div className="services-three__single-inner">
                <div
                  className="services-three__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(/assets/conbiz/images/services/services-v3-img1.jpg)",
                  }}
                />
                <h3 className="services-three__single-title">
                  <a href="services-details.html">Future Trends</a>
                </h3>
                <p className="services-three__single-text">
                  Exploration of upcoming trends in the African investment landscape, such as digital transformation, urbanization, and <br />
                  sustainability initiatives, which could shape future opportunities
                </p>
                <div className="services-three__single__btn-box">
                  <div className="services-three__single-btn">
                    <a href="#">
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-three__single-overly-btn">
                    <a href="#" className="thm-btn about-three-btn">
                      Learn More
                      <i className="fa fa-angle-double-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="services-three__single-icon-layer">
                <span className="icon-analysis" />
              </div>
            </div>
          </div> */}
          {/*End Single Services Three*/}
      </>
    )}
    {/* Button to Show/Hide Third Row */}
    <div className="text-center" style={{ marginTop: '20px' }}>
          <button onClick={handleToggle} className="thm-btn">
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
    </div>
      </div>

    </section>
  );
}


export default PAInvestmentGuide