import Navbar from "./Navbar.jsx";
import { Outlet, useMatches, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();
  const matches = useMatches();
  useEffect(() => {
    console.log("Rendered:", location.pathname);
  }, [location.pathname]);
  const bgClass = matches
    .slice()
    .reverse()
    .find((m) => m.handle?.bg)?.handle.bg;
  return (
    <div
      className={`w-full max-w-none h-screen ${bgClass} touch-none flex flex-col overflow-hidden`}
    >
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          className="flex flex-col overflow-hidden w-full h-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Layout;
