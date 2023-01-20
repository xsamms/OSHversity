import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";

export default function Layout({ title, keyword, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script src="assets/js/jquery-2.1.4.min.js" />
        <script src="assets/js/bootstrap.min.js" />
        <script src="assets/js/popper.min.js" />
        <script src="assets/js/owl.carousel.min.js" />
        <script src="assets/js/jarallax.js" />
        <script src="assets/js/jquery.magnific-popup.min.js" />
        <script src="assets/js/lightbox.js" />
        <script src="assets/js/jquery.meanmenu.js" />
        <script src="assets/js/scrollreveal.min.js" />
        <script src="assets/js/jquery.counterup.min.js" />
        <script src="assets/js/waypoints.min.js" />
        <script src="assets/js/jquery-ui.js" />
        <script src="assets/js/gmap3.min.js" />
        <script src="assets/js/switch.js" />

        <script src="assets/js/script.js" />
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "OSHversity Training and Development Company (TDC) | OSHversity",
  description:
    "We are a complete training and competency improvement organisation that offers FREE Occupational Safety and Health training to fresh graduates who are interested in going into OSH profession.",
  keyword:
    "OSHversity Training and Development Company (TDC), Occupational Safety and Health training, Occupational Safety and Health, Workplace Mental Health Training, Safety and Health Leadership, Employees Pre-Retirement Training, Patient Safety and Quality Improvement in Healthcare, First Aid and EMS Training, SEO Company in Lagos Nigeria, Life Coaching",
};
