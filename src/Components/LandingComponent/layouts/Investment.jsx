import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt,  } from 'react-icons/fa';
import Modal from 'react-modal';

// Ensure the app root element is correctly set for accessibility
Modal.setAppElement('#root');

function Investment() {    
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  // Function to open the modal and set the PDF URL
  const openModal = (url) => {
    setPdfUrl(url);
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
    setPdfUrl('');
  };

  // Inline styles for modal
  const modalStyles = {
    content: {
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: 'white',
      maxWidth: '600px',
      margin: 'auto',
      position: 'relative',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      marginRight: '10px',
    },
    closeButton: {
      backgroundColor: '#6c757d',
    },
  };

  return (
    <>
      {/* News Section */}

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
        <section className="news-section blog-image pt_120 pb_120">
        <div className="auto-container">
          <div className="row clearfix">
            {/* News Block 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="inner-box" style={{ backgroundImage: "url(assets/metro/images/news/news-1.png)" }}>
                  <div className="content-box">
                    <span className="post-date">
                      <FaCalendarAlt /> Agu 16, 2024
                    </span>
                    <h3>
                      <Link to="#">
                      Capitalizing on Africa's Untapped Markets
                      </Link>
                    </h3>
                    <ul className="post-info mb_25">
                      
                    </ul>
                    <div className="btn-box">
                      <button onClick={() => openModal('assets/documents/document1.pdf')} className="theme-btn btn-three">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat for other blocks */}
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box" style={{ backgroundImage: "url(assets/metro/images/news/news-2.png)" }}>
                  <div className="content-box">
                    <span className="post-date">
                      <FaCalendarAlt /> Apr 16, 2024
                    </span>
                    <h3>
                      <Link to="#">
                      Pan Africa Investment Guide Series
                      </Link>
                    </h3>
                    <ul className="post-info mb_25">
                      
                    </ul>
                    <div className="btn-box">
                      <button onClick={() => openModal('assets/documents/document3.pdf')} className="theme-btn btn-three">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* Third block */}
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="inner-box" style={{ backgroundImage: "url(assets/metro/images/news/news-2.png)" }}>
                  <div className="content-box">
                    <span className="post-date">
                      <FaCalendarAlt /> Apr 15, 2024
                    </span>
                    <h3>
                      <Link to="/blog-details">
                      Pan Africa Investment Guide Series
                      </Link>
                    </h3>
                    <ul className="post-info mb_25">
                      
                    </ul>
                    <div className="btn-box">
                      <button onClick={() => openModal('assets/documents/document3.pdf')} className="theme-btn btn-three">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination-wrapper centred pt_50">
            <ul className="pagination">
              <li>
                <Link to="#">
                  <i className="fa fa-arrow-left" />
                </Link>
              </li>
              <li>
                <Link to="#" className="current">
                  1
                </Link>
              </li>
              {/* <li>
                <Link to="/blog-2">2</Link>
              </li>
              <li>
                <Link to="/blog-3">3</Link>
              </li> */}
              <li>
                <Link to="#">
                  <i className="fa fa-arrow-right" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* End of News Section */}
      </div>
    </section>

     

      {/* Modal for PDF Download */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Download PDF"
        style={{
          content: modalStyles.content,
          overlay: modalStyles.overlay,
        }}
        closeTimeoutMS={200} // Optional: Adds a fade-out effect
      >
        <h2>Download PDF</h2>
        <p>Click the button below to download the document.</p>
        <a href={pdfUrl} download style={modalStyles.button}>
          Download PDF
        </a>
        <button onClick={closeModal} style={{ ...modalStyles.button, ...modalStyles.closeButton }}>
          Close
        </button>
      </Modal>
    </>
  );
}

export default Investment;
