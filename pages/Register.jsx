import Image from "next/image";
import Link from "next/link";
import Logo from "../static/logoLight.webp";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";

const handleSigninWithGoogle = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.get("/api/auth/google/url", {});
    toast.success("SignUp Successfully");
    // alert(response.data.data.data.token);
    window.location.href = response.data.data.authorizeUrl;
  } catch (error) {
    console.log(error.err);
  }
};
const customStyles = {
  overlay: { backgroundColor: "rgba(0, 0, 0,0.5)" },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",

    transform: "translate(-50%, -50%)",
  },
};
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState("");
  //toggle Password

  //name validation
  const validateName = () => {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(name)) {
      toast.error("Invalid name. Only letters and spaces are allowed.");
      return false;
    }
    return true;
  };
  //email validation
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }
    return true;
  };
  //mobile validation
  const validateMobile = () => {
    const regex = /^\d{10}$/;
    if (!regex.test(mobile)) {
      toast.error("Invalid mobile number. Only 10-digit numbers are allowed.");
      return false;
    }
    return true;
  };
  //password validation
  const validatePassword = () => {
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    if (password !== cpassword) {
      toast.error("Passwords and confirm password do not match.");
      return false;
    }
    return true;
  };
  const handleOtpOperation = async () => {
    setIsOpen(true);
    if (validateEmail()) {
      try {
        const response = await axios.post("/api/otp/sendOtp", {
          email,
        });
        toast.success("otp send successfully");
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const handleVerifyOtp = async () => {
    // toast.error('----------------otp-----------',otp);
    try {
      const response = await axios.post("/api/otp/verifyOtp", {
        newEmail: email,
        newOtp: otp,
      });
      toast.success(response.data);
      setIsOpen(false);
      // console.log("-----------------------",response);
    } catch (error) {
      toast.error(error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      validateName() &&
      validateEmail() &&
      validateMobile() &&
      validatePassword()
    ) {
      try {
        //console.log('-----',name,'-------',mobile,'----------',email,'-------------',password);
        const response = await axios.post("/api/auth/register", {
          name,
          mobile,
          email,
          password,
        });
        alert("Hi");
        console.log("HI", response);
      } catch (error) {
        toast.error(error);
      }
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-2 py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <ToastContainer />
              <im className="h-20 w-auto" src={Logo} alt="Logo" />
              <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register
              </h2>
            </div>
            <div className="mt-10">
              <div>
                <form
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="Username"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mobile
                    </label>
                    <div className="mt-2">
                      <input
                        id="mobile"
                        name="mobile"
                        type="text"
                        value={mobile}
                        maxLength={10}
                        onChange={(event) => setMobile(event.target.value)}
                        autoComplete="mobile"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter Number"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email Address
                      </label>
                      <div className="absolute">
                        <i className=" text-gray-400 z-20 hover:text-gray-500"></i>
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="email"
                        className=" leading-6 pr-20 z-0 focus:shadow focus:outline-none block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter email"
                      />
                      <div className="absolute top-7  right-2">
                        <button
                          type="button"
                          onClick={handleOtpOperation}
                          className="h-7 w-20 text-white rounded-lg bg-blue-700 hover:bg-blue-600"
                        >
                          Send OTP
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles}
                    >
                      <div className=" bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                          <button onClick={() => setIsOpen(false)}>
                            Close
                          </button>
                          <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                              <p>Email Verification</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                              <p>We have sent a OTP to your {email}</p>
                            </div>
                          </div>
                          <div>
                            <div className="flex flex-col space-y-16">
                              <div className="flex flex-row items-center justify-evenly mx-auto  w-full max-w-xs">
                                <div className="w-16 h-16 ">
                                  <input
                                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                    type="text"
                                    name="otp"
                                    id="otp"
                                    value={otp}
                                    onChange={(event) =>
                                      setOtp(event.target.value)
                                    }
                                    maxLength={6}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col space-y-5">
                                <div>
                                  <button
                                    className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                                    type="button"
                                    onClick={handleVerifyOtp}
                                  >
                                    Verify Account
                                  </button>
                                </div>

                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                  <p>Didn't recieve code?</p>{" "}
                                  <a
                                    className="flex flex-row items-center text-blue-600"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Resend
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </Modal>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter Password"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="Confirm password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="cpassword"
                        name="password"
                        type="password"
                        value={cpassword}
                        onChange={(event) => setCpassword(event.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="enter Confirm Password"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Create New Account
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <button
                  type="button"
                  className="flex w-full justify-center mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSigninWithGoogle}
                >
                  SignUp with Google
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className=" relative hidden w-0 h-screen flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://img.freepik.com/free-vector/blurred-abstract-background-design_1107-169.jpg?w=1060&t=st=1687438155~exp=1687438755~hmac=31acfba67267137d7efc6580b30b550c5b62c1bcaf8a153bf880994521fe97ed
            "
            alt=""
          />
          <div className="absolute text-5xl text-white  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Login if you already have account ?{"  "}
            <Link href="/Signin">Click Here</Link>
          </div>
        </div>
      </div>
    </>
  );
}
