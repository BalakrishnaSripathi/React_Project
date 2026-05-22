import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonApp() {

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  // Fake API Call
  useEffect(() => {

    setTimeout(() => {

      setUser({
        name: "Balakrishna",
        email: "balakrishnaSripathi@gmail.com",
        role: "Frontend Developer",
      });

      setLoading(false);

    }, 3000);

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">

        <h1 className="text-3xl font-bold mb-6">
          React Loading Skeleton
        </h1>

        {/* Profile Card */}
        <div className="border rounded-xl p-5">

          {
            loading ? (

              <>
                {/* Image Skeleton */}
                <Skeleton
                  circle
                  height={80}
                  width={80}
                />

                <div className="mt-4">

                  {/* Name Skeleton */}
                  <Skeleton height={25} width={200} />

                  <div className="mt-3">

                    {/* Email Skeleton */}
                    <Skeleton height={20} />

                  </div>

                  <div className="mt-3">

                    {/* Role Skeleton */}
                    <Skeleton height={20} width={150} />

                  </div>

                  <div className="mt-5">

                    {/* Button Skeleton */}
                    <Skeleton
                      height={40}
                      width={120}
                      borderRadius={10}
                    />

                  </div>

                </div>
              </>

            ) : (

              <>
                {/* Real Data */}
                <img
                  src=""
                  alt="profile"
                  className="w-20 h-20 rounded-full"
                />

                <h2 className="text-2xl font-bold mt-4">
                  {user.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  {user.email}
                </p>

                <p className="text-blue-600 mt-2 font-semibold">
                  {user.role}
                </p>

                <button className="mt-5 bg-black text-white px-5 py-2 rounded-lg">
                  View Profile
                </button>
              </>

            )
          }

        </div>

      </div>

    </div>
  );
}

export default SkeletonApp;