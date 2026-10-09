"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import SignOut from "@/app/singout/page";

const NavbarClient = () => {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return <span className="loading loading-spinner text-success"></span>;
    }

    return (
        <div>
            {session?.user ? (
                <>
                    <div className="flex gap-2 justify-center items-center">
<div>
    Welcome {session.user.name} <br />
<Link href={"/Profile"} className="text-green-500 font-bold">Update Profile</Link>
</div>
                    <SignOut />

                    </div>
                </>
            ) : (
                <>
                    <Link href="/singin" className="btn btn-ghost border border-gray-400">
                        সাইন ইন
                    </Link>
                    <Link href="/singup" className="btn bg-green-500 text-white">
                        সাইন আপ
                    </Link>
                </>
            )}
        </div>
    );
};

export default NavbarClient;