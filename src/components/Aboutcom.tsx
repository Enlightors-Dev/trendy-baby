import React from "react";
import Link from "next/link";

export default function Aboutcom() {
  return (
    <div className="flex flex-col md:flex-row  max-h-[700px] px-20 pt-10 mx-auto gap-x-20 items-center justify-center ">

      <div className="flex flex-col   ">
        <div>
          <img
            src="/images/Trending-baby-logo.png"
            alt="trendingbaby-logo"
            width={200}
            height={200}
            className=" object-contain"
          />

        </div>

        <div>
          <p className="font-semibold md:whitespace-normal md:pb-10  items-center  text-center md:text-left ">
            Trending Baby offers everything a child needs,<br/> with a special focus on providinga professional<br/> and comfortable experience for parents. 
          </p>
        </div> 
        <div className="pb-10 md:pb-0">
        <div className=" flex  flex-col h-[40px] w-[120px] rounded-md bg-[#3F738D] text-white hover:bg-[#579bbc] text-center justify-center items-center text-xl ">
          <Link href={`/about`} className="">
            <p>About Us</p>
          </Link>
        </div>
        </div>
      </div>

      <div className="">
        <img
          src="/images/trending-baby-15.jpg"
          className="max-w-[560px] max-h-[500px] object-contain"
        />
      </div>

    </div>
  );
}


