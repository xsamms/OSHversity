import Image from "next/image";

export default function about() {
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
                <span>About OSHversity</span>
              </h2>
            </div>
            <div className="page-breadcrumb-item ul-li">
              <ul className="breadcrumb text-uppercase black">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">ABOUT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="about-page" className="about-page-section">
        <div className="container">
          <div className="row">
            <div className="about-us-content-item">
              <div className="about-gallery">
                <div className="about-gallery-img grid-1">
                  <Image
                    src="/assets/img/about/about.jpg"
                    alt=""
                    width={850}
                    height={450}
                  />
                </div>
                <div className="about-gallery-img grid-2">
                  <Image
                    src="/assets/img/about/about1.jpg"
                    alt=""
                    width={280}
                    height={280}
                  />
                </div>
                <div className="about-gallery-img grid-2">
                  <Image
                    src="/assets/img/about/about2.jpg"
                    alt=""
                    width={280}
                    height={280}
                  />
                </div>
              </div>

              <div className="about-text-item">
                <div className="section-title-2  headline text-left">
                  <h2>
                    <span>
                      OSHversity Training and Development Company (TDC)
                    </span>
                  </h2>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <p>
                      OSHversity Training and Development Company (TDC) is a
                      complete training and competency improvement company
                      designed to meet the need gaps of employees and in
                      employers at any stage of their career plans.
                    </p>
                    <p>
                      The Future of Work has been described in many studies as a
                      new workplace order that will be more dependent on
                      advanced technology and above everything the urgent need
                      for the development of new sets of skills and new
                      certifications. This does not make obsolete your existing
                      acquired knowledge and skills, but the need to build upon
                      your current skills to meet today’s market demand and the
                      need for future market relevance.
                    </p>
                    <p>
                      Our goal is to support employees and employers in
                      achieving this, leveraging on the competencies of our
                      faculty made up of highly experienced professionals
                      brought together from different fields of studies and
                      reshaped into our focus area.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <h3>Mission Statement</h3>
                    <p>
                      To continuously support improvement of employees’
                      competency and development of needed skills for the future
                      of work.
                    </p>
                    <h3>Vision</h3>
                    <p>
                      To be a renowned African training and development company
                      focusing on bridging the Health, Safety and Wellness skill
                      gaps of employees from developing countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial_2" className="testimonial_2_section">
        <div className="container">
          <div className="testimonial-slide">
            <div className="section-title-2 mb65 headline text-left">
              <h2>
                Students <span>Testimonial.</span>
              </h2>
            </div>

            <div id="testimonial-slide-item" className="testimonial-slide-area">
              <div className="student-qoute">
                <p>
                  “This was our first time lorem ipsum and we{" "}
                  <b> were very pleased with the whole experience</b>. Your
                  price was lower than other companies. Our experience was good
                  from start to finish, so we’ll be back in the future lorem
                  ipsum diamet.”
                </p>
                <div className="student-name-designation">
                  <span className="st-name bold-font">Robertho Garcia </span>
                  <span className="st-designation">Graphic Designer</span>
                </div>
              </div>

              <div className="student-qoute">
                <p>
                  “This was our first time lorem ipsum and we{" "}
                  <b> were very pleased with the whole experience</b>. Your
                  price was lower than other companies. Our experience was good
                  from start to finish, so we’ll be back in the future lorem
                  ipsum diamet.”
                </p>
                <div className="student-name-designation">
                  <span className="st-name bold-font">Robertho Garcia </span>
                  <span className="st-designation">Graphic Designer</span>
                </div>
              </div>

              <div className="student-qoute">
                <p>
                  “This was our first time lorem ipsum and we
                  <b> were very pleased with the whole experience</b>. Your
                  price was lower than other companies. Our experience was good
                  from start to finish, so we’ll be back in the future lorem
                  ipsum diamet.”
                </p>
                <div className="student-name-designation">
                  <span className="st-name bold-font">Robertho Garcia </span>
                  <span className="st-designation">Graphic Designer</span>
                </div>
              </div>

              <div className="student-qoute">
                <p>
                  “This was our first time lorem ipsum and we{" "}
                  <b> were very pleased with the whole experience</b>. Your
                  price was lower than other companies. Our experience was good
                  from start to finish, so we’ll be back in the future lorem
                  ipsum diamet.”
                </p>
                <div className="student-name-designation">
                  <span className="st-name bold-font">Robertho Garcia </span>
                  <span className="st-designation">Graphic Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
