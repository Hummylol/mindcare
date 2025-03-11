"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = async () => {
    router.push("/login");
  };

  return (
    <nav className="p-4 flex justify-between items-center dark:bg-[#18181B] dark:text-white text-black bg-gray-100 w-full absolute top-0">
      <h1 className="text-lg font-bold">MindCare</h1>
      <div>
        {session ? (
          <div className="flex items-center gap-2">
            <span className="text-sm">Hello, {session.user.name}</span>
            <Button onClick={() => signOut()} className="bg-red-500 px-2 py-2 rounded-md">
              Sign Out
            </Button>
          </div>
        ) : (
          <Button onClick={handleSignIn} className="dark:bg-white bg-black px-2 py-2 rounded-md">
            Login
          </Button>
        )}
      </div>
    </nav>
  );
}
