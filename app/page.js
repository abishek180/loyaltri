import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="max-w-screen-xl mx-auto">
    <Link href="/about" className="pt-40 text-center text-white text-[110px]">OUR STORY</Link>
   </div>
  );
}
