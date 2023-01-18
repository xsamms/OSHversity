import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header_3 gradient-bg">
        <div className="container">
          <div className="navbar-default">
            <div className="navbar-header float-left">
              <Link className="navbar-brand text-uppercase" href="/">
                <Image
                  src="/assets/img/logo/oshversity-logo.png"
                  alt="logo"
                  width={295}
                  height={95}
                />
              </Link>
            </div>
            <div className="header-info ul-li">
              <ul>
                <li>
                  <div className="mail-phone">
                    <div className="info-icon">
                      <i className="text-gradiant fas fa-envelope"></i>
                    </div>
                    <div className="info-content">
                      <span className="info-id">info@oshversity.com</span>
                      <span className="info-text">Send an Email today</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mail-phone">
                    <div className="info-icon">
                      <i className="text-gradiant fas fa-phone-square"></i>
                    </div>
                    <div className="info-content">
                      <span className="info-id">(+234) 802 491 8800</span>
                      <span className="info-text">
                        Contact us via phone call
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="#">
                    <div className="info-social">
                      <i className="fab fa-linkedin"></i>
                    </div>
                    <span className="info-text">LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="info-social">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <span className="info-text">Twitter</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-menu-4">
              <div className="login-cart-lang float-right ul-li">
                <ul className="lang-login">
                  <li>
                    <div className="login">
                      <Link data-toggle="modal" data-target="#myModal" href="#">
                        LogIn
                      </Link>
                    </div>
                    <div
                      className="modal fade"
                      id="myModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header backgroud-style">
                            <div className="gradient-bg"></div>
                            <div className="popup-logo">
                              <Image
                                src="/assets/img/logo/oshversity-logo1.png"
                                alt="Logo_not_found"
                                width={295}
                                height={70}
                              />
                            </div>
                            <div className="popup-text text-center">
                              <h2>
                                <span>Login</span> To Your Account
                              </h2>
                              <p>
                                Don&apos;t have an account?{" "}
                                <span>
                                  <Link href="/#register">REGISTER</Link>
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="modal-body">
                            <div className="alt-text text-center">
                              <a href="#">SIGN IN</a>
                            </div>
                            <form
                              className="contact_form"
                              action="#"
                              method="POST"
                              encType="multipart/form-data"
                            >
                              <div className="contact-info">
                                <input
                                  className="name"
                                  name="Email"
                                  type="email"
                                  placeholder="Your@email.com*"
                                />
                              </div>
                              <div className="contact-info">
                                <input
                                  className="password"
                                  name="name"
                                  type="password"
                                  placeholder="Your Password*"
                                />
                              </div>
                              <div className="nws-button text-center white text-capitalize">
                                <button type="submit" value="Submit">
                                  Login
                                </button>
                              </div>
                            </form>
                            <div className="log-in-footer text-center">
                              <p>* Denotes mandatory field.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <nav className="navbar-menu float-left">
                <div className="nav-menu ul-li">
                  <ul className="quick-menu">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/faculty-advisory-board">
                        Faculty Advisory Board
                      </Link>
                    </li>

                    <li>
                      <Link href="/hsbs">HSBS</Link>
                    </li>
                    <li>
                      <Link href="/pay">Pay</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="altranative-header ul-li-block">
        <div id="menu-container">
          <div className="menu-wrapper">
            <div className="row">
              <button type="button" className="alt-menu-btn float-left">
                <span className="hamburger-menu"></span>
              </button>

              <div className="logo-area">
                <Link href="/">
                  <Image
                    src="/assets/img/logo/oshversity-logo1.png"
                    alt="Logo_not_found"
                    width={295}
                    height={70}
                  />
                </Link>
              </div>

              <div className="cart-btn pulse  ul-li float-right">
                <ul>
                  <li>
                    <a data-toggle="modal" data-target="#myModal-2" href="#">
                      <i className="fas fa-user"></i>
                    </a>
                  </li>
                </ul>
                <div
                  className="modal fade"
                  id="myModal-2"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header backgroud-style">
                        <div className="gradient-bg"></div>
                        <div className="popup-logo">
                          <Image
                            src="/assets/img/logo/oshversity-logo1.png"
                            alt="Logo_not_found"
                            width={295}
                            height={70}
                          />
                        </div>
                        <div className="popup-text text-center">
                          <h2>
                            <span>Login</span> to your account
                          </h2>
                          <p>
                            Don&apos;t have an account?{" "}
                            <span>
                              <Link href="/#register">REGISTER</Link>
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="modal-body">
                        <div className="alt-text text-center">
                          <a href="#"> SIGN IN</a>{" "}
                        </div>
                        <form
                          className="contact_form"
                          action="#"
                          method="POST"
                          encType="multipart/form-data"
                        >
                          <div className="contact-info">
                            <input
                              className="name"
                              name="Email"
                              type="email"
                              placeholder="Your@email.com*"
                            />
                          </div>
                          <div className="contact-info">
                            <input
                              className="email"
                              name="name"
                              type="text"
                              placeholder="Your name*"
                            />
                          </div>
                          <div className="nws-button text-center white text-capitalize">
                            <button type="submit" value="Submit">
                              Login
                            </button>
                          </div>
                        </form>
                        <div className="log-in-footer text-center">
                          <p>* Denotes mandatory field.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="menu-list accordion" style={{ left: "-100%" }}>
            <li className="card">
              <Link className="menu-link" href="/">
                Home
              </Link>
            </li>

            <li className="card">
              <Link className="menu-link" href="/courses">
                Courses
              </Link>
            </li>

            <li className="card">
              <Link className="menu-link" href="/about">
                About US
              </Link>
            </li>

            <li className="card">
              <Link className="menu-link" href="/faculty-advisory-board">
                Faculty Advisory Board
              </Link>
            </li>

            <li className="card">
              <Link className="menu-link" href="/hsbs">
                HSBS
              </Link>
            </li>

            <li className="card">
              <Link className="menu-link" href="/pay">
                Pay
              </Link>
            </li>

            <li className="card">
              <Link className="menu-link" href="/contact">
                Contact US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
