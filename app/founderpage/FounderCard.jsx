import Image from "next/image";
import "./Founder.css";
import Link from "next/link";

const FounderCard = ({image, name, designation}) => {
    const handleDownload = async () => {
        const response = await fetch(image);

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${name}-founder.jpg`;

        link.click();

        setTimeout(() => window.URL.revokeObjectURL(url), 5000);
    };

    return (
        <div className="flex flex-col justify-center items-center rounded-3xl border-solid p-2 border-white text-white">
            <div className="relative w-60 h-60 rounded-full overflow-hidden">
                <div className="absolute w-full h-full rounded-full border-white border-2 loader-border"></div>
                <Image src={image} alt={name + " Founder"} layout="fill" objectFit="cover" quality={100} className="z-10" />
            </div>
            <h2 className="text-4xl my-1">{name}</h2>
            <h3 className="text-3xl my-2">{designation}</h3>
            <button className="border-2 border-solid border-custom-green evilcorp-font px-5 py-3 rounded-full" onClick={handleDownload}>
                Download
            </button>
        </div>
    );
};

export default FounderCard;
