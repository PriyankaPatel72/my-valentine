'use client'

export default function RewardPage() {
  return (
    <div className="valentine-theme min-h-screen p-6 pb-10 sm:p-8 font-[family-name:var(--font-geist-sans)]" style={{ backgroundColor: 'lightpink' }}>
      <div className="flex flex-col items-center justify-start min-h-screen">
        <h1 className="text-5xl font-extrabold text-red-600 text-center animate-bounce mt-4">Your Reward!</h1>
        <p className="text-xl text-center text-gray-800 mt-4">Thank you for rescuing me!</p>
        <div className="mt-6">
          <video width="1000" height="1000" controls>
            <source src="/images/WhatsApp Video 2025-02-13 at 8.16.21 PM.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
