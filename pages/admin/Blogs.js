import Dashboard from "@/components/Dashboard";
import { useAdminStore } from "@/store/zustore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios if not already imported
export default function Blogs() {
  const AdminState = useAdminStore((state) => state.AdminState);
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!AdminState) {
      router.push("/Signin");
    }
  }, [AdminState]);

  const showblogs = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("/api/blog/readAllBlogs", {});
      const blogsData = response.data.data;
      console.log(blogsData);
      setBlogs(blogsData);
      //console.log("---------", blogs.name, "++++++++++", selectedblogs);
      toast.success(response.data.data);
    } catch (error) {
      // console.error(error);
      setBlogs([]);
    }
  };

  return (
    <Dashboard>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="bg-gray-900 py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    blogs
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                    A list of all the users Blogs
                  </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  {/* <button
                    type="button"
                    className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  ></button> */}
                </div>
              </div>
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                          >
                            User Id
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            blog_Status
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            blogs
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {blogs.map((category, index) => (
                          <tr key={index}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {category.user_id}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {category.title}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {category.data}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {category.blog_Status}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {category.blogs}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
