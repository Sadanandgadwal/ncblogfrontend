import Dashboard from "@/components/Dashboard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const apiUrl = "/api/user/allUser";

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
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-black">
        All Users
      </h1>
      <div className="bg-gray-900">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-700">
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                  Name
                </td>
                <td className="whitespace-nowrap px-12 py-4 text-sm text-gray-300">
                  Mobile Number
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                  Email-ID
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                  User Status
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                  User Created
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                  User Role
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
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {person.mobile}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {person.status}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {person.date}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      {person.roleName}
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

//   {
//             "_id": "64afd5fe660bec53e9c65129",
//             "user_id": {
//                 "_id": "64956a42f3b8aba783a1a6b7",
//                 "name": "Ravi Kumar"
//             },
//             "title": "Everything You Need to Know About Quora Digest forever?",
//             "content": "In today’s fast-paced world, staying up-to-date with recent trends, ideas, and insights into your areas of interest can be a challenge! However, thanks to Quora Digest as it helps you stay informed with recent updates. It’s a daily email digest that provides questions and answers from the Quora platform.\n\nIt provides personalized content based on a user’s interests and activity on the platform. As a result, Quora has become increasingly popular over the years. It is a platform where users can ask and answer questions about- technology, business, health, education, and more.\n\nWith over 300 million active users, Quora has become the hub of knowledge and information, and Quora Digest is just one of\nthe many tools available to help users make the most of it.\n\nIn this article, we’ll explore everything you need to know about Quora Digest, including how to customize your settings, the benefits of using it, and how to use the Quora ad Spy tool to enhance your marketing efforts on the platform.",
//             "date": "2023-07-13T10:45:22.509Z",
//             "images": "https://res.cloudinary.com/dlhb7c0gg/image/upload/v1689245181/gvq4xg3bnz58j4pwf174.png",
//             "blog_status": "progress",
//             "createdAt": "2023-07-13T10:46:22.214Z",
//             "updatedAt": "2023-07-13T10:46:22.214Z",
//             "__v": 0,
//             "categories": "64b8de1637063648e068ce02"
//         },
