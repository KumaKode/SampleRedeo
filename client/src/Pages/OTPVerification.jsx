import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const OTPVerification = () => {
  const {verifyOTP, loggeInUser} = useContext(AuthContext);
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const {value, maxLength} = e.target;
    const number = value.slice(0, maxLength);
    setOtp((prevState) => prevState + number );
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(otp);
    await verifyOTP(otp);
    setOtp("");

  }
  return (
    <div className="container p-5">
      <div className="row  d-flex justify-content-center align-item-center">
        <div className=" col-sm-12 col-md-12 col-lg-6 mt-5">
          <div className="bg-white p-5 rounded-3 shadow-sm border  w-sm-100 w-md-100 w-lg-100">
            <div className=" w-sm-100 w-md-100 s-lg-50">
              <p className="text-center text-success fs-1">
                <i className="fa-solid fa-envelope-circle-check"></i>
              </p>
              <p className="text-center text-center h5 ">
                Please check your email
              </p>
              <p className="text-muted text-center  mx-sm-2 mx-md-auto mx-lg-auto">
                {`We have sent a verification code to your email addressl ${loggeInUser.email && loggeInUser.email.slice(0, 3)+"*****@gmail.com"} . Please check your inbox  for an email from us containing the OTP`}
              </p>
              <form onSubmit={handleSubmit}>
              <div className="inputs pt-4 pb-2 d-flex gap-3 flex-row justify-content-center align-items-center">
                  <input className="otp-letter-input" type="text" pattern="[0-9]" maxLength={1} minLength={1}  onChange={handleChange} />
                  <input className="otp-letter-input" type="text" pattern="[0-9]" maxLength={1} minLength={1}  onChange={handleChange} />
                  <input className="otp-letter-input" type="text" pattern="[0-9]" maxLength={1} minLength={1}  onChange={handleChange} />
                  <input className="otp-letter-input" type="text" pattern="[0-9]" maxLength={1} minLength={1}  onChange={handleChange} />
                  <input className="otp-letter-input" type="text" pattern="[0-9]" maxLength={1} minLength={1}  onChange={handleChange} />
                  <input className="otp-letter-input" type="text" pattern="[0-9]" maxLength={1} minLength={1}  onChange={handleChange} />
                
              </div>
              <p className="text-muted text-center">
                {"Didn't get the code? "}
                <a href="#" className="text-success">
                  Click to resend.
                </a>
              </p>

              <div className="row pt-5">
                <div className="col-12">
                  <button className="btn btn-success w-100">Verify</button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
