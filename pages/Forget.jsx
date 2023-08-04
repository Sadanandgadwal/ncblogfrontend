import Image from "next/image";
import Logo from "../static/logoLight.webp";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

export default function Forget() {
  const [email, setEmail] = useState();
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }
    return true;
  };
  const sendOtp = async () => {
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
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-2 py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <ToastContainer />
            <Image className="h-20 w-auto " src={Logo} alt="Logo" />
            <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Forget Password
            </h2>
          </div>

          <form method="POST" className="space-y-6" onSubmit={sendOtp}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
                value={email}
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send OTP
              </button>
            </div>
          </form>
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
          if you Don't want to update password ?{"  "}
          <div className="text-4xl mt-3 text-gray-300">
            <Link href="/SignIn">Click Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
