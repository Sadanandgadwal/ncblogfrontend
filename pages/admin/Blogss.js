import Dashboard from "@/components/Dashboard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const apiUrl = "/api/blog/readAllBlogs";

const Users = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data.data);
        setPeople(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the backend:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Dashboard>
      <h1 className="   mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-black   ">
        All blogs
      </h1>
      <div className="bg-gray-900">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-700">
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-ls font-medium text-white sm:pl-0">
                  User Name
                </td>
                <td className="whitespace-nowrap px-44 py-4 text-ls text-gray-300 font-medium">
                  Blog Title
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-ls text-gray-300 font-medium">
                  Publish Date
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-ls text-gray-300 font-medium">
                  Blog Status
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* ... Your existing JSX code ... */}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-gray-900">
          {/* ... Your existing JSX code ... */}
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-700">
              {/* ... Your existing JSX code ... */}
              <tbody className="divide-y divide-gray-800">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                      {person.user_id.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {person.date}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {person.blog_status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* ... Your existing JSX code ... */}
        </div>
      )}
    </Dashboard>
  );
};

export default Users;
