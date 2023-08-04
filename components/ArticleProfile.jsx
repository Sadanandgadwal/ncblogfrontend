import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import Pimg from "../static/IMG_3488.jpg";
import Logop from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";

const ArticleProfile = () => {
  return (
    <div className="h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]">
      <>
        <div className="flex items-center justify-center text-sm bg-[#3B91F8] text-white my-[2rem] py-[.6rem] rounded-full">
          Lets Begin
        </div>
        <div className="flex items-center gap-[.6rem] h-[2.6rem] border px-[1.2rem] border-black outline-black rounded-full">
          <SearchIcon />
          <input
            className="border-none outline-none bg-none w-full"
            placeholder="Search"
            type="text"
          />
        </div>

        <div className="my-[2rem]">
          <div className="h-[5rem] w-[5rem] rounded-full overflow-hidden">
            <Image src={Pimg} alt="author" width={100} height={100} />
          </div>
          <div className="font-semibold mb-[.2rem] mt-[1rem]">
            Sadanand Gadwal
          </div>
          <div className="text-[#787878]">789 followers</div>
          <div className="flex gap-[.6rem] my-[1rem]">
            <button className="bg-[#3B91F8] text-white rounded-full px-[.6rem] py-[.4rem] text-sm">
              Follow
            </button>
            <button className="bg-[#3B91F8] text-white rounded-full px-[.6rem] py-[.4rem] text-sm">
              <MarkEmailUnreadIcon />
            </button>
          </div>
        </div>

        <div className="">
          <div className="my-[1rem]">More from Medium</div>
          <div className="flex-[4]">
            {recommendedPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between cursor-pointer my-[1rem]"
              >
                <div className="">
                  <div className="flex items-center gap-[.6rem]">
                    <div className="rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]">
                      <Image
                        src={Logop}
                        alt="author"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="text-xl">{post.author.name}</div>
                  </div>
                  <div className="font-bold">{post.title}</div>
                </div>
                <div className="flex flex-1 items-center justify-center h-[4rem] w-[4rem]">
                  <Image
                    className="object-cover"
                    src={post.image}
                    alt="thumbnail"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default ArticleProfile;

const recommendedPosts = [
  {
    title: "What can you do with Replit?",
    image: Logop,
    author: {
      name: "Develearn",
      image: Logop,
    },
  },
  {
    title: "The Ultimate JavaScript Course for Beginners by Clever Programmer",
    image: Logop,
    author: {
      name: "Aman",
      image: Logop,
    },
  },
  {
    title: "How to Become a Developer in 2022?",
    image: Logop,
    author: {
      name: "ravi",
      image: Logop,
    },
  },
];
