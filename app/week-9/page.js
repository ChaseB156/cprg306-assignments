
"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleLogin = async () => {
    await gitHubSignIn();
    router.push("/week-9/shopping-list");
  };

  return (
    <main className="p-5 bg-emerald-500 min-h-screen flex items-center justify-center">
      {user ? (
        <div className="text-center">
          <p className="text-xl mb-5">Welcome, {user.displayName} ({user.email})</p>
          <button
            onClick={firebaseSignOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-5"
          >
            Logout
          </button>
          <br />
          <Link href="/week-9/shopping-list" className="underline text-cyan-400 text-lg">
            Go to Shopping List
          </Link>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login with GitHub
        </button>
      )}
    </main>
  );
}
