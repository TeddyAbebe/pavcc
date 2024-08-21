import React, { useState } from 'react';
import './FAQSection.css';

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  }; 

  const faqData = [
    {
      question: 'What is the Pan Africa Venture Capital Consortium?',
      answer: 'The Pan Africa Venture Capital Consortium (PAVCC) is an initiative aimed at promoting investment in startups and early-stage businesses across Africa. It brings together investors, venture capitalists, and development finance institutions to create a collaborative environment for funding innovative enterprises. The consortium focuses on sectors such as, technology, agriculture, health, agriculture, agro-processing and renewable energy to drive economic growth and job creation across the continent.',
    },
    { 
      question: 'Who can apply for funding from the PAVCC?',
      answer: 'Funding from the PAVCC is available to startups and early-stage businesses operating in Africa. Applicants should typically have a solid business plan, a scalable business model, and a viable product or service. Preference is given to businesses that demonstrate potential for significant social impact, job creation, and sustainable growth.',
    },
    {
      question: 'What types of funding does PAVCC provide?',
      answer: 'The PAVCC provides various forms of funding, including equity investments, convertible notes, and grants. The specific type of funding depends on the stage of the business, the sector, and the potential for return on investment. The consortium aims to support businesses with tailored financial solutions that meet their unique needs.',
    },


    {
      question: 'How does PAVCC evaluate funding applications?',
      answer: "Applications are evaluated based on several criteria, including the business model's viability, the management team's experience, market potential, financial projections, and alignment with the consortium’s strategic focus areas. The evaluation process may involve a detailed review of the business plan, interviews with the founders, and due diligence to assess the business's potential and risks.",
    },
    {
      question: 'Is there a geographic focus for PAVCC investments?',
      answer: 'Yes, the PAVCC primarily focuses on investments in African countries. While it aims to have a pan-African approach, specific countries or regions may receive more attention based on factors such as market size, economic stability, and investment opportunities. The consortium seeks to balance investments across various regions to foster inclusive growth.',
    },
    {
      question: 'What is the expected timeline for receiving funding?',
      answer: 'The timeline for receiving funding can vary based on the complexity of the application and due diligence process. Generally, applicants can expect a timeline of several weeks to a few months from the submission of their application to the final decision. The consortium strives to provide timely feedback and keep applicants informed during the evaluation process.',
    },
    {
      question: 'Are there any requirements for reporting after receiving funding?',
      answer: 'Yes, recipients of funding from the PAVCC are typically required to provide regular updates on their business performance. This may include financial reports, progress on milestones, and other relevant metrics. The consortium uses this information to assess the impact of its investments and ensure that businesses are on track to achieve their goals.',
    },
    
    
  ];

  return (
    <div className="faq-container">
      <div className="faq-content">
        <div className="faq-left">
          <div className="faq-header">
            <span className="faq-icon">← FAQ →</span>
            <h2> Frequently Asked Questions</h2>
            <p>
            Pan Africa Venture Capital Consortium (PAVCC) is a 
            dynamic investment platform dedicated to fostering innovation and 
            entrepreneurship across the African continent
            </p>
          </div>
          <div className="faq-unique">
            <div className="faq-unique-item">
              <span className="faq-unique-icon">✔</span>
              <div>
                <h4>STARTUPS</h4>
                <p>empower startups and small to medium enterprises (SMEs) by providing them with the necessary capital, expertise, 
                  and networks to thrive in a competitive landscape</p>
              </div>
            </div>
            <div className="faq-unique-item">
              <span className="faq-unique-icon">✔</span>
              <div>
                <h4>PAINVESTEX</h4>
                <p>The Pan Africa Investment Exchange (PAInvestEX) is a premier membership platform designed to connect entrepreneurs with investors, 
                  fostering a vibrant ecosystem for business growth across the continent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-right">
          <div >
            
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggle(index)}>
                  <h3>{item.question}</h3>
                  <span>{selected === index ? '-' : '+'}</span>
                </div>
                <div className={`faq-answer ${selected === index ? 'show' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
