import React, { useEffect, useState } from "react";
import Image from "next/image";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import axios from "axios";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { useSpeechSynthesis, SpeechSynthesis } from "react-speech-kit";
import Pimg from "../static/IMG_3488.jpg";
import Articleimage from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";
import logo from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";
import { formatDateTime } from "./utility";
import { tokenStore } from "../store/zustore";
import { comment } from "postcss";

// Inside your function or component on AnotherPage.js
const getUserIdFromTokenStore = () => {
  const { userid } = tokenStore.getState();
  return userid; // userid is active user
};

// Usage example:
const userid = getUserIdFromTokenStore();
console.log("----------------", userid); // This will log the userid value from the tokenStore

const ArticleMain = () => {
  const [blogData, setBlogData] = useState(null);
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [comments, setComments] = useState();
  // const { speak, cancel, speaking, supported } = useSpeechSynthesis();
  // let url = window.location.href;
  // let blogId = url.substring(url.lastIndexOf("/") + 1);
  //   console.log("--------", blogId);
  const handleShare = async () => {};

  useEffect(() => {
    let fetchBlogData = async () => {
      let url = window.location.href;
      let blogId = url.substring(url.lastIndexOf("/") + 1);
      if (blogId) {
        const apiUrl = `/api/blog/unique/${blogId}`;
        try {
          const response = await axios.get(apiUrl);
          console.log(response.data.data);
          setBlogData(response.data.data);
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        console.error("Blog ID not found in the URL.");
      }
    };
    fetchBlogData();
  }, []);
  if (blogData) {
    const { _id, user_id, title, content, date, images, Author } = blogData;

    const handleLike = async () => {
      console.log("BlogId:", _id, "User Id:", user_id, "Author Id :", userid);
      try {
        const response = await axios.post("/api/blogFeedback/likeBlog", {
          blogId: _id,
          userId: userid,
        });
        setLikes(response.data.likes);
        console.log(response.data.count); //Show the total like on front End
      } catch (error) {
        console.error("Error liking the blog:", error);
      }
    };
    const handleDislike = async () => {
      try {
        const response = await axios.post("/api/blogFeedback/dislikeBlog", {
          blogId: _id,
          userId: userid,
        });
        setDislikes(response.data.dislikes);
        console.log(response.data.count); //Show the total like on front End
      } catch (error) {
        console.error("Error disliking the blog:", error);
      }
    };
    const handleComment = async (event) => {
      event.preventDefault();
      try {
        console.log(comments);
        const response = await axios.post("/api/blogFeedback/commentOnBlog", {
          blogId: _id,
          userId: userid,
          comment: comments,
        });
        setComments(response.data.comment);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const handleSave = async () => {
      try {
        const response = await axios.post("/api/blogFeedback/saveBlog", {
          blogId: _id,
          userId: userid,
        });
        setLikes(response.data.dislikes);
        console.log(response.data); //Show the total like on front End
      } catch (error) {
        console.error("Error liking the blog:", error);
      }
    };

    const handleSpeak = () => {
      speak({ text: [Author, title, content] });
    };
    const handleCancel = () => {
      cancel();
    };

    return (
      <div className="flex items-center justify-center flex-[3] border-l border-r ">
        <div className="h-screen overflow-scroll p-[2rem]">
          <>
            <div className="flex justify-between items-center mt-[2.2rem] mb-[1.2rem]">
              <div className="flex gap-[1rem]">
                <div className="h-[3rem] w-[3rem] grid center rounded-full overflow-hidden">
                  <Image
                    className="object-cover"
                    src={Pimg}
                    alt="author"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div>{Author}</div>
                  <div className="flex gap-[.2rem] text-[#787878]">
                    <span className="flex items-center gap-[.2rem] text-[#3B91F8]"></span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[1rem] text-[#787878] cursor-pointer">
                <ThumbUpIcon
                  className="h-5 w-5 cursor-pointer {likes > 0 ? 'border-blue-500' : ''}"
                  onClick={handleLike}
                />
                <ThumbDownIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleDislike}
                />
                <ShareIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleShare}
                />
                <BookmarkBorderIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleSave}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <div className="h-[18rem] w-full grid center overflow-hidden mb-[2rem]">
                <img src={images} alt="thumbnail" height={120} width={500} />
              </div>
              <h1 className="font-bold text-3xl">{title}</h1>
              <h4 className="font-mediumSerifItalic text-[1.4rem] text-[#292929]">
                <div>{formatDateTime(date)}</div>
                <div>{content}</div>
              </h4>
              <div className="font-mediumSerif text-[1.4rem] text-[#292929]">
                {content[0].text}
              </div>
            </div>
            <div className="flex items-start space-x-4 py-8">
              <div className="flex-shrink-0">
                <Image
                  className="inline-block h-10 w-10 rounded-full"
                  src={Pimg}
                  alt=""
                />
              </div>

              <div className="min-w-0 flex-1">
                <form
                  className="relative"
                  method="POST"
                  onSubmit={handleComment}
                >
                  <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 ">
                    <label for="comment" className="sr-only">
                      <CommentIcon className="h-5 w-5 cursor-pointer" />
                    </label>
                    <textarea
                      rows="3"
                      name="comment"
                      id="comment"
                      value={comments}
                      onChange={(event) => setComments(event.target.value)}
                      className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Add your comment..."
                    ></textarea>

                    <div className="py-2" aria-hidden="true">
                      <div className="py-px">
                        <div className="h-9"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                    <div className="flex-shrink-0">
                      <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        </div>
      </div>
    );
  }
};
export default ArticleMain;
