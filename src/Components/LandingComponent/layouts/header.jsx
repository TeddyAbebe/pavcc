import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [activeCard, setActiveCard] = useState("investor");
  const [nextButtonText, setNextButtonText] = useState("Next as an Investor");

  const toggleModal = () => setShowModal(!showModal);

  const handleCardClick = (card) => {
    setActiveCard(card);
    if (card === "investor") {
      setNextButtonText("Next as an Investor");
    } else if (card === "entrepreneur") {
      setNextButtonText("Next as an Entrepreneur");
    } else if (card === "team") {
      setNextButtonText("Next as a Team Member");
    }
  };
  const navigate = useNavigate();
  const handleNextClick = () => {
    if (activeCard === "investor") {
      navigate("/register/vc");
    }
    if (activeCard === "entrepreneur") {
      navigate("/register/entrepreneur");
    }
    if (activeCard === "team") {
      navigate("/");
    }
  };

  return (
    <>
      <header className="main-header main-header--one clearfix">
        <div className="main-header-one__bottom">
          <div className="auto-container">
            <div className="main-header-one__bottom-inner clearfix">
              <nav className="main-menu main-menu--1">
                <div className="main-menu__inner">
                  <div className="left">
                    <div className="logo-box1">
                      <a href="/">
                        <img
                          src="/assets/conbiz/images/resources/logo-1.png"
                          alt="Logo"
                        />
                      </a>
                    </div>
                  </div>
                  <a href="/" className="mobile-nav__toggler">
                    <i className="fa fa-bars" />
                  </a>
                  <div className="middle">
                    <ul className="main-menu__list">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/aboutus">About</a>
                      </li>
                      <li>
                        <a href="#pricing-section">Pricing</a>
                      </li>
                      <li>
                        <a href="/services">Services</a>
                      </li>
                      <li>
                        <a href="/investmentguide">Investment Guide</a>
                      </li>
                      <li>
                        <a href="https://kegeberewuniversity.com/">
                          Development Center
                        </a>
                      </li>
                      <li>
                        <a href="http://ipimembership.com/">Contribute</a>
                      </li>
                      <li>
                        <a href="/">Team</a>
                      </li>
                      <li>
                        <a href="/contactus">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <div className="main-menu__right">
                      <div className="phone_number">
                        <div className="icon">
                          <span className="icon-avatar" />
                        </div>
                        <div className="number">
                          <a
                            href="/"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleModal();
                            }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              textDecoration: "none",
                              color: "#d7a022",
                              transition: "color 0.3s ease",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              style={{
                                width: "1em",
                                height: "1em",
                                verticalAlign: "middle",
                                marginRight: "0.25em",
                              }}
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            Login | Signup
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Get Started</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center">
                  <div
                    className={`card ${
                      activeCard === "investor" ? "border-primary" : ""
                    }`}
                    onClick={() => handleCardClick("investor")}
                    style={{
                      cursor: "pointer",
                      width: "30%",
                      padding: "20px",
                      margin: "10px",
                      transition: "transform 0.3s",
                      transform:
                        activeCard === "investor" ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title">As an Investor</h5>
                      <p className="card-text">Click to learn more.</p>
                    </div>
                  </div>
                  <div
                    className={`card ${
                      activeCard === "entrepreneur" ? "border-primary" : ""
                    }`}
                    onClick={() => handleCardClick("entrepreneur")}
                    style={{
                      cursor: "pointer",
                      width: "30%",
                      padding: "20px",
                      margin: "10px",
                      transition: "transform 0.3s",
                      transform:
                        activeCard === "entrepreneur"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title">As an Entrepreneur</h5>
                      <p className="card-text">Click to learn more.</p>
                    </div>
                  </div>
                  <div
                    className={`card ${
                      activeCard === "team" ? "border-primary" : ""
                    }`}
                    onClick={() => handleCardClick("team")}
                    style={{
                      cursor: "pointer",
                      width: "30%",
                      padding: "20px",
                      margin: "10px",
                      transition: "transform 0.3s",
                      transform:
                        activeCard === "team" ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title">As a Team</h5>
                      <p className="card-text">Click to learn more.</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <div
                    className={`tab-pane fade ${
                      activeCard === "investor" ? "show active" : ""
                    }`}
                    id="investor"
                    style={{ textAlign: "center" }}
                  >
                    <p>
                      Welcome to the Investor section. Here you will find all
                      the resources and opportunities tailored for investors.
                    </p>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeCard === "entrepreneur" ? "show active" : ""
                    }`}
                    id="entrepreneur"
                    style={{ textAlign: "center" }}
                  >
                    <p>
                      Welcome to the Entrepreneur section. Discover various
                      tools and support available for entrepreneurs.
                    </p>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeCard === "team" ? "show active" : ""
                    }`}
                    id="team"
                    style={{ textAlign: "center" }}
                  >
                    <p>
                      Welcome to the Team section. Learn more about how our team
                      can support and collaborate with you.
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button className="btn btn-primary" onClick={handleNextClick}>
                    {nextButtonText}
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center mt-3">
                  <span className="mb-2">or</span>
                  <NavLink to={"/login"} className="no-underline"><h4>Login</h4></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
