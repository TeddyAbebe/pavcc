import React, { useState } from 'react';
import './Pricing.css'; // Import the CSS file

function Pricing() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  
  // Define the initial rows that are always visible
  const initialRows = [
    { label: 'Sites', free: '1', personal: '1', pro: '1' },
    { label: 'Data Retention', free: '30 Days', personal: '90 Days', pro: '180 Days' },
    { label: 'Chart Annotations', free: <i className="fas fa-times"></i>, personal: <i className="fas fa-check"></i>, pro: <i className="fas fa-check"></i> },
    { label: 'Sites', free: '1', personal: '1', pro: '1' },
    { label: 'Data Retention', free: '30 Days', personal: '90 Days', pro: '180 Days' },
    { label: 'Chart Annotations', free: <i className="fas fa-times"></i>, personal: <i className="fas fa-check"></i>, pro: <i className="fas fa-check"></i> }
  ]; 

  // Define the additional rows that are shown when "Show More" is clicked
  const additionalRows = [
    { label: 'Support', free: 'Email', personal: 'Priority Email', pro: '24/7 Phone Support' },
    { label: 'Advanced Analytics', free: <i className="fas fa-times"></i>, personal: <i className="fas fa-check"></i>, pro: <i className="fas fa-check"></i> },
    { label: 'Support', free: 'Email', personal: 'Priority Email', pro: '24/7 Phone Support' },
    { label: 'Advanced Analytics', free: <i className="fas fa-times"></i>, personal: <i className="fas fa-check"></i>, pro: <i className="fas fa-check"></i> }
    // Add more rows as needed
  ];

  return (
    <section className="working-process-one">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline">
            <span className="left" />
            <h4>Business Profiles</h4>
            <span className="right" />
          </div>
          <h2 className="section-title__title">Latest Businesses</h2>
        </div>
        <div className="row">
          <div className="main">
            <table className="price-table">
              <tbody>
                <tr>
                  <td className="price-blank"></td>
                  <td className="price-blank"></td>
                  <td className="price-table-popular">Most popular</td>
                  <td className="price-blank"></td>
                </tr>
                <tr className="price-table-head">
                  <td></td>
                  <td>
                    Free
                    <br />
                    <small style={{ fontSize: '12px', fontWeight: 400 }}>Starter plan</small>
                  </td>
                  <td>
                    Personal
                    <br />
                    <small style={{ fontSize: '12px', fontWeight: 400 }}>Longer data retention</small>
                  </td>
                  <td>
                    Pro
                    <br />
                    <small style={{ fontSize: '12px', fontWeight: 400 }}>Our complete solution</small>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="price">
                    <img src="rocket-icon.svg" alt="Free Plan" />
                    <br />
                    Free
                    <br />
                    <a href="#">Get started</a>
                  </td>
                  <td className="price">
                    <img src="personal-icon.svg" alt="Personal Plan" />
                    <br />
                    €9/mo
                    <br />
                    <a href="#">Get started</a>
                  </td>
                  <td className="price">
                    <img src="pro-icon.svg" alt="Pro Plan" />
                    <br />
                    €39/mo
                    <br />
                    <a href="#">Get started</a>
                  </td>
                </tr>
                {initialRows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.label}</td>
                    <td>{row.free}</td>
                    <td>{row.personal}</td>
                    <td>{row.pro}</td>
                  </tr>
                ))}
                {showMore && additionalRows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.label}</td>
                    <td>{row.free}</td>
                    <td>{row.personal}</td>
                    <td>{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-center" style={{paddingTop:'5rem', paddingBottom:'1rem'}}>
              <button onClick={handleShowMore} className="show-more-button thm-btn service-one-btn">
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
