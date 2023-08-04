import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Logo from "../static/logoLight.webp";
import loginsvg from "../static/loginsvvg.png";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import tokenApi from "@/components/tokenApi";
import "react-toastify/dist/ReactToastify.css";
import { tokenStore } from "../store/zustore";
import { useAdminStore } from "../store/zustore";

export default function Signin() {
  const adminAction = useAdminStore((state) => state.adminAction);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Action = tokenStore((store) => store.Action);
  const UserAction = tokenStore((store) => store.UserAction);
  const UserData = tokenStore((store) => store.UserData);

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      toast.error("Invalid email address.");
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
    return true;
  };
  const handleSignin = async (event) => {
    event.preventDefault();
    if (validateEmail() && validatePassword())
      try {
        const response = await axios.post(
          "/api/auth/login",
          {
            email,
            password,
          }
          //say aman to enable cors
          // ,
          // { withCredentials: true }
        );
        adminAction(email, password);

        console.log(response.data.data);
        toast.success(response.data.data);
        // localStorage.setItem("token", response.data.data.token);
        Action(response.data.data.token);
        // localStorage.setItem("userInfo", response.data.data._doc.name);
        UserData(response.data.data._doc.name);
        // localStorage.setItem("user_id", response.data.data._doc._id);
        UserAction(response.data.data._doc._id);
        toast.success(response.data.msg);

        window.location.href = "/";
        console.log(document.cookie);
      } catch (error) {
        //toast.error(res.data.error);
        toast.error(error);
        console.error(error);
      }
  };
  const handleSigninWithGoogle = async (event) => {
    event.preventDefault();
    try {
      const response = await tokenApi.post("/api/auth/google/url");
      const { authorizeUrl, token } = response.data.data;
      window.location.href = authorizeUrl;
      console.log(token);
      // localStorage.setItem("token", token); // Remove this line since the token is handled by the tokenApi
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-2 py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <ToastContainer />
              <Image className="h-20 w-auto " src={Logo} alt="Logo" />
              <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign In
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSignin}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
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
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {/* <div>
                        {" "}
                        <Link href="/Register">Create New Account </Link>
                      </div> */}
                    </div>

                    <div className="text-sm leading-6">
                      <div
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        <Link href="/Forget">Forget Password </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={handleSignin}
                    >
                      Sign in
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
                  SignIn with Google
                </button>
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
            <Image className="h-70 w-50 " src={loginsvg} alt="Logo" />
            Register if you Don't have account ?{"  "}
            <div className="text-4xl mt-3 text-gray-300">
              <Link href="/Register">Click Here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// const handleSigninWithGoogle = async (event) => {
//   event.preventDefault();
//   try {
//     const response = await axios.get(API_BASE + "api/auth/google/url", {});
//     console.log(response.data.data.authorizeUrl);
//     window.location.href = response.data.data.authorizeUrl;
//   }
//   catch (error) {
//     console.error(error);
//   }
// };

// const handleLogout = () => {
//   logout();
//   // Redirect to the login page or any other desired location
//   window.location.href = "/login";
// };
