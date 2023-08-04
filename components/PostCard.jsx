import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../static/logoLight.webp";
import pLogo from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { formatDateTime } from "./utility";

import Link from "next/link";

import axios from "axios";

const PostCard = ({ blog }) => {
  //const [categories, setCategories] = useState([]);

  const handleShare = () => {
    //setShowPopup(true);
    // Add your logic to handle sharing
  };

  const readFullBlog = async () => {
    // try {
    //   const response = await axios.get(
    //     API_BASE + "api/auth/login/api/blog/${blog._id}",
    // {});
    //   }catch(error){
    //     console.log(error);
    //   }
  };
  return (
    <Link key={blog._id} href={`/post/${blog._id}`}>
      <div className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              <article className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={blog.images}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={formatDateTime(blog.date)}
                      className="text-gray-500"
                    >
                      {formatDateTime(blog.date)}
                    </time>
                    <a
                      href={blog.category}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {/* {blog.categories.name} */}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={blog.href}>
                        <span className="absolute inset-0" />
                        {blog.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {/* {blog.content} */}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={blog.images}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={blog.herf}>
                            <span className="absolute inset-0" />
                            {blog.user_id.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{blog.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const AllPosts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blog/readAllBlogs");
        // "https://nextcampusblog.onrender.com/api/blog/readAllBlogs"
        const blogs = response.data.data;
        setBlogs(blogs);
        console.log(blogs.title);
        //console.log();
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {Array.isArray(blogs) &&
        blogs.map((blog) => <PostCard key={blog._id} blog={blog} />)}
    </>
  );
};

export default AllPosts;
