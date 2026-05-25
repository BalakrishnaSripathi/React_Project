import { Toaster, toast } from "sonner";

function SonnerApp() {

  // Success Toast
  const showSuccess = () => {
    toast.success("Data saved successfully");
  };

  // Error Toast
  const showError = () => {
    toast.error("Something went wrong");
  };

  // Warning Toast
  const showWarning = () => {
    toast.warning("Please check the form");
  };

  // Info Toast
  const showInfo = () => {
    toast.info("New update available");
  };

  // Loading Toast
  const showLoading = () => {

    const loadingToast = toast.loading("Uploading file...");

    setTimeout(() => {

      toast.dismiss(loadingToast);

      toast.success("File uploaded successfully");

    }, 3000);

  };

  // Custom Toast
  const showCustom = () => {
    toast("Welcome to Sonner Toast");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">

      {/* Toast Container */}
      <Toaster
        position="top-right"
        richColors
      />

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center mb-10">
          Sonner Toast Demo
        </h1>

        <div className="grid md:grid-cols-2 gap-5">

          {/* Success */}
          <button
            onClick={showSuccess}
            className="bg-green-500 hover:scale-105 transition text-white py-3 rounded-xl font-semibold"
          >
            Success Toast
          </button>

          {/* Error */}
          <button
            onClick={showError}
            className="bg-red-500 hover:scale-105 transition text-white py-3 rounded-xl font-semibold"
          >
            Error Toast
          </button>

          {/* Warning */}
          <button
            onClick={showWarning}
            className="bg-yellow-500 hover:scale-105 transition text-white py-3 rounded-xl font-semibold"
          >
            Warning Toast
          </button>

          {/* Info */}
          <button
            onClick={showInfo}
            className="bg-blue-500 hover:scale-105 transition text-white py-3 rounded-xl font-semibold"
          >
            Info Toast
          </button>

          {/* Loading */}
          <button
            onClick={showLoading}
            className="bg-purple-500 hover:scale-105 transition text-white py-3 rounded-xl font-semibold"
          >
            Loading Toast
          </button>

          {/* Custom */}
          <button
            onClick={showCustom}
            className="bg-black hover:scale-105 transition text-white py-3 rounded-xl font-semibold"
          >
            Custom Toast
          </button>

        </div>

        {/* Explanation */}
        <div className="mt-10 bg-gray-100 rounded-xl p-5">

          <h2 className="text-2xl font-bold mb-4">
            Why Use Sonner?
          </h2>

          <ul className="space-y-2 text-gray-700">

            <li>
              ✅ Modern toast notifications
            </li>

            <li>
              ✅ Better user experience
            </li>

            <li>
              ✅ Easy to use
            </li>

            <li>
              ✅ Smooth animations
            </li>

            <li>
              ✅ Perfect for API responses
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default SonnerApp;