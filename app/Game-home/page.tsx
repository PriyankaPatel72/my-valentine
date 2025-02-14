import Image from "next/image";

export default function GameHome() {
  return (
    <div className="valentine-theme min-h-screen p-6 pb-10 sm:p-8 font-[family-name:var(--font-geist-sans)]" style={{ backgroundColor: 'lightpink' }}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-extrabold text-red-600 text-center animate-bounce">Oh No! Your Girlfriend is Missing!</h1>
        <Image src="/images/me.jpeg" alt="Girlfriend" width={300} height={300} className="mt-8 rounded-lg animate-pulse shadow-lg" />
        <p className="mt-4 text-2xl text-center text-gray-800">
          She was last seen in a mysterious escape room. Solve the puzzles and challenges to rescue her!
        </p>
        <div className="mt-8">
          <a href="/EscapeRoom" className="px-8 py-4 text-2xl font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-transform transform hover:scale-110">
            Start the Adventure!
          </a>
        </div>
      </div>
    </div>
  );
}