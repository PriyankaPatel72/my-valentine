import Envelope from "./Envelope/page";
import Image from "next/image";

export default function Home() {
  const heart = Array(10).fill("/images/heart-removebg-preview.png");


  return (
    <div className="valentine-theme" style={{ backgroundColor: 'lightpink' }}>
      <div className="flex justify-between m4">
        {heart.map((src, index) => (
          <Image key={index} src={src} alt="Heart" width={100} height={20} className="heart-image" />
        ))}
      </div>
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-4xl font-bold text-red-500">YOU HAVE A MESSAGE</h1>
        <Envelope />
      </div>
    </div>
  );
}
