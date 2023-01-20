import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Home() {
  const [allValues, setAllValues] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    password: "",
    qualification: "",
    course: "",
    country: "",
    programDiscovery: "",
  });

  const { fullname, phonenumber, email, course, qualification, country } =
    allValues;

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const route = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allValues),
      });

      if (response.status === 200) {
        toast.success("Registration Successful");
        route.push({
          pathname: "/pay",
          query: {
            Fullname: fullname,
            Phonenumber: phonenumber,
            Qualification: qualification,
            Email: email,
            Course: course,
            Country: country,
          },
        });
      }
    } catch (error) {
      toast.error("Registration failed");
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Image
                class="d-block w-100"
                src="/assets/img/banner/banner5.jpg"
                alt="First slide"
                width={1920}
                height={980}
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{ textShadow: "1px 1px #000" }}>
                  Health, Safety and Wellness Training
                </h3>
                <p>OSHversity - TRAINING ORGANIZATION</p>
              </div>
            </div>
            <div class="carousel-item">
              <Image
                class="d-block w-100"
                src="/assets/img/banner/banner1.jpg"
                alt="Second slide"
                width={1920}
                height={980}
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{ textShadow: "1px 1px #000" }}>
                  HEALTH & SAFETY BUSINESS SCHOOL
                </h3>
                <p>OSHversity - TRAINING ORGANIZATION</p>
              </div>
            </div>
            <div class="carousel-item">
              <Image
                class="d-block w-100"
                src="/assets/img/banner/banner2.jpg"
                alt="Third slide"
                width={1920}
                height={980}
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{ textShadow: "1px 1px #000" }}>
                  Improve competence in the workplace
                </h3>
                <p>OSHversity - TRAINING ORGANIZATION</p>
              </div>
            </div>
            <div class="carousel-item">
              <Image
                class="d-block w-100"
                src="/assets/img/banner/banner3.jpg"
                alt="Fourth slide"
                width={1920}
                height={980}
              />
              <div class="carousel-caption d-none d-md-block">
                <p>OSHversity - TRAINING ORGANIZATION</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section id="about-us" className="about-us-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5" id="register">
              <div className="about-resigter-form backgroud-style relative-position">
                <div className="register-content">
                  <div className="register-fomr-title text-center">
                    <h3 className="bold-font">Register</h3>
                  </div>
                  <div className="register-form-area">
                    <form className="contact_form" onSubmit={handleSubmit}>
                      <div className="contact-info">
                        <input
                          className="name"
                          name="fullname"
                          type="text"
                          onChange={changeHandler}
                          placeholder="Your Full Name"
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="nbm"
                          name="phonenumber"
                          type="text"
                          onChange={changeHandler}
                          placeholder="Your Phone Number"
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="email"
                          name="email"
                          type="email"
                          onChange={changeHandler}
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="email"
                          name="password"
                          type="password"
                          onChange={changeHandler}
                          placeholder="Password"
                        />
                      </div>
                      <select
                        id="qualification"
                        name="qualification"
                        onChange={changeHandler}
                      >
                        <option defaultValue={9}>Qualification</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                        <option value="PhD">PhD</option>
                        <option value="Professor">Professor</option>
                      </select>

                      <select
                        id="course"
                        name="course"
                        onChange={changeHandler}
                      >
                        <option defaultValue={9}>Select Course</option>
                        <option value="Career Advisory and Coaching">
                          Career Advisory and Coaching
                        </option>
                        <option value="OSH Training and Skills Improvement">
                          OSH Training and Skills Improvement
                        </option>
                        <option value="Workplace Mental Health Training">
                          Workplace Mental Health Training
                        </option>
                        <option value="Safety and Health Leadership ">
                          Safety and Health Leadership{" "}
                        </option>
                        <option value="Employees Pre-Retirement Training">
                          Employees Pre-Retirement Training
                        </option>
                        <option value="Workplace Health and Wellness Programs">
                          Workplace Health and Wellness Programs
                        </option>
                        <option value="Safety, Health, Wellbeing and Productivity">
                          Safety, Health, Wellbeing and Productivity
                        </option>
                        <option value="Ergonomics Management Training">
                          Ergonomics Management Training
                        </option>
                        <option value="Patient Safety and Quality Improvement in Healthcare">
                          Patient Safety and Quality Improvement in Healthcare
                        </option>
                        <option value="Food Safety and HACCP Training ">
                          Food Safety and HACCP Training{" "}
                        </option>
                        <option value="First Aid and EMS Training">
                          First Aid and EMS Training
                        </option>
                        <option value="Life Coaching">Life Coaching</option>
                        <option value="Pre-Retirement Training for Employees">
                          Pre-Retirement Training for Employees
                        </option>
                        <option value="OSH and Labour Inspection Training">
                          OSH and Labour Inspection Training
                        </option>
                      </select>

                      <div className="contact-info">
                        <input
                          className="name"
                          name="country"
                          type="text"
                          onChange={changeHandler}
                          placeholder="Country of Origin"
                        />
                      </div>

                      <select
                        id="programDiscovery"
                        name="programDiscovery"
                        onChange={changeHandler}
                        className="mb-5"
                      >
                        <option defaultValue={9}>
                          Where did you hear about this program?
                        </option>
                        <option value="Email">Email</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Other">Other</option>
                      </select>

                      {/* <div>
                        <p className="mt-3">
                          Where did you hear about this program?
                        </p>
                        <ul className="row">
                          <li className="col-md-6">
                            <input
                              type="radio"
                              id="Email"
                              name="programDiscovery"
                              value="Email"
                              onChange={changeHandler}
                            />
                            <label htmlFor="Email">Email</label>
                          </li>
                          <li className="col-md-6">
                            <input
                              type="radio"
                              id="LinkedIn"
                              name="programDiscovery"
                              value="LinkedIn"
                              className="name"
                              onChange={changeHandler}
                            />
                            <label htmlFor="LinkedIn">LinkedIn</label>
                          </li>

                          <li className="col-md-6">
                            <input
                              type="radio"
                              id="twitter"
                              name="programDiscovery"
                              value="Twitter"
                              onChange={changeHandler}
                            />
                            <label htmlFor="twitter">Twitter</label>
                          </li>
                          <li className="col-md-6">
                            <input
                              type="radio"
                              id="instagram"
                              name="programDiscovery"
                              value="Instagram"
                              onChange={changeHandler}
                            />
                            <label htmlFor="instagram">Instagram</label>
                          </li>

                          <li className="col-md-6">
                            <input
                              type="radio"
                              id="facebook"
                              name="programDiscovery"
                              value="Facebook"
                              onChange={changeHandler}
                            />
                            <label htmlFor="facebook">Facebook</label>
                          </li>

                          <li className="col-md-6">
                            <input
                              type="radio"
                              id="search-engine"
                              name="programDiscovery"
                              value="Search Engine"
                              onChange={changeHandler}
                            />
                            <label htmlFor="search-engine">
                              Search <br />
                              Engine
                            </label>
                          </li>
                          <li className="col-md-6">
                            <input
                              type="radio"
                              id="other"
                              name="programDiscovery"
                              value="Other"
                              onChange={changeHandler}
                            />
                            <label htmlFor="other">Other</label>
                          </li>
                        </ul> */}
                      {/* </div> */}
                      <div className="nws-button text-uppercase text-center white text-capitalize gradient-bg">
                        <button type="submit" value="Submit">
                          register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-mockup">
                <Image
                  src="/assets/img/about/phone.png"
                  alt=""
                  width={400}
                  height={849}
                />
              </div>
            </div>

            <div className="col-md-7">
              <div className="about-us-text">
                <div className="section-title relative-position mb20 headline text-left ">
                  <span className="subtitle ml42 text-uppercase">
                    Who we are
                  </span>
                  <h2>
                    <span>
                      OSHversity Training and Development Company (TDC)
                    </span>
                  </h2>
                  <p>
                    We are a complete training and competency improvement
                    company designed to meet the need gaps of employees and in
                    employers at any stage of their career plans.
                  </p>
                </div>
                <div className="about-content-text">
                  <p className="">
                    The Future of Work has been described in many studies as a
                    new workplace order that will be more dependent on advanced
                    technology and above everything the urgent need for the
                    development of new sets of skills and new certifications.
                  </p>
                  <div className="about-list mb65 ul-li-block "></div>
                  <div className="about-btn ">
                    <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                      <a href="#">
                        Learn more <i className="fas fa-caret-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="why-choose"
        className="why-choose-section version-four backgroud-style"
      >
        <div className="container">
          <div className="section-title mb20 headline text-center">
            <span className="subtitle text-uppercase">SAFETY ADVANTAGES</span>
            <h2>
              <span>Focus Area</span>
            </h2>
          </div>
          <div className="extra-features-content">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="extra-left">
                  <div className="extra-left-content">
                    <div className="extra-icon-text text-left">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                        <div className="feat-tag">
                          <span>01</span>
                        </div>
                      </div>
                      <div className="features-text">
                        <div className="features-text-title">
                          <h3>Career Advisory and Coaching</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="extra-left-content">
                    <div className="extra-icon-text">
                      <div className="features-icon gradient-bg text-center">
                        <i className=" flaticon-clipboard-with-pencil"></i>
                        <div className="feat-tag">
                          <span>02</span>
                        </div>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title">
                          <h3>OSH Training and Skills Improvement</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="extra-left-content">
                    <div className="extra-icon-text">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-list"></i>
                        <div className="feat-tag">
                          <span>03</span>
                        </div>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title">
                          <h3>Workplace Mental Health Training</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="extra-left-content">
                    <div className="extra-icon-text">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                        <div className="feat-tag">
                          <span>04</span>
                        </div>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title">
                          <h3>Safety and Health Leadership </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="extra-icon-text">
                    <div className="features-icon gradient-bg text-center">
                      <i className="flaticon-list"></i>
                      <div className="feat-tag">
                        <span>05</span>
                      </div>
                    </div>
                    <div className="features-text pt25">
                      <div className="features-text-title">
                        <h3>Employees Pre-Retirement Training</h3>
                      </div>
                    </div>
                  </div>

                  <div className="extra-icon-text">
                    <div className="features-icon gradient-bg text-center">
                      <i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                      <div className="feat-tag">
                        <span>06</span>
                      </div>
                    </div>
                    <div className="features-text pt25">
                      <div className="features-text-title">
                        <h3>Workplace Health and Wellness Programs</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="extra-left-content"></div>
              </div>

              <div className="col-sm-4">
                <div className="extra-pic text-center">
                  <Image
                    src="/assets/img/banner/wc-2.png"
                    alt="img"
                    width={442}
                    height={671}
                  />
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="extra-right">
                  <div className="extra-left-content">
                    <div className="extra-icon-text text-right">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-pie-chart"></i>
                        <div className="feat-tag">
                          <span>07</span>
                        </div>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title text-right pb10">
                          <h3>Safety, Health, Wellbeing and Productivity</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="extra-left-content">
                    <div className="extra-icon-text text-right">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-clipboards"></i>
                        <div className="feat-tag">
                          <span>08</span>
                        </div>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title text-right pb10">
                          <h3>Ergonomics Management Training</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="extra-left-content">
                    <div className="extra-icon-text text-right">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-pie-chart"></i>
                        <div className="feat-tag">
                          <span>09</span>
                        </div>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title text-right pb10">
                          <h3>
                            Patient Safety and Quality Improvement in Healthcare
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="extra-left-content">
                    <div className="extra-icon-text text-right">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-clipboards"></i>
                        <div className="feat-tag">
                          <span>10</span>
                        </div>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title text-right pb10">
                          <h3>Food Safety and HACCP Training</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="extra-left-content">
                    <div className="extra-icon-text text-right">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-clipboards"></i>
                        <div className="feat-tag">
                          <span>11</span>
                        </div>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title text-right pb10">
                          <h3>First Aid and EMS Training</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="extra-left-content">
                    <div className="extra-icon-text text-right">
                      <div className="features-icon gradient-bg text-center">
                        <i className="flaticon-ruler-and-pencil"></i>
                        <div className="feat-tag">
                          <span>12</span>
                        </div>
                      </div>
                      <div className="features-text pt25">
                        <div className="features-text-title text-right pb10">
                          <h3>Life Coaching</h3>
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
      <section id="best-course" className="best-course-section">
        <div className="container">
          <div className="section-title mb45 headline text-center">
            <span className="subtitle text-uppercase">CHOOSE A COURSE</span>
            <h2>
              Some Of Our<span> Popular Courses</span>
            </h2>
          </div>
          <div className="best-course-area mb45">
            <div className="row">
              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/Workplace-Health-and-Wellness-Programs.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />
                    <div className="trend-badge-2 text-center text-uppercase">
                      <i className="fas fa-bolt"></i>
                      <span>Trending</span>
                    </div>

                    <div className="course-rate ul-li">
                      <ul>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="course-details-btn">
                      <a href="#">
                        COURSE DETAIL <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">Workplace Health and Wellness Programs</a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">Occupational Safety and Health</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/Patient-Safety-and-Quality-Improvement-in-Healthcare.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="course-rate ul-li">
                      <ul>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="course-details-btn">
                      <a href="#">
                        COURSE DETAIL <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">
                          Patient Safety and Quality Improvement in Healthcare
                        </a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">Occupational Safety and Health</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/Safety-and-Health-Leadership.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="course-rate ul-li">
                      <ul>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="course-details-btn">
                      <a href="#">
                        COURSE DETAIL <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">Safety and Health Leadership</a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">Occupational Safety and Health</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/Career-Advisory-and-Coaching.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="course-rate ul-li">
                      <ul>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="course-details-btn">
                      <a href="#">
                        COURSE DETAIL <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">Career Advisory and Coaching</a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">Occupational Safety and Health</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="course-teacher" className="course-teacher-section">
        <div className="jarallax">
          <div className="container">
            <div className="section-title mb20 headline text-center ">
              <span className="subtitle text-uppercase">OUR PROFESSIONAL</span>
              <h2>
                <span>Faculty Advisory Board</span>
              </h2>
            </div>

            <div className="teacher-list">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="teacher-img-content ">
                    <div className="teacher-cntent">
                      <div className="teacher-img-category">
                        <div className="teacher-img">
                          <Image
                            src="/assets/img/teacher/Ehi-Iden.jpg"
                            alt=""
                            width={400}
                            height={300}
                          />
                          <div className="course-price text-uppercase text-center gradient-bg">
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>
                      <div className="teacher-name">
                        <span>Ehi Iden</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="teacher-img-content ">
                    <div className="teacher-cntent">
                      <div className="teacher-img-category">
                        <div className="teacher-img">
                          <Image
                            src="/assets/img/teacher/Yohama-Caraballo-Arias.jpg"
                            alt=""
                            width={400}
                            height={300}
                          />
                          <div className="course-price text-uppercase text-center gradient-bg">
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>
                      <div className="teacher-name">
                        <span>Yohama Caraballo-Arias </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="teacher-img-content ">
                    <div className="teacher-cntent">
                      <div className="teacher-img-category">
                        <div className="teacher-img">
                          <Image
                            src="/assets/img/teacher/Kevin-Uzoma.jpg"
                            alt=""
                            width={400}
                            height={300}
                          />
                          <div className="course-price text-uppercase text-center gradient-bg">
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>
                      <div className="teacher-name">
                        <span>Kevin Uzoma </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="teacher-img-content ">
                    <div className="teacher-cntent">
                      <div className="teacher-img-category">
                        <div className="teacher-img">
                          <Image
                            src="/assets/img/teacher/Amira-Omrane.jpg"
                            alt=""
                            width={400}
                            height={300}
                          />
                          <div className="course-price text-uppercase text-center gradient-bg">
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>
                      <div className="teacher-name">
                        <span>Amira Omrane </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="teacher-img-content ">
                    <div className="teacher-cntent">
                      <div className="teacher-img-category">
                        <div className="teacher-img">
                          <Image
                            src="/assets/img/teacher/Wellington-Mudenha.jpg"
                            alt=""
                            width={400}
                            height={300}
                          />
                          <div className="course-price text-uppercase text-center gradient-bg">
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>
                      <div className="teacher-name">
                        <span>Wellington Mudenha</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="teacher-img-content ">
                    <div className="teacher-cntent">
                      <div className="teacher-img-category">
                        <div className="teacher-img">
                          <Image
                            src="/assets/img/teacher/Chinwe-Sylvia-Adebiyi.jpg"
                            alt=""
                            width={400}
                            height={300}
                          />
                          <div className="course-price text-uppercase text-center gradient-bg">
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>
                      <div className="teacher-name">
                        <span>Chinwe Sylvia Adebiyi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font ">
                <a href="#">
                  Learn more <i className="fas fa-caret-right"></i>
                </a>
              </div>
            </div>
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
