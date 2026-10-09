import React from 'react';
// import { authClient } from "@/lib/auth-client"
import ProfileForm from "@/components/ProfileForm";

const Profile = async () => {

// await authClient.updateUser({
    
//     name: "John Doe",
// })

// const userData = await authClient.updateUser({
    
//     name: "John Doe",
// })


// console.log(userData)


    return (
        <div>
            
<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-6 sm:p-8">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            My Profile
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your BazarDor account information.
          </p>
        </div>

        {/* Profile Icon */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-green-700">
              U
            </span>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Update Your Name
            </h2>
            <p className="text-sm text-gray-500">
              Keep your profile information up to date.
            </p>
          </div>
        </div>

        {/* Update Name Form */}
        {/* <form className="space-y-5">

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Update Name
          </button>

        </form> */}
<ProfileForm />



        {/* Footer Note */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Your profile information belongs to your BazarDor account.
        </p>

      </div>
    </div>




        </div>
    );
};

export default Profile;