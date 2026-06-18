import { useState } from "react";
import ReactStars from "react-rating-stars-component";

function ReactratingApp() {
  const [rating, setRating] = useState(2);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Product Rating Demo
        </h1>

        {/* What is react-rating-stars-component */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            What is react-rating-stars-component?
          </h2>

          <p>
            A React library used to create interactive
            star rating systems for products, courses,
            movies, and reviews.
          </p>
        </div>

        {/* Installation */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-rating-stars-component
          </div>
        </div>

        {/* Product Card */}
        <div className="bg-gray-50 p-6 rounded-lg border">

          <h2 className="text-2xl font-bold mb-2">
            React Course
          </h2>

          <p className="text-gray-600 mb-4">
            Complete React.js Course for Beginners
          </p>

          <div className="mb-4">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={35}
              activeColor="#ffd700"
            />
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-bold">
              Your Rating:
            </h3>

            <p className="text-xl text-blue-600">
              {rating} / 5 ⭐
            </p>
          </div>

        </div>

        {/* Usage */}
        <div className="bg-yellow-50 p-6 rounded-lg mt-6">
          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Product Reviews</li>
            <li>Course Ratings</li>
            <li>Movie Reviews</li>
            <li>Restaurant Feedback</li>
            <li>Hotel Ratings</li>
            <li>Customer Surveys</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default ReactratingApp;