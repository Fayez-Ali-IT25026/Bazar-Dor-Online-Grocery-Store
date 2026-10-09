// "use client";
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';
import SignIn from '@/app/singin/page';
import { authClient } from "@/lib/auth-client";
import SignOut from '@/app/singout/page';
import NavbarClient from "./NavbarClient";







const Navbar = () => {


//  const { data: session , isPending } = authClient.useSession()

// if (isPending) {
//     return <span className="loading loading-spinner text-success"></span> 
// }





//  const authLink = <>
// {

//     session?.user ? <>
//         Welcome {session.user.name}

        
//          <SignOut />


         
    
//     </> :
//     <>
//    <Link href="/singin" className="btn btn-ghost border-1 border-gray-400">সাইন ইন</Link>
// <Link href="/singup" className="btn bg-green-500 text-white">সাইন আপ</Link>
//   </>

// }
// </>













    const date = new Date().toLocaleDateString("bn-BD", { 
    dateStyle: "full", 
    });



    return (
        <div className="bg-white ">
            <nav className="flex justify-between items-center p-4 bg-white  max-w-7xl mx-auto">
                <div className="flex items-center space-x-4">
                    <Image 
                    src="/logo.jpg"
                    alt="Logo"
                    width={50}
                    height={50}
                    priority
                    />
                    <div>
                        <p>বাজার দর</p>
                        <span>{date}</span>
                        </div>
                </div>
                <div>
{/* <Link href="/singin" className="btn btn-ghost border-1 border-gray-400">সাইন ইন</Link>
<Link href="/singup" className="btn bg-green-500 text-white">সাইন আপ</Link> */}


{/* {authLink} */}



<NavbarClient/>


                </div>
            </nav>
            <NavLink/>
        </div>
    );
};

export default Navbar;