import React from 'react'

function IPIContributors() {
  return (
    <section className="features-four" style={{ background: "#f0f3f8" }}>
  <div className="container" >
    <div className="row">
      {/*Start Features Four Left*/}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12" >
        <div className="features-four__left" style={{ background: "#f0f3f8" }}>
          <div
            className="features-four__left-bg"
            style={{
              backgroundImage: 
                "url(/assets/conbiz/images/backgrounds/feature-v4-bg.png)"
            }}
          />
          <div className="section-title" > 
            <div className="section-title__tagline">
              <span className="left" />
              <h4>IPI Contributors </h4>
            </div>
            <h2 className="section-title__title">
            The Invest in   
              <br />
              Poverty
              <br />
              Initiative
            </h2>
          </div>
          <div className="features-four__left-bottom">
            <p className="features-four__left-text">
            represents a unique approach to supporting entrepreneurs, 
            particularly in regions where access to traditional financing can be limited.
            <br />
            By becoming a member of the IPI through the Pan Africa Venture Capital Platform, 
            individuals can contribute to a fund designed to 
            empower entrepreneurs while ensuring their financial contributions are safeguarded
            </p>
            <div className="features-four__left-btn">
              <a href="#" className="thm-btn">
                Learn More
                <i className="fa fa-angle-double-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*End Features Four Left*/}
      {/*Start Features Four Right*/}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div className="features-four__right">
          <ul className="list-unstyled">
            <li className="features-four__right-single" style={{paddingBottom:'0rem'}}>
              <div className="features-four__right-single-inner">
                <div className="icon">
                  <img src="/assets/conbiz/images/icon/features-v4-icon1.png" alt="" />
                </div>
                <div className="title" style={{marginBottom:'-4rem'}}>
                  <h4>
                    <a href="#">1.	Membership and Contributions</a>
                  </h4>
                  <p>To become an IPI member, individuals are required to make a monthly refundable membership contribution</p>
                </div>
              </div>
            </li>
            <li className="features-four__right-single" style={{paddingBottom:'0rem'}}>
              <div className="features-four__right-single-inner">
                <div className="icon">
                  <img src="/assets/conbiz/images/icon/features-v4-icon2.png" alt="" />
                </div>
                <div className="title"style={{marginBottom:'-4rem'}}>
                  <h4>
                    <a href="#">2.	Use of Membership Contribution</a>
                  </h4>
                <p>The funds collected through membership contributions are not used directly for operational costs or administrative expenses</p>
                </div>
              </div>
            </li>
            <li className="features-four__right-single" style={{paddingBottom:'0rem'}}>
              <div className="features-four__right-single-inner">
                <div className="icon">
                  <img src="/assets/conbiz/images/icon/features-v4-icon3.png" alt="" />
                </div>
                <div className="title"style={{marginBottom:'-4rem'}}>
                  <h4>
                    <a href="#">3.	Benefits for Entrepreneurs</a>
                  </h4>
                  <p>The IPI provides entrepreneurs with much-needed access to capital, which is often a significant barrier to starting or scaling a business</p>
                </div>
              </div>
            </li>



            <li className="features-four__right-single" style={{paddingBottom:'0rem'}}>
              <div className="features-four__right-single-inner">
                <div className="icon">
                  <img src="/assets/conbiz/images/icon/features-v4-icon3.png" alt="" />
                </div>
                <div className="title"style={{marginBottom:'-4rem'}}>
                  <h4>
                    <a href="#">4.	Impact on Poverty Alleviation</a>
                  </h4>
                  <p>The overarching goal of the IPI is to combat poverty through entrepreneurship</p>
                </div>
              </div>
            </li>



            <li className="features-four__right-single">
              <div className="features-four__right-single-inner">
                <div className="icon">
                  <img src="/assets/conbiz/images/icon/features-v4-icon3.png" alt="" />
                </div>
                <div className="title"style={{marginBottom:'-4rem'}}>
                  <h4>
                    <a href="#">5.	Community and Network Building</a>
                  </h4>
                 <p>Membership in the IPI also fosters a sense of community among like-minded individuals who are passionate about supporting entrepreneurshipd</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/*End Features Four Right*/}
    </div>
  </div>
</section>

  )
}

export default IPIContributors
