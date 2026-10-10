import ProfileForm from "@/components/ProfileForm";

export default function UpdateProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Update Profile
        </h1>

        <ProfileForm />
      </div>
    </div>
  );
}