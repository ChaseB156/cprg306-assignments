
import Link from "next/link";
import NewItem from './new-item';

export default function Week4Page() {
  return (
    <main>
      <h1 className="text-3xl ml-2 underline mb-5">Week 5 - Finished New Item</h1>
      <NewItem />

      <Link href="../"className="underline text-red-600 hover:text-black bg-red-200 font-bold py-2 px-4 rounded w-full ml-2">Back Page</Link>

    </main>
  );
}
