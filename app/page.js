import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
        <h1 className="text-4xl mb-5">CPRG 306: Web Development 2 - Assignments</h1>


        <Link href="./week-2/" className="underline text text-emerald-500 hover:text-cyan-400 mb-2 block"> Week 2 Assignment - Student Info
        </Link>

        <Link href="./week-3/" className="underline text text-emerald-500 hover:text-cyan-400 mb-2 block"> Week 3 Assignment - Shopping List
        </Link>

      </main>
  );
}
