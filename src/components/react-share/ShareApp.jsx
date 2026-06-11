import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

function ShareApp() {
  const shareUrl = "https://my-react-app.com";

  const title =
    "Check out this amazing React application!";

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          React Share Demo
        </h1>

        {/* What is react-share */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            What is react-share?
          </h2>

          <p>
            A React library that provides ready-made
            social media share buttons.
          </p>

        </div>

        {/* Installation */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            How to Install
          </h2>

          <div className="bg-black text-green-400 p-4 rounded-lg">
            npm install react-share
          </div>

        </div>

        {/* Where to Use */}
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            Where to Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Blogs</li>
            <li>News Articles</li>
            <li>Product Pages</li>
            <li>Course Platforms</li>
            <li>Portfolio Websites</li>
            <li>Event Pages</li>
          </ul>

        </div>

        {/* Example Content */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">

          <h2 className="text-2xl font-bold mb-4">
            Article Preview
          </h2>

          <p>
            Learn React from beginner to advanced level
            with practical projects and examples.
          </p>

        </div>

        {/* Share Buttons */}
        <div>

          <h2 className="text-2xl font-bold mb-4">
            Share This Page
          </h2>

          <div className="flex flex-wrap gap-4">

            <FacebookShareButton
              url={shareUrl}
              quote={title}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>

            <TwitterShareButton
              url={shareUrl}
              title={title}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>

            <LinkedinShareButton
              url={shareUrl}
              title={title}
            >
              <LinkedinIcon size={50} round />
            </LinkedinShareButton>

            <WhatsappShareButton
              url={shareUrl}
              title={title}
            >
              <WhatsappIcon size={50} round />
            </WhatsappShareButton>

            <TelegramShareButton
              url={shareUrl}
              title={title}
            >
              <TelegramIcon size={50} round />
            </TelegramShareButton>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ShareApp;