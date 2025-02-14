import Envelope from "./Envelope/page";

export default function Home() {

  return (
    <div className="valentine-theme min-h-screen p-6 pb-10 sm:p-8 font-[family-name:var(--font-geist-sans)]" style={{ backgroundColor: 'lightpink' }}>
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-4xl font-bold text-red-500">YOU HAVE A MESSAGE</h1>
        <Envelope />
      </div>
    </div>
  );
}
