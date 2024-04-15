import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import CONSTANTS from "../Constants/Constants";


const SignUp = () => {
  const { loginWithEmailAndPassword, loginWithGoogle } =
    useContext(AuthContext);

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginWithEmailAndPassword(email, password, fullname);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section className="min-vh-100 w-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <h2 className="display-5 fw-bold text-center">
                  <img
                    src="static/assets/img/logo/logo.png"
                    width={300}
                    height={100}
                  />
                </h2>
                <p className="text-center m-0">
                  Already have an account? <Link to="/signIn">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="row gy-5 justify-content-center">
                <div className="col-12 col-lg-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                        <div className="form-floating mb-2">
                          <input
                            type="text"
                            className="form-control "
                            name="fullname"
                            id="fullname"
                            value={fullname}
                            placeholder="John Doe"
                            required
                            onChange={(e) => setFullName(e.target.value)}
                          />
                          <label htmlFor="fullname" className="form-label">
                            Full Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-2">
                          <input
                            type="email"
                            className="form-control "
                            name="email"
                            id="email"
                            value={email}
                            placeholder="name@example.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-2">
                          <input
                            type="password"
                            className="form-control  "
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      {/* <div className="col-12">
                        <div className="row justify-content-between">
                          <div className="col-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember_me"
                                id="remember_me"
                              />
                              <label
                                className="form-check-label text-secondary"
                                htmlFor="remember_me"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="text-end">
                              <a
                                href="#!"
                                className="link-secondary text-decoration-none"
                              >
                                Forgot password?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn btn-lg signin-btn   fs-6"
                            type="submit"
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column">
                  <div
                    className="bg-dark h-100 d-none d-lg-block"
                    style={{ width: "1px" }}
                  ></div>
                  <div
                    className="bg-dark w-100 d-lg-none"
                    style={{ width: "1px" }}
                  ></div>
                  <div>or</div>
                  <div
                    className="bg-dark h-100 d-none d-lg-block"
                    style={{ width: "1px" }}
                  ></div>
                  <div
                    className="bg-dark w-100 d-lg-none"
                    style={{ width: "1px" }}
                  ></div>
                </div>
                <div className="col-12 col-lg-5 d-flex align-items-center">
                  <div className="d-flex gap-3 flex-column w-100 ">
                    <button
                      onClick={loginWithGoogle}
                      className="btn bsb-btn-2xl d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>
                      <span className="ms-2 fs-6 flex-grow-1">
                        Continue with Google
                      </span>
                    </button>
                    <a
                      href={CONSTANTS.linkedinOAuthURL}
                      className="btn bsb-btn-2xl  d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#0078d4"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                        ></path>
                        <path
                          d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                          opacity=".07"
                        ></path>
                        <path
                          fill="#fff"
                          d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                        ></path>
                      </svg>
                      <span className="ms-2 fs-6 flex-grow-1">
                        Continue with Linkedin
                      </span>
                    </a>
                    {/* <a
                      href="#!"
                      className="btn bsb-btn-2xl rounded-0 d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-facebook text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                      <span className="ms-2 fs-6 flex-grow-1">
                        Continue with Facebook
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
