import Image from "next/image";

export default function hsbs() {
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
                <span>Health & Safety Business School</span>
              </h2>
            </div>
            <div className="page-breadcrumb-item ul-li">
              <ul className="breadcrumb text-uppercase black">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">HSBS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="about-page" className="about-page-section">
        <div className="container">
          <div className="row">
            <div className="about-us-content-item">
              <div className="d-flex justify-content-center mb-5">
                <Image
                  src="/assets/img/about/hsbs-logo1.jpg"
                  alt=""
                  width={1080}
                  height={400}
                />
              </div>

              <div className="about-text-item">
                <div className="row">
                  <div className="col-md-7">
                    <p>
                      Health & Safety Business School (HSBS) is a new project we
                      have developed by OSHversity TDC with the sole aim of
                      looking at the business side of Occupational Safety and
                      Health and making it profitable to practitioners. The
                      world is short of trained OSH professionals while most of
                      the trained ones are also retiring. The whole aim of the
                      HSBS project is to train OSH experts from the point of
                      practitioners to Independent OSH Consultants.
                    </p>
                    <p>
                      We also need the knowledge and experiences of the fast
                      retiring OSH Experts in supporting workplace health and
                      safety but this will hardly be achieved if we do not have
                      OSH experts that are trained on how to do personal
                      consulting in the field of OSH. The OSH business landscape
                      is so virgin and this needs to be adequately explored.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <h3>The HSBS Proposition</h3>
                    <p>
                      The HSBS been designed as an Eight-Week (8) virtual
                      training and grooming sessions directed at commercial
                      models within the OSH practice with emphasis on OSH
                      Consulting. Each week has two hours tutorial session with
                      a subject expert on the topic scheduled for each week,
                      participants are left with study links and in some cases,
                      even home work.
                    </p>

                    <p>
                      The entire program has 7 topics that will be covered in 7
                      weeks and the final week has been designed for the entire
                      program review, term paper and wrap up. Submission of
                      individual term paper qualifies participants for
                      certificate issuance, these must be submitted two weeks
                      after the program’s wrap up.
                    </p>
                    <p>
                      We have put together an impressive tutorial board made up
                      of experts drawn from different part of the world, these
                      group of people have volunteered their time to help groom
                      participants.
                    </p>
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
            <h2>
              <span>Course Outline</span>
            </h2>
          </div>
          <div className="best-course-area mb45">
            <div className="row">
              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/bizcons.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">
                          Introduction to OSH Business and Consulting
                        </a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">HSBS</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/psyent.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">The Psychology of OSH Entrepreneurship</a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">HSBS</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/bizopp.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">
                          OSH Business Opportunities and Discoveries
                        </a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">HSBS</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/manbiz.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">Managing the Business of OSH Consulting</a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">HSBS</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/dynsel.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">The Dynamics of Selling OSH Services</a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">HSBS</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/impr.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">
                          The Need for Continuous Improvement in OSH
                        </a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">HSBS</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/team.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">
                          Principles of Keeping OSH Consulting Profitable
                        </a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">HSBS</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <Image
                      src="/assets/img/course/review.jpg"
                      alt=""
                      width={270}
                      height={220}
                    />

                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">Review/Wrap Up and Writing of Term Paper</a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">HSBS</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-page" className="about-page-section">
        <div className="container">
          <div className="row">
            <div className="about-us-content-item">
              <div className="about-text-item">
                <div className="row">
                  <div className="col-md-7">
                    <p>
                      We have all been taught clearly on the practice of Health
                      and Safety and this has helped quite a number of us to
                      perform in our various employment but we do not have
                      conversations on Independent OSH Consulting which should
                      be a window for senior experienced OSH professionals and
                      retirees to still make contribution towards workplace
                      health and safety. This is the focus of HSBS, we need to
                      train and groom OSH Practitioners into Independent OSH
                      Consulting and above all, teaching them the skills needed
                      for setting up and managing OSH Consulting Organisations.
                      Opportunities abounds within the economics of OSH but
                      these have not been duly explored, while we feel we have
                      limited number of trained OSH experts globally, a high
                      number of them retire daily and it is high time we looked
                      at ways of keeping their expertise in the system while we
                      train younger graduates to fill in those vacuums. The
                      older practitioners who have worked for 20 years and above
                      saturate the market and make growth difficult for their
                      younger colleagues, teaching and showing them the pathway
                      to OSH Consulting will free up space for people to grow
                      and allow aspiring entrants into the field of practice.
                      This will blossom OSH profession, improve workplace health
                      and safety and create a stretch of opportunities we can
                      all benefit from.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <h3>Who is eligible to enrol for this course?</h3>
                    <ul className="ml-5">
                      <li>
                        OSH practitioners aspiring to become OSH Consultants{" "}
                      </li>
                      <li>
                        OSH practitioners interested in learning how to manage
                        OSH funding or budget profitably
                      </li>
                      <li>Senior and Mid-Level OSH Managers</li>
                      <li>
                        OSH practitioners interested in the economics and
                        commerce of health and safety
                      </li>
                      <li>Business leaders and Managers</li>
                      <li>Leaderships of OSH Associations </li>
                      <li>Human Resources and Employees’ Relations Managers</li>
                    </ul>
                    <h3>What is the course fee?</h3>
                    <p>
                      This HSBS is sold at a subsidized fee of $150.00 which is
                      N65, 000.00 equivalent in Nigerian local currency. Payment
                      can be made with debit or credit cards at OSHversity
                      website, this is secured. For international participants,
                      you may not need to input $150, just input 65,000.00
                      beside the existing Naira sign. Once this is done, someone
                      from our team open up correspondence with you immediately.
                      Here is the payment link https://www.oshversity.com/pay/
                      We need you to register as quickly as possible, we will be
                      admitting only 20 candidates in this each cohorts. A
                      first-come-first-serve rule applies, here is the
                      registration link https://www.oshversity.com/register/.
                    </p>
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
              <h2>
                <span>HSBS Tutorial Board </span>
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
                        <span>Yohama Caraballo-Arias (Venezuela) </span>
                        <p>
                          She is an Occupational Physician, an active member of
                          the Council of Scientific Advisors of the American
                          College of Occupational & Environmental Medicine
                          (ACOEM), Venezuelan delegate of the International
                          Occupational Medicine Society Collaborative (IOMSC).
                          She is currently a Scientific Researcher at Alma Mater
                          Studiorum – University of Bologna, Italy.
                        </p>
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
                            src="/assets/img/teacher/helmut-nod.jpg"
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
                        <span>Helmut Nod (Germany)</span>
                        <p>
                          He is a renowned Occupational Safety and Health expert
                          who holds a PhD in Psychology focusing on Occupational
                          Safety and Health Psychology. He has participated in
                          several international projects and has some many
                          publications to his credit. He currently works at the
                          Competence Center for Prevention at BG RCI, Germany.
                        </p>
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
                            src="/assets/img/teacher/dingani-moyo.jpg"
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
                        <span>Moyo Dingani (Zimbabwe) </span>
                        <p>
                          He is a specialist Occupational Medicine Physician,
                          OSH Consultant and an academic researcher. He holds
                          fellowship of the Faculty of Occupational Medicine
                          from Royal College of Physicians, Ireland. A very
                          renowned conference speaker, he lectures at Midland
                          State University and National University of Science
                          and Technology, Zimbabwe. He is also an OSH Consultant
                          at Baines Occupational Health Services, Zimbabwe.
                        </p>
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
                            src="/assets/img/teacher/veronika-jakl.jpg"
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
                        <span>Veronika Jakl (Austria)</span>
                        <p>
                          She is a Work Psychologist from Vienna, Austria. She
                          is an expert in work-related stress for private
                          companies and public organizations. Veronika Jakl
                          inspires OSH experts towards more success in
                          consulting with psychology-based knowledge. She hosts
                          the German-Speaking Academy &quot;Pioneers of
                          Prevention&quot; www.pionierederpraevention.com.
                        </p>
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
                            src="/assets/img/teacher/ehi-iden1.jpg"
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
                        <span>Ehi Iden (Nigeria)</span>
                        <p>
                          He is an Occupational Safety and Health Consultant, a
                          Doctoral Fellow working on Workplace Health and
                          Wellness Promotion, he is also a Workplace Mental
                          Health Ambassador. Ehi is a renowned conference
                          speaker, a CEO at Occupational Health and Safety
                          Managers (OHSM) Nigeria and Head of Faculty,
                          OSHversity. He is a Vision Zero Profiled Advocate and
                          President, OSHAfrica.
                        </p>
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
                            src="/assets/img/teacher/stewart-carnegie.jpg"
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
                        <span>Stewart Carnegie (United Kingdom)</span>
                        <p>
                          He is a very thorough OSH Expert with over 25 years
                          international experience leading multinational
                          projects and teams with the energy and security
                          sectors. The last 20 years of his practice has been
                          focused on consulting in Oil and Gas and Renewables
                          sectors, specializing in incidents management, systems
                          solutions/development, training and coaching.
                        </p>
                        <p>
                          In line with the changing market needs in 2021,
                          Stewart created a new company called cRisk Analysis
                          LLC an Occupational Safety and Health company offering
                          support to developing countries with international
                          best practice. He is currently resident and works in
                          Ukraine.
                        </p>
                      </div>
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
                          src="/assets/img/teacher/clive.jpg"
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
                      <span>Clive (United Kingdom)</span>
                      <p>
                        He is a healthcare, charities and digital strategy
                        expert, with nearly 30 years of experience in navigating
                        these sectors, helping others to do so, and bringing
                        people and organisations together to deliver greater
                        value for them and for patients. He started his
                        consultancy career working for a global professional
                        services firm in 1998, and after a few years back in the
                        NHS joined a global IT services company where he held
                        increasingly senior roles. He ended his career there in
                        2017 as Global lead for mobile strategy and solutions
                        for the Healthcare and Life Sciences division (with a
                        turnover of $1.3 Billion) and continued to consult with
                        clients around the world in parallel with his
                        operational role.
                      </p>
                      <p>
                        Clive now works on a consultancy basis with a number of
                        companies, and is the past President of the Digital
                        Health Council of the Royal Society of Medicine, mentors
                        on a number of digital health accelerators including the
                        NHS England Clinical Entrepreneurs Programme, and
                        lectures in digital health at the University of Cumbria.
                        He has chaired a global HL7 group, sat on the NHS
                        Information Standards Board, and chaired a WHO committee
                        on patient safety.
                      </p>
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
