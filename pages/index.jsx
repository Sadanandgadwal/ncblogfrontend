import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Next Campus Blog</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main>
        <Banner />
        <Navbar />
        <div className="flex justify-center">
          <div className="max-w-7xl flex-1">
            <div className="flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
              <PostCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
