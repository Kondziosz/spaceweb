import { NavLink, useLocation } from "react-router-dom";
import { color, motion } from "framer-motion";

const MotionNavLink = motion.create(NavLink);
function Navbar() {
  const { pathname } = useLocation();
  const isActive = (path) => pathname.startsWith(path);
  return (
    <div className="flex justify-between md:justify-normal items-center shrink-0 py-300 md:py-0 lg:pt-500 md:h-fit ">
      <div className="flex items-center pl-300 lg:pl-800  gap-800 md:max-w-[160px] md:px-[40px] lg:px-0 md:shrink-0 md:gap-[64px] lg:flex-1  lg:max-w-none">
        <img src="/logo.svg" className="h-[40px] md:h-[48px] " />
        <div className="min-w-[560px] h-[1px] opacity-25 bg-white hidden lg:block z-10" />
      </div>
      <div className="flex-1 h-full md:hidden flex justify-end pr-300 gap-100 items-center">
        <img src="/icon-hamburger.svg" className=" h-[21px] " />
      </div>
      <nav className="hidden md:flex justify-end gap-600 lg:px-800 min-w-[664px] w-full h-max bg-[rgba(255,255,255,0.05)] backdrop-blur-[8px] ml-auto md:min-w-[488px] md:px-500">
        <MotionNavLink
          to="/"
          end
          className={`relative gap-100 h-[96px] flex border-b-[3px] border-b-transparent `}
          animate={
            pathname === "/"
              ? { borderBottomColor: "rgba(255,255,255,1)" }
              : { borderBottomColor: "rgba(255,255,255,0)" }
          }
          whileHover={
            pathname === "/"
              ? undefined
              : { borderBottomColor: "rgba(255,255,255,0.5)" }
          }
          transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
        >
          <div className="gap-100 w-auto flex flex-row items-center	">
            <p className="tp-8b !tracking-[2.7px]">00</p>
            <p className="tp-8 !tracking-[2px]">HOME</p>
          </div>
        </MotionNavLink>
        <MotionNavLink
          to="/destination/moon"
          className={`relative gap-100 h-[96px] flex border-b-[3px] border-b-transparent`}
          animate={
            isActive("/destination")
              ? { borderBottomColor: "rgba(255,255,255,1)" }
              : { borderBottomColor: "rgba(255,255,255,0)" }
          }
          whileHover={
            pathname.startsWith("/destination")
              ? undefined
              : { borderBottomColor: "rgba(255,255,255,0.5)" }
          }
          transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
        >
          <div className="gap-150 w-auto flex flex-row items-center">
            <p className="tp-8b !tracking-[2.7px]">01</p>
            <p className="tp-8 !tracking-[2px]">DESTINATION</p>
          </div>
        </MotionNavLink>
        <MotionNavLink
          to="/crew/douglas"
          className={`relative gap-100 h-[96px] flex border-b-[3px] border-b-transparent`}
          animate={
            isActive("/crew")
              ? { borderBottomColor: "rgba(255,255,255,1)" }
              : { borderBottomColor: "rgba(255,255,255,0)" }
          }
          whileHover={
            pathname.startsWith("/crew")
              ? undefined
              : { borderBottomColor: "rgba(255,255,255,0.5)" }
          }
          transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
        >
          <div className="gap-150 w-auto flex flex-row items-center">
            <p className="tp-8b !tracking-[2.7px]">02</p>
            <p className="tp-8 !tracking-[2px]">CREW</p>
          </div>
        </MotionNavLink>
        <MotionNavLink
          to="/technology/launch"
          className="relative gap-100 h-[96px] flex border-b-[3px] border-b-transparent"
          animate={
            isActive("/technology")
              ? { borderBottomColor: "rgba(255,255,255,1)" }
              : { borderBottomColor: "rgba(255,255,255,0)" }
          }
          whileHover={
            pathname.startsWith("/technology")
              ? undefined
              : { borderBottomColor: "rgba(255,255,255,0.5)" }
          }
          transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
        >
          <div className="gap-150 w-auto flex flex-row items-center">
            <p className="tp-8b !tracking-[2.7px]">03</p>
            <p className="tp-8 !tracking-[2px]">TECHNOLOGY</p>
          </div>
        </MotionNavLink>
      </nav>
    </div>
  );
}
export default Navbar;
