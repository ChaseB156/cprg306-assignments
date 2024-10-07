
import Link from "next/link";
import NewItem from './new-item';

export default function Week4Page() {
  return (
    <main>
      <h1 className="text-3xl ml-2 underline mb-5">Week 4 - New Item</h1>
      <NewItem />

      <Link href="../"className="underline text-red-500 hover:text-cyan-400">Back Page</Link>

    </main>
  );
}
