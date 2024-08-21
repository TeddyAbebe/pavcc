import React from 'react';

function RevenueModel() {
  return (
    <>
      {/* Chart One Start */}
      <section className="chart-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="chart-one__left">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>PAVCC Revenue Model</h4>
                  </div>
                  <h2 className="section-title__title">
                  PAVCC Revenue 
                    <br />
                    Model
                  </h2>
                </div>
                {/* <p className="chart-one__left-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p> */}
                <div className="chart-one__btn">
                  <a href="/aboutus" className="thm-btn">
                    Read More
                    <i className="fa fa-angle-double-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-8 wow slideInRight"
              data-wow-delay="500ms"
              data-wow-duration="2500ms"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className="chart-one__right">
                <div className="chart-one__img" style={{ maxWidth: '100%' }}>
                  <img
                    src="assets/conbiz/images/resources/chart-v2-img.jpg"
                    alt="Company Analysis Chart"
                    style={{ width: '100%', height: 'auto', maxHeight: '700px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chart One End */}
    </>
  );
}

export default RevenueModel;
