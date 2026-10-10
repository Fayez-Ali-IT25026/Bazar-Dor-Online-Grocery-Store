"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const SignOut = () => {
  const router = useRouter();

//   const handleSignOut = async () => {
//     await authClient.signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           router.push("/singin"); // Redirect to the sign-in page after successful sign-out 
//         },
//       },
//     });
//   };

const handleSignOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        toast.success("Signed out successfully!");
        router.push("/singin");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Sign out failed!");
      },
    },
  });
};

  return (
    <div className="rounded-lg px-4 py-2 text-white bg-green-600 transition hover:bg-red-950">
      <button onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;