import React from "react";

export default function contact() {
  return (
    <>
      <section
        id="breadcrumb"
        className="breadcrumb-section relative-position backgroud-style"
      >
        <div className="blakish-overlay"></div>
        <div className="container">
          <div className="page-breadcrumb-content text-center">
            <div className="page-breadcrumb-title">
              <h2 className="breadcrumb-head black bold">
                <span>Contact Us</span>
              </h2>
            </div>
            <div className="page-breadcrumb-item ul-li">
              <ul className="breadcrumb text-uppercase black">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact-form"
        className="contact-form-area_3 contact-page-version"
      >
        <div className="container">
          <div className="section-title mb45 headline text-center">
            <span className="subtitle text-uppercase">Send us a message</span>
            <h2>
              Send Us A<span> Message.</span>
            </h2>
          </div>

          <div className="contact_third_form">
            <form
              className="contact_form"
              action="#"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="row">
                <div className="col-md-4">
                  <div className="contact-info">
                    <input
                      className="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info">
                    <input
                      className="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info">
                    <input
                      className="number"
                      name="number"
                      type="number"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <textarea placeholder="Message."></textarea>
              <div className="nws-button text-center  gradient-bg text-uppercase">
                <button type="submit" value="Submit">
                  SEND EMAIL <i className="fas fa-caret-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section
        id="contact-area"
        className="contact-area-section backgroud-style"
      >
        <div className="container">
          <div className="contact-area-content">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-left-content ">
                  <div className="section-title  mb45 headline text-left">
                    <span className="subtitle ml42  text-uppercase">
                      CONTACT US
                    </span>
                    <h2>
                      <span>Get in Touch</span>
                    </h2>
                  </div>

                  <div className="contact-address">
                    <div className="contact-address-details">
                      <div className="address-icon relative-position text-center float-left">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="address-details ul-li-block">
                        <ul>
                          <li>
                            <span></span>8, Adeojo Street, WEMABOD Estate, Off
                            Adeniyi Jones, Ikeja
                          </li>
                          <li>
                            <span></span>Lagos - Nigeria
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="contact-address-details">
                      <div className="address-icon relative-position text-center float-left">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="address-details ul-li-block">
                        <ul>
                          <li>
                            <span>Primary: </span>(+234) 802 491 8800
                          </li>
                          <li>
                            <span>Second: </span>(+234) 1 454 9255
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="contact-address-details">
                      <div className="address-icon relative-position text-center float-left">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="address-details ul-li-block">
                        <ul>
                          <li>
                            <span>Primary: </span>info@oshversity.com
                          </li>
                          <li>
                            <span>Second: </span>ehi@oshversity.com
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genius-btn mt60 gradient-bg text-center text-uppercase ul-li-block bold-font ">
                  <a href="#">
                    Contact Us <i className="fas fa-caret-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div id="contact-map" className="contact-map-section">
                  <div id="google-map">
                    <div id="googleMaps" className="google-map-container">
                      <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe
                            width="900"
                            height="700"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=8,%20Adeojo%20Street,%20WEMABOD%20Estate,%20Off%20Adeniyi%20Jones,%20Ikeja%20Lagos%20-%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
