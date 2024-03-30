import Image from "next/image";
import "./Founder.css";

const FounderCard = ({image, name, designation}) => {
    return (
        <div className="flex flex-col justify-center items-center rounded-3xl border-solid p-2 border-white text-white">
            <div className="relative w-60 h-60 rounded-full overflow-hidden">
                <div className="absolute w-full h-full rounded-full border-white border-2 loader-border"></div>
                <Image src={image} alt={name + " Founder"} layout="fill" objectFit="cover" quality={100} className="z-10" />
            </div>
            <h2 className="text-4xl my-1">{name}</h2>
            <h3 className="text-3xl my-2">{designation}</h3>
        </div>
    );
};

export default FounderCard;
