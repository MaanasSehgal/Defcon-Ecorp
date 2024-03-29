"use client";

import Image from "next/image";
import Link from "next/link";
import "./resources.css";

export default function DownloadPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex justify-center flex-col lg:flex-row ">
                <Image className=" border-2 border-solid border-custom-green rounded-xl my-5 lg:mx-8" src="/images/deathnote1.jpeg" width={400} height={400} />
                <Image className=" border-2 border-solid border-custom-green rounded-xl my-5 lg:mx-8" src="/images/deathnote2.jpeg" width={400} height={400} />
            </div>
            <Link href={"/images/deathnote.zip"} className="">
                <div className="border-2 border-custom-green text-white flex justify-center items-center px-8 py-2 rounded-xl mt-40 download-font text-6xl hover:bg-custom-green transition-all">
                    Download
                </div>
            </Link>
        </div>
    );
}
