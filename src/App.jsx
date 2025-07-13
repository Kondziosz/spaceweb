
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./Home.jsx"
import Moon from "./Moon.jsx"

const router = createBrowserRouter([
		{
		 element: <Layout />,
		 children: [
			{
		 		index: true,
      	element: <Home />,
				handle: {bg: "bg-home"}
		 	},
		 	{
				path: "moon",
				element: <Moon />,
				handle: {bg: "bg-destination"}
		 	}]
		}]);

function App()
{
	return 	<RouterProvider router={router} />
}
export default App
