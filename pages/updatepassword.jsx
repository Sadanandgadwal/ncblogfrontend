import Image from "next/image";
import Logo from "../static/logoLight.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { Password } from "@mui/icons-material";
import Link from "next/link";

export default function Forget() {
  const [Password, setPassword] = useState();
  const savePassword = () => {};
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-2 py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <ToastContainer />
            <Image className="h-20 w-auto " src={Logo} alt="Logo" />
            <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Update Password
            </h2>
          </div>

          <div className="mt-10">
            <div>
              <form method="POST" className="space-y-6">
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
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="cpassword"
                      name="cpassword"
                      type="password"
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
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
          if you Don't want to update password ?{"  "}
          <div className="text-4xl mt-3 text-gray-300">
            <Link href="/SignIn">Click Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
