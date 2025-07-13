import Navbar from "./Navbar.jsx"
import { Outlet, useMatches } from "react-router-dom"

function Layout()
{
	const matches = useMatches();
	const bgClass = matches.slice().reverse().find(m => m.handle?.bg)?.handle.bg
	return (
		<div className={`w-full max-w-none min-h-screen h-screen ${bgClass} touch-none flex flex-col overflow-hidden`}>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Layout
