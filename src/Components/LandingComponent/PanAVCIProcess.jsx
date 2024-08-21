import React from 'react';

function PanAVCIProcess() {
  return (
    <>
      <section className="about-three">
        <div className="container-fullwidth">
          <div className="about-three__img-box">
            <img src="/assets/conbiz/images/about/about-v3-1.jpg" alt="About" />
          </div>
          <div className="about-three__content-box">
            <div className="section-title">
              <div className="section-title__tagline" >
                <span className="left" /> 
                <h4 style={{paddingTop:'5rem'}}>PAVCIProcess </h4>
              </div>
              <h2 className="section-title__title">
                PAVCIProcess
              </h2> 
            </div>
            <p className="about-three__text">
              Encompasses several distinct phases that guide the journey from initial application to exit. 
              Each phase is crucial for ensuring that investments are sound, strategic, and aligned with the venture capital firm's goals
            </p>
            <div className="about-three-lists">
              <ul className="about-three-list list-unstyled">
                <li>
                  <div className="icon">
                    <i className="fa fa-check" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <p>Application Phase</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-check" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <p>Selection Phase</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-check" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <p>Vetting Phase</p>
                  </div>
                </li>
              </ul>
              
            </div>
            <div className="buttons" style={{paddingBottom:'5rem'}}>
              <a href="/aboutus" className="thm-btn service-one-btn" >
                Read More
                <i className="fa fa-angle-double-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PanAVCIProcess;
