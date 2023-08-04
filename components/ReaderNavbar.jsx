import Image from "next/image";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

import EditNoteIcon from "@mui/icons-material/EditNote";

import Plogo from "../static/logoLight.webp";
import logo from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";
const ReaderNavbar = () => {
  return (
    // horizontal nav bar
    <div className="w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]">
      <Link href="/">
        <div className="cursor-pointer">
          <Image src={Plogo} alt="medium small logo" />
        </div>
      </Link>
      <div className="flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]">
        <HomeIcon />

        <NotificationsIcon />

        <BookmarksIcon />

        <EditNoteIcon />
      </div>
      <div className="w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden grid place-items-center">
        <Image className="object-cover" src={logo} alt="profile image icons" />
      </div>
    </div>

    // vertical navbar
    // <div className="flex justify-center gap-10 p-5 bg-[#1a1919]">
    //   <div className="max-w-7xl flex-1 flex justify-between gap-10">
    //     <div className="flex items-center flex-start">
    //       <Image src={Plogo} alt="medium small logo" />
    //     </div>
    //     <div className="flex cursor-pointer items-center space-x-5 text-white">
    //       <div className="flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]">
    //         <HomeIcon />

    //         <NotificationsIcon />

    //         <BookmarksIcon />

    //         <EditNoteIcon />
    //       </div>
    //       <div className="w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden grid place-items-center">
    //         <Image
    //           className="object-cover"
    //           src={Plogo}
    //           alt="profile image icons"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ReaderNavbar;
