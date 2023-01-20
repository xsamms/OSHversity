import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 11200000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_live_25ebced837903856d37fb052c7705084a5f79ddd",
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

export default function Pay(props) {
  const route = useRouter();
  const { Fullname, Phonenumber, Email, Course, Qualification, Country } =
    route.query;

  const [fullName, setFullName] = useState(Fullname);
  const [phoneNumber, setPhoneNumber] = useState(Phonenumber);
  const [email, setEmail] = useState(Email);
  const [course, setCourse] = useState(Course);

  {
    console.log(Fullname, Phonenumber, Email, Course);
  }
  const initializePayment = usePaystackPayment(config);

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
                <span>Pay</span>
              </h2>
            </div>
            <div className="page-breadcrumb-item ul-li">
              <ul className="breadcrumb text-uppercase black">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Pay</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {!Fullname ? (
        <div className="container d-flex flex-column justify-content-center py-5 align-items-center">
          <h3>
            Your need to <Link href="/#register">register</Link> first, before
            making payment
          </h3>
          <div>
            <Link href="/#register" className="btn btn-danger text-light">
              Click Here To Register
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="order-payment container pt-4"
          style={{ textAlign: "center", backgroundColor: "#fff" }}
        >
          <div className="section-title-2  headline text-left">
            <h2 style={{ textAlign: "center" }}>
              Make <span>Payment</span>
            </h2>
          </div>
          <div className="payment-method">
            <div className="payment-method-header">
              <div className="row">
                <div className="col-md-6">
                  <div className="method-header-text">
                    <div className="checkbox">
                      <h4>Your details</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="check-out-form">
              <form action="#" method="post">
                <div className="payment-info">
                  <label className=" control-label">Full Name :</label>
                  <p>{Fullname}</p>
                </div>
                <div className="payment-info">
                  <label className="control-label">Phone Number :</label>
                  <p>{Phonenumber}</p>
                </div>
                <div className="payment-info">
                  <label className=" control-label">Your Email :</label>
                  <p>{Email}</p>
                </div>

                <div className="payment-info">
                  <label className="control-label">Qualification :</label>
                  <p>{Qualification}</p>
                </div>
                <div className="payment-info">
                  <label className="control-label">Selected Course :</label>
                  <p>{Course}</p>
                </div>
                <div className="payment-info">
                  <label className="control-label">Country of Origin :</label>
                  <p>{Country}</p>
                </div>
              </form>
            </div>
          </div>
          <div className="payment-method-header">
            <div className="row">
              <div className="col-md-6">
                <div className="method-header-text">
                  <h4>Amount Due: $150</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="payment-img float-right">
                  <Image
                    src="/assets/img/banner/p-1.jpg"
                    alt=""
                    width={217}
                    height={34}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="genius-btn mt25 gradient-bg text-center text-uppercase  bold-font"
            style={{ margin: "0px auto" }}
          >
            <a
              href="#"
              onClick={() => {
                initializePayment(onSuccess, onClose);
              }}
            >
              Pay Now <i className="fas fa-caret-right" />
            </a>
          </div>
          <div className="terms-text pb45 mt25">
            <p>
              By confirming this purchase, I agree to the{" "}
              <b>Term of Use, Refund Policy</b> and <b>Privacy Policy</b>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
