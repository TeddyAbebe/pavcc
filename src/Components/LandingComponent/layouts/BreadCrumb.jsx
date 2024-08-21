import React from 'react'




function pageheader() {  
  return (
    <>   
    {/*Page Header Start*/}
    <section 
      className="page-header clearfix"
      style={{ 
        backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)"
      }}
    >
      <div className="container">
        <div className="page-header__inner clearfix">
          <h2
            className="wow slideInDown animated"
            data-wow-delay="0.3s"
            data-wow-duration="1500ms"
          >
            About Us
          </h2>
          <ul
            className="thm-breadcrumb list-unstyled wow slideInUp animated"
            data-wow-delay="0.3s"
            data-wow-duration="1500ms"
          >
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-double-right" aria-hidden="true" />
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </section>
    {/*Page Header End*/}
  </>
  

  )
}

export default pageheader