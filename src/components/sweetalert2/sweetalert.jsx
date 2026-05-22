import { useState } from "react";
import Swal from "sweetalert2";

function SweetalertApp() {

  const [name, setName] = useState("");

  // Normal Browser Alert
  const normalAlert = () => {
    alert("This is normal browser alert");
  };

  // Success Alert
  const successAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Data saved successfully",
      icon: "success",
    });
  };

  // Error Alert
  const errorAlert = () => {
    Swal.fire({
      title: "Error!",
      text: "Something went wrong",
      icon: "error",
    });
  };

  // Warning Alert
  const warningAlert = () => {
    Swal.fire({
      title: "Warning!",
      text: "Please check details",
      icon: "warning",
    });
  };

  // Info Alert
  const infoAlert = () => {
    Swal.fire({
      title: "Information",
      text: "This is info alert",
      icon: "info",
    });
  };

  // Question Alert
  const questionAlert = () => {
    Swal.fire({
      title: "Question",
      text: "Do you like React?",
      icon: "question",
    });
  };

  // Confirm Delete
  const confirmDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {

      if (result.isConfirmed) {

        Swal.fire({
          title: "Deleted!",
          text: "Item deleted successfully",
          icon: "success",
        });

      }

    });
  };

  // Form Submit
  const handleSubmit = () => {

    if (name === "") {

      Swal.fire({
        title: "Validation Error",
        text: "Please enter your name",
        icon: "error",
      });

      return;
    }

    Swal.fire({
      title: "Welcome",
      text: `Hello ${name}`,
      icon: "success",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          SweetAlert2 Demo
        </h1>

        {/* Normal Alert */}
        <div className="mb-8">

          <h2 className="text-2xl font-semibold mb-4">
            Normal Alert
          </h2>

          <button
            onClick={normalAlert}
            className="bg-black text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Normal alert()
          </button>

        </div>

        {/* SweetAlert Buttons */}
        <div className="mb-8">

          <h2 className="text-2xl font-semibold mb-4">
            SweetAlert2 Examples
          </h2>

          <div className="flex flex-wrap gap-4">

            <button
              onClick={successAlert}
              className="bg-green-500 text-white px-5 py-2 rounded-lg"
            >
              Success
            </button>

            <button
              onClick={errorAlert}
              className="bg-red-500 text-white px-5 py-2 rounded-lg"
            >
              Error
            </button>

            <button
              onClick={warningAlert}
              className="bg-yellow-500 text-white px-5 py-2 rounded-lg"
            >
              Warning
            </button>

            <button
              onClick={infoAlert}
              className="bg-blue-500 text-white px-5 py-2 rounded-lg"
            >
              Info
            </button>

            <button
              onClick={questionAlert}
              className="bg-purple-500 text-white px-5 py-2 rounded-lg"
            >
              Question
            </button>

            <button
              onClick={confirmDelete}
              className="bg-pink-500 text-white px-5 py-2 rounded-lg"
            >
              Delete
            </button>

          </div>

        </div>

        {/* Form Validation */}
        <div className="mb-8">

          <h2 className="text-2xl font-semibold mb-4">
            Form Validation Example
          </h2>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full p-3 rounded-lg mb-4"
          />

          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
          >
            Submit
          </button>

        </div>

        {/* Difference */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Difference
          </h2>

          <div className="bg-gray-100 p-5 rounded-lg">

            <p className="mb-2">
              <span className="font-bold">
                alert():
              </span>
              {" "}
              Simple browser popup
            </p>

            <p>
              <span className="font-bold">
                SweetAlert2:
              </span>
              {" "}
              Professional popup with animations,
              icons, buttons and customization
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SweetalertApp;