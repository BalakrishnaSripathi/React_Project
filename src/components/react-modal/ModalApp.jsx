import { useState } from "react";
import Modal from "react-modal";

// Important:
// Connects modal with root element
// Helps accessibility and removes browser warning
Modal.setAppElement("#root");

export default function ModalApp() {

  // Hook
  // Stores modal open/close state
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Open Modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      {/* Main Card */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          React Modal Example
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Popup using react-modal package
        </p>

        {/* Install Command */}
        <div className="bg-black text-green-400 p-4 rounded-lg mb-5 overflow-auto">
          <p className="font-bold mb-2">Install:</p>

          <code>
            npm install react-modal
          </code>
        </div>

        {/* Import */}
        <div className="bg-gray-100 p-4 rounded-lg mb-5 overflow-auto">
          <p className="font-bold mb-2">Import:</p>

          <code>
            import Modal from "react-modal";
          </code>
        </div>

        {/* Important Usage */}
        <div className="bg-blue-50 p-4 rounded-lg mb-5">
          <h2 className="font-bold text-lg mb-3 text-blue-700">
            Why use react-modal?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Login Popup</li>
            <li>• Signup Form</li>
            <li>• Delete Confirmation</li>
            <li>• Product Preview</li>
            <li>• Dashboard Popup</li>
            <li>• Payment Success Message</li>
          </ul>
        </div>

        {/* Hook Explanation */}
        <div className="bg-green-50 p-4 rounded-lg mb-5">
          <h2 className="font-bold text-lg mb-3 text-green-700">
            Hook Used
          </h2>

          <code className="block mb-3">
            const [modalIsOpen, setModalIsOpen] = useState(false)
          </code>

          <p className="text-gray-700">
            useState hook stores modal open and close state.
          </p>

          <div className="mt-3">
            <span className="font-bold">Current State :</span>

            <span className="ml-2 text-blue-600 font-bold">
              {modalIsOpen ? "Opened" : "Closed"}
            </span>
          </div>
        </div>

        {/* Browser Output Explanation */}
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <h2 className="font-bold text-lg mb-3 text-yellow-700">
            Browser Output Flow
          </h2>

          <div className="text-gray-700 space-y-2">
            <p>1. Click Open Modal Button</p>
            <p>2. Background becomes dark</p>
            <p>3. Popup appears center screen</p>
            <p>4. Click Close Button or ESC key</p>
            <p>5. Modal closes</p>
          </div>
        </div>

        {/* Open Button */}
        <button
          onClick={openModal}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Open Modal
        </button>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}

          // Close when ESC or outside click
          onRequestClose={closeModal}

          contentLabel="Example Modal"

          // Modal Design
          className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto mt-40 outline-none"

          // Background Overlay
          overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-start"
        >

          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Modal Opened
          </h2>

          <p className="text-gray-700 mb-5">
            This popup is displayed using react-modal package.
          </p>

          {/* Important Props */}
          <div className="bg-gray-100 p-4 rounded-lg mb-5">
            <h3 className="font-bold mb-3">
              Important Props
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-bold">isOpen :</span>
                Opens or closes modal
              </li>

              <li>
                <span className="font-bold">onRequestClose :</span>
                Closes on ESC/outside click
              </li>

              <li>
                <span className="font-bold">className :</span>
                Styles modal box
              </li>

              <li>
                <span className="font-bold">overlayClassName :</span>
                Styles background overlay
              </li>
            </ul>
          </div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Close Modal
          </button>

        </Modal>

      </div>

    </div>
  );
}