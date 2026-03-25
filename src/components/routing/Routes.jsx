import { createBrowserRouter } from "react-router-dom";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Footwear from "./Footwear";
import RouteApp from "./RouteApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteApp />,
    children: [
      { index: true, element: <Electronics /> },

      {
        path: "fashion",
        element: <Fashion />,
        children: [
          { path: "footwear", element: <Footwear /> },
          { path: "footwear/:id", element: <Footwear /> }
        ]
      }
    ]
  }
]);

export default router;