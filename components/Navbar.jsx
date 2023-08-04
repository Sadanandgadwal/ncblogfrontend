import { HomeIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useState, useEffect } from "react";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      console.log("hi");
      try {
        const response = await axios.get("/api/category/list", {});
        const categoriesData = response.data.data;
        setCategories(categoriesData);

        console.log(response);
      } catch (error) {
        setCategories([]);
      }
    })();
  }, []);

  return (
    <div className="flex flex-wrap items-center text-base justify-center mt-2 ">
      <nav className="flex   " aria-label="Breadcrumb">
        <ol
          role="list"
          className="flex space-x-4 rounded-md bg-slate-100 px-6 shadow"
        >
          <li className="flex ">
            <div className="flex items-center">
              <a href="#" className="text-gray-500 hover:text-gray-500">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {categories?.map((page) => (
            <li key={page.name} className="flex cursor-pointer">
              <div className="flex items-center">
                <svg
                  className="h-full w-6 flex-shrink-0 text-gray-300"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a
                  href={page.href}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current={page.current ? "page" : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
    // <div className="flex flex-wrap items-center text-base justify-center mt-5">
    //   {categories?.map((page) => (
    //     <a key={page.name} className="mr-5 cursor-pointer">
    //       <div>
    //         <a
    //           href={page.href}
    //           aria-current={page.current ? "page" : undefined}
    //         >
    //           {page.name}
    //         </a>
    //       </div>
    //     </a>
    //   ))}
    // </div>
  );
}