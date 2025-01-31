import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8  sm:items-start">
       <header className=" w-full ">
        <Hero></Hero>
       </header>
      </main>
       
    </div>
  );
}
