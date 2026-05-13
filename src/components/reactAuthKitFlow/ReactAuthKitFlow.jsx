import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  LogOut,
  RefreshCw,
  Route,
  Database,
  KeyRound,
} from "lucide-react";

const features = [
  {
    icon: <KeyRound size={28} />,
    title: "JWT Token Storage",
    desc: "Securely stores access tokens in localStorage or cookies.",
  },
  {
    icon: <UserCheck size={28} />,
    title: "Authentication State",
    desc: "Tracks whether the user is logged in or not globally.",
  },
  {
    icon: <Lock size={28} />,
    title: "Protected Routes",
    desc: "Restricts unauthorized users from accessing pages.",
  },
  {
    icon: <RefreshCw size={28} />,
    title: "Refresh Tokens",
    desc: "Automatically refresh expired sessions.",
  },
  {
    icon: <Database size={28} />,
    title: "User Data Management",
    desc: "Store role, email, profile data and access anywhere.",
  },
  {
    icon: <LogOut size={28} />,
    title: "Logout Handling",
    desc: "Clear sessions instantly and securely.",
  },
];

export default function ReactAuthKitFlow() {
  const [step, setStep] = useState(0);

  const workflow = [
    "User Login",
    "API Authentication",
    "Receive JWT Token",
    "Store Token",
    "Protect Routes",
    "Access Dashboard",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % workflow.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8 overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-14">
        <div className="flex justify-center mb-4 animate-bounce">
          <ShieldCheck size={70} className="text-green-400" />
        </div>

        <h1 className="text-5xl font-bold mb-4">
          react-auth-kit
        </h1>

        <p className="text-slate-300 max-w-3xl mx-auto text-lg">
          A powerful React authentication library that handles JWT tokens,
          protected routes, authentication state, refresh tokens, and secure
          session management with easy hooks.
        </p>
      </div>

      {/* Animated Workflow */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Authentication Workflow Animation
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-5">
          {workflow.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`px-6 py-4 rounded-2xl border transition-all duration-700 transform
                ${
                  step === index
                    ? "bg-green-500 scale-110 shadow-2xl shadow-green-500/40 border-green-300"
                    : "bg-slate-800 border-slate-700"
                }`}
              >
                <p className="font-semibold">{item}</p>
              </div>

              {index !== workflow.length - 1 && (
                <Route
                  size={28}
                  className={`transition-all duration-700 ${
                    step === index
                      ? "text-green-400 translate-x-2"
                      : "text-slate-600"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div>
        <h2 className="text-3xl font-semibold text-center mb-12">
          What react-auth-kit Can Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-900/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-7 hover:scale-105 hover:border-green-400 transition-all duration-500 shadow-lg"
            >
              <div className="mb-5 text-green-400 group-hover:rotate-12 transition-transform duration-500">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hook Explanation Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Important Hooks
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* useSignIn */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-green-400 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              useSignIn()
            </h3>

            <p className="text-slate-300 mb-4">
              Used after successful login API response.
            </p>

            <div className="bg-black rounded-xl p-4 overflow-auto text-sm">
              <pre>{`
const signIn = useSignIn();

signIn({
  auth: {
    token: "jwt_token",
    type: "Bearer"
  },
  userState: {
    name: "Balakrishna"
  }
});
              `}</pre>
            </div>
          </div>

          {/* useIsAuthenticated */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-green-400 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              useIsAuthenticated()
            </h3>

            <p className="text-slate-300 mb-4">
              Checks whether the user is authenticated or not.
            </p>

            <div className="bg-black rounded-xl p-4 overflow-auto text-sm">
              <pre>{`
const isAuthenticated = useIsAuthenticated();

if(isAuthenticated()){
  console.log("User Logged In");
}
              `}</pre>
            </div>
          </div>

          {/* useAuthUser */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-green-400 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              useAuthUser()
            </h3>

            <p className="text-slate-300 mb-4">
              Access logged-in user data globally.
            </p>

            <div className="bg-black rounded-xl p-4 overflow-auto text-sm">
              <pre>{`
const auth = useAuthUser();

console.log(auth().name);
              `}</pre>
            </div>
          </div>

          {/* useSignOut */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-green-400 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              useSignOut()
            </h3>

            <p className="text-slate-300 mb-4">
              Removes tokens and logs out the user securely.
            </p>

            <div className="bg-black rounded-xl p-4 overflow-auto text-sm">
              <pre>{`
const signOut = useSignOut();

signOut();
              `}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="inline-block px-8 py-5 rounded-3xl bg-green-500/10 border border-green-500">
          <h3 className="text-2xl font-bold text-green-400 mb-3">
            Why Developers Love react-auth-kit
          </h3>

          <p className="text-slate-300 max-w-2xl">
            It reduces authentication complexity, improves security,
            simplifies JWT handling, protects routes automatically,
            and makes React authentication clean and scalable.
          </p>
        </div>
      </div>
    </div>
  );
}