import React, { useState } from 'react';

function ProcessSection() { 
  // State to manage the visibility of the third row
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to show or hide the third row
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };  
 
  return (
    <section className="process-section centred pt_120 pb_90" style={{ background: "#f0f3f8" }}>
      <div
        className="bg-layer"
        style={{
          backgroundImage: "url(/assets/metro/images/background/process-bg.jpg)"
        }}
      /> 
      <div className="auto-container">
        <div className="sec-title mb_110">
          <h6>PAVCI Process</h6>
          <h2>PAVCI Process</h2>
        </div>
        <div className="inner-container">
          {/* First Row */}
          <div className="processing-block-one">
            <div
              className="arrow-shape"
              style={{ backgroundImage: "url(/assets/metro/images/shape/shape-12.png)" }}
            />
            <div className="inner-box">
              <span className="count-text">
                01 <br />
                Step
              </span>
              <h3>
                1.	Application Phase
              </h3>
              <p>This is the initial stage where entrepreneurs submit their business proposals to PAInvestEX.</p>
            </div>
          </div>
          <div className="processing-block-one">
            <div
              className="arrow-shape"
              style={{ backgroundImage: "url(/assets/metro/images/shape/shape-13.png)" }}
            />
            <div className="inner-box">
              <span className="count-text">
                02 <br />
                Step
              </span>
              <h3>
                2.	Selection Phase
              </h3>
              <p>During the selection phase, PAVCC reviews applications to filter out candidates that do not align with their investment strategy.</p>
            </div>
          </div>
          {/* Second Row */}
          <div className="processing-block-one">
            <div className="inner-box">
              <span className="count-text">
                03 <br />
                Step
              </span>
              <h3>
                3.	Vetting Phase
              </h3>
              <p>The vetting phase involves deeper investigation into the shortlisted companies.</p>
            </div>
          </div>
        </div>






        {/* Conditionally Rendered Third Row */}
        {isExpanded && (
          <>
            <div className="inner-container" style={{ paddingTop: '6.2rem' }}>
              <div className="processing-block-one">
                <div
                  className="arrow-shape"
                  style={{ backgroundImage: "url(/assets/metro/images/shape/shape-12.png)" }}
                />
                <div className="inner-box">
                  <span className="count-text">
                    04 <br />
                    Step
                  </span>
                  <h3>
                    4.	Analysis Phase
                  </h3>
                  <p>After vetting, a thorough analysis is conducted to evaluate the investment's potential return.</p>
                </div>
              </div>
              <div className="processing-block-one">
                <div
                  className="arrow-shape"
                  style={{ backgroundImage: "url(/assets/metro/images/shape/shape-13.png)" }}
                />
                <div className="inner-box">
                  <span className="count-text">
                    05 <br />
                    Step
                  </span>
                  <h3>
                    5.	Investor Presentation Phase
                  </h3>
                  <p>In this phase, the selected entrepreneurs present their business to the venture capitalists formally.</p>
                </div>
              </div>
              <div className="processing-block-one">
                <div className="inner-box">
                  <span className="count-text">
                    06 <br />
                    Step
                  </span>
                  <h3>
                    6.	Negotiation Phase
                  </h3>
                  <p>If the investor is interested, negotiations begin.</p>
                </div>
              </div>
            </div>
            <div className="inner-container" style={{ paddingTop: '6.2rem' }}>
              <div className="processing-block-one">
                <div
                  className="arrow-shape"
                  style={{ backgroundImage: "url(/assets/metro/images/shape/shape-12.png)" }}
                />
                <div className="inner-box">
                  <span className="count-text">
                    04 <br />
                    Step
                  </span>
                  <h3>
                    Contract Phase
                  </h3>
                  <p>Once the terms are agreed upon, legal contracts are drafted and signed.</p>
                </div>
              </div>
              <div className="processing-block-one">
                <div
                  className="arrow-shape"
                  style={{ backgroundImage: "url(/assets/metro/images/shape/shape-13.png)" }}
                />
                <div className="inner-box">
                  <span className="count-text">
                    05 <br />
                    Step
                  </span>
                  <h3>
                    8.	Investment Phase
                  </h3>
                  <p>With contracts in place, the venture capital firm disburses the funds.</p>
                </div>
              </div>
              <div className="processing-block-one">
                <div className="inner-box">
                  <span className="count-text">
                    06 <br />
                    Step
                  </span>
                  <h3>
                  9.	Management Phase
                  </h3>
                  <p>In the management phase, the venture capitalists actively monitor the investment, often taking a seat on the board of directors.</p>
                </div>
              </div>
            </div>
          </>


        )}

        {/* Button to Show/Hide Third Row */}
        <div className="text-center" style={{ marginTop: '20px' }}>
          <button onClick={handleToggle} className="thm-btn">
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
