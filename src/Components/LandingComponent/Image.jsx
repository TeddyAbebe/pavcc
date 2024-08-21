import React from 'react'

function Image() {
  return (
    <>
  {/*Chart One Start*/}
  <section className="chart-one">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="chart-one__left">
            <div className="section-title">
              <div className="section-title__tagline"> 
                <span className="left" />
                <h4>Company Analysis</h4>
              </div>
              <h2 className="section-title__title">
                Les’s Look About Our 
                <br />
                Company Statices
              </h2>
            </div>
            <p className="chart-one__left-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptem
              accusantiu dolorem ulau dantium totam
            </p>
            <div className="chart-one__btn">
              <a href="#" className="thm-btn">
                Get Free Quote{" "}
                <i className="fa fa-angle-double-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-6 wow slideInRight"
          data-wow-delay="500ms"
          data-wow-duration="2500ms"
        >
          <div className="chart-one__right">
            <div className="chart-one__img">
              <img src="/assets/conbiz/images/resources/chart-v2-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Chart One End*/}
</>

  )
}

export default Image