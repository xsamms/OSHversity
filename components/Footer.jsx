import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <section id="footer-area" className="footer-area-section">
        <div className="container">
          <div className="footer-content pb10">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-widget">
                  <div className="footer-logo mb35">
                    <Image
                      src="/assets/img/logo/oshversity-logo.png"
                      alt=""
                      width={295}
                      height={95}
                    />
                  </div>
                  <div className="footer-about-text">
                    <p>
                      We are a complete training and competency improvement
                      company designed to meet the need gaps of employees and in
                      employers at any stage of their career plans.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget">
                  <div className="footer-menu ul-li-block">
                    <h2 className="widget-title">Useful Links</h2>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>About Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>Courses
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>Faculty Advisory
                          Board
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>HSBS
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>Pay
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget">
                  <h2 className="widget-title">Photo Gallery</h2>
                  <div className="photo-list ul-li">
                    <ul>
                      <li>
                        <Image
                          src="/assets/img/gallery/workers-3.jpg"
                          alt=""
                          width={160}
                          height={160}
                        />
                        <div className="blakish-overlay"></div>
                        <div className="pop-up-icon">
                          <a
                            href="assets/img/gallery/workers-2.jpg"
                            data-lightbox="roadtrip"
                          >
                            <i className="fas fa-search"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <Image
                          src="/assets/img/gallery/osh5.jpg"
                          alt=""
                          width={160}
                          height={160}
                        />
                        <div className="blakish-overlay"></div>
                        <div className="pop-up-icon">
                          <a
                            href="assets/img/gallery/osh4.jpg"
                            data-lightbox="roadtrip"
                          >
                            <i className="fas fa-search"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <Image
                          src="/assets/img/gallery/osh7.jpg"
                          alt=""
                          width={160}
                          height={160}
                        />
                        <div className="blakish-overlay"></div>
                        <div className="pop-up-icon">
                          <a
                            href="assets/img/gallery/osh6.jpg"
                            data-lightbox="roadtrip"
                          >
                            <i className="fas fa-search"></i>
                          </a>
                        </div>
                      </li>

                      <li>
                        <Image
                          src="/assets/img/gallery/osh9.jpg"
                          alt=""
                          width={160}
                          height={160}
                        />
                        <div className="blakish-overlay"></div>
                        <div className="pop-up-icon">
                          <a
                            href="assets/img/gallery/osh8.jpg"
                            data-lightbox="roadtrip"
                          >
                            <i className="fas fa-search"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-social-subscribe mb65">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-social ul-li">
                  <h2 className="widget-title">Connect with us</h2>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="subscribe-form">
                  <h2 className="widget-title">Subscribe to our Newsletter</h2>

                  <div className="subs-form relative-position">
                    <form action="#" method="post">
                      <input
                        className="course"
                        name="course"
                        type="email"
                        placeholder="Email Address."
                      />
                      <div className="nws-button text-center  gradient-bg text-uppercase">
                        <button type="submit" value="Submit">
                          Subscribe now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copy-right-menu">
            <div className="row">
              <div className="col-md-6">
                <div className="copy-right-text">
                  <p>
                    © 2023 - OSHversity Training and Development Company - All
                    rights reserved | Developed by&nbsp;
                    <a
                      href="https://datamegathos.com"
                      title="Best website design and mobile app development in Lagos, Nugeria"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Data Megathos
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copy-right-menu-item float-right ul-li">
                  <ul>
                    <li>
                      <a href="#">Privacy & Policy</a>
                    </li>
                    <li>
                      <a href="#">Term Of Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
