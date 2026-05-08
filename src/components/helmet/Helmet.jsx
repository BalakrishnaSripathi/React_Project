import { Helmet } from "react-helmet";

export default function HelmetHome() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="My React App" />
      </Helmet>

      <h1>Home</h1>
    </>
  );
}