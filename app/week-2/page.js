
import Link from "next/link";
import StudentInfo from "./student-info";


export default function Page() {
    return (
      <main>
        <h1>Student Info - Week 2</h1>
        <StudentInfo />
        <Link href="../"className="underline text-red-500 hover:text-cyan-400">Back Page</Link>
      </main>
    );
  }