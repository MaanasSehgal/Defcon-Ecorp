"use client";

import Image from "next/image";
import Link from "next/link";
import "./Founder.css";
import FounderCard from "./FounderCard";

export default function FounderPage() {
    return (
        <>
            <div className="flex flex-col w-full h-full justify-evenly">
                <h1 className="text-8xl font-bold text-custom-green founder-text download-font text-center">
                    M<span className="offset">e</span>e<span className="offset1">t</span> O<span className="offset3">u</span>r<span className="offset2"> F</span>o<span className="offset">u</span>n
                    <span className="offset3">d</span>er<span className="offset2">s</span>
                </h1>
                <div className="flex flex-row justify-between items-center text-4xl  text-custom-green w-full my-8 px-12 download-font">
                    <p className="w-full text-left">
                        Meet Abhinav Mukherjee, the visionary founder behind E_Corp. With a passion for innovation and a keen eye for emerging trends, Abhinav is a trailblazer in the world of business
                        transformation, armed with a diverse background in technology and entrepreneurship. <br />
                    </p>
                    <div className=" w-full flex justify-center items-center">
                        <FounderCard name="Abhinav Mukharjee" image="/images/Founder/founder1.png" designation="Software Engineer, Ex. lead MSC KIIT" />
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-between items-center text-4xl  text-custom-green w-full my-8 px-12 download-font">
                    <p className="w-full text-left">
                        Known for his strategic foresight and unwavering commitment to excellence, Subhayan leads E Corp with a vision to revolutionize industries and drive positive change. His
                        dedication to pushing boundaries and creating impactful solutions has earned him recognition as a thought leader in the field.
                    </p>
                    <div className=" w-full flex justify-center items-center">
                        <FounderCard name="Subhayan Das" image="/images/Founder/founder2.png" designation="Analyst, Ex. Tech Lead MSC" />
                    </div>
                </div>
            </div>
        </>
    );
}
