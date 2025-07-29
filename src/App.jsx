import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Destination, { destinationLoader } from "./Destination.jsx";
import Crew, { crewLoader } from "./Crew.jsx";
import Technology, { technologyLoader } from "./Technology.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { bg: "bg-home" },
      },
      {
        path: `destination/:planet`,
        element: <Destination />,
        loader: destinationLoader,
        handle: { bg: "bg-destination" },
      },
      {
        path: "crew/:name",
        element: <Crew />,
        loader: crewLoader,
        handle: { bg: "bg-crew" },
      },
      {
        path: "technology/:route",
        element: <Technology />,
        loader: technologyLoader,
        handle: { bg: "bg-technology" },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
