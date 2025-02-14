'use client'
import Image from 'next/image';

export default function Lost() {
    return (
        <div className="valentine-theme min-h-screen p-6 pb-10 sm:p-8 font-[family-name:var(--font-geist-sans)]" style={{ backgroundColor: 'lightpink' }}>
            <div className="flex flex-col items-center justify-start min-h-screen">
                <h1 className="text-5xl font-extrabold text-red-600 text-center animate-bounce mt-10">You lost Priyanka, how dare you!</h1>
                <p className="text-2xl text-center text-gray-800 mt-4">She will be missing foreverrrrrrrr!</p>
                <Image src="/images/RIP.jpeg" alt="Nand and Priyanka" width={300} height={300} className="mt-4 rounded-full shadow-lg" />
                <a 
                    href="/" 
                    className="mt-10 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105"
                >
                    Try Again
                </a>
                <p className="text-xl text-center text-gray-600 mt-4">You can do it! 💪</p>
            </div>
        </div>
    )
}
