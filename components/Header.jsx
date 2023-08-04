import Image from "next/image";
import Logo from "../static/logoLight.webp";
import Link from "next/link";
import Signin from "@/pages/Signin";
import { useEffect, useState } from "react";

import { tokenStore } from "../store/zustore";
const Header = () => {
  const data = tokenStore((store) => store.data);
  const [user_id, setuser_id] = useState({ log: "Signin", out: false });

  useEffect(() => {
    if (localStorage.getItem("userinfo")) {
      setuser_id({
        out: true,
        log: "Hi , " + data,
      });
    }
  }, []);

  const CreateBlog = () => {
    if (user_id == "sign In") window.location.href = "/Signin";
    else {
      const headers = {
        "X-User-ID": user_id,
      };
      (window.location.href = "/upload"), { headers };
    }
    window.location.href = `/Upload`;
  };
  const EraseToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("ally-supports-cache");
  };
  // const writeBlog=async ()=>{
  //   try {
  //     const response = await axios.get(API_BASE+"blog/"+user_id+"/create", {});
  //     window.location.href = response.data.data.authorizeUrl;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  return (
    // <div className="flex justify-center gap-10 p-5 bg-[#1a1919]">
    //   <div className="max-w-7xl flex-1 flex justify-between gap-10">
    //     <div className="flex items-center flex-start">
    //       <Image
    //         className="cursor-pointer object-contain"
    //         src={Logo}
    //         alt="logo"
    //         height={40}
    //         width={200}
    //       />
    //     </div>
    //     <div className="flex cursor-pointer items-center space-x-5 text-white">
    //       <Link href="/Signin">{user_id.log}</Link>
    //       <div className="bg-[#3B91F8] text-white py-2 px-4 rounded-full">
    //         <Link href="" onClick={CreateBlog}>
    //           Lets Begin{" "}
    //         </Link>
    //       </div>
    //       {user_id.out && (
    //         <div className="bg-[#f83b3b] text-white py-2 px-4 rounded-full">
    //           <Link href="/Signin" onClick={EraseToken}>
    //             Logout
    //           </Link>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div>
      <nav
        className="relative flex w-full items-center justify-between bg-transparent py-2 shadow-sm  lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div className="flex items-center">
            <button
              className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <Image
              className="cursor-pointer object-contain px-3"
              src={Logo}
              alt="logo"
              height={40}
              width={200}
            />
          </div>

          <div className="my-1 flex items-center lg:my-0 lg:ml-auto px-6">
            <Link className=" text-black px-6 font-bold" href="/Signin">
              {user_id.log}
            </Link>
            <div className="px-6 flex space-x-3">
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal bg-blue-500 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Link href="" onClick={CreateBlog}>
                  Lets Begin{" "}
                </Link>
              </button>{" "}
              {user_id.out && (
                <button
                  type="button"
                  className="inline-block  rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal bg-red-500 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <Link href="/Signin" onClick={EraseToken}>
                    Logout{" "}
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
