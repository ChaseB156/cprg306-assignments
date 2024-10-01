
import Link from "next/link";
import ItemList from './item-list';

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl underline mb-5">Shopping List</h1>
      <ItemList />

      <Link href="../"className="underline text-red-500 hover:text-cyan-400">Back Page</Link>
    </main>
  );
}

