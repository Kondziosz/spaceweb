import {
  NavLink,
  useLoaderData,
  useParams,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";

const technologyData = {
  launch: {
    route: "launch",
    name: "Launch Vehicle",
    image: "/image-launch-vehicle-portrait.jpg",
    info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    route: "spaceport",
    name: "Spaceport",
    image: "/image-spaceport-portrait.jpg",
    info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  capsule: {
    route: "capsule",
    name: "Space Capsule",
    image: "/image-space-capsule-portrait.jpg",
    info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

export async function technologyLoader({ params })
{
  const info = technologyData[params.route?.toLowerCase()];
  if (!info) throw new Response("Not Found", { status: 404 });
  return info;
}
function NavDots() {
  const { pathname } = useLocation();
  return (
    <nav className="max-w-[514px] gap-200 flex flex-1 justify-center lg:flex-col lg:gap-400">
      {Object.values(technologyData).map((t, index) => {
        const isActive = pathname.startsWith(`/technology/${t.route}`);
        return (
          <NavLink
            key={t.route}
            to={`/technology/${t.route}`}
            className={`w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] tp-4  rounded-full z-10 flex flex-row items-center justify-center text-center ${isActive ? "text-black bg-white" : "text-white bg-transparent "} border-[1px] border-white border-opacity-25 hover:border-opacity-100 transition-all
             duration-300 ease-in-out`}
          >
            <span className="flex items-center justify-center text-center w-fit h-fit !tracking-[0px] mx-auto">
              {index + 1}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}

function Technology() {
  const info = useLoaderData();
  const { route } = useParams();
  return (
    <div className="flex flex-col overflow-hidden h-full p-300 md:p-500 gap-100 w-full lg:p-0 lg:py-600 lg:items-end">
      <div className="flex gap-300 h-full flex-col items-center lg:max-w-[88.5vw] ">
        {/* title */}
        <div className="flex w-full h-fit gap-300 justify-center md:justify-start ">
          <p className="tp-8b !text-[16px] md:!text-[20px] lg:!text-[28px] !tracking-[0.15em] opacity-25">
            03
          </p>
          <p className="tp-6 md:tp-5 !font-['Barlow_Condensed'] !tracking-[0.15em] lg:!tracking-[4px]">
            SPACE LAUNCH 101
          </p>
        </div>
        {/* content */}
        <div className="gap-400 flex flex-col w-full h-full min-h-0 items-center lg:flex-row-reverse lg:min-w-0">
          {/* Image */}
          <motion.div className="flex w-full md:w-[100vw] flex-1 relative pt-[64px] overflow-hidden justify-center lg:justify-end min-h-0 min-w-[768px] lg:pt-0 lg:!h-full lg:min-w-0 " initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}>
            <img
              src={info.image}
              className=" w-[100vw] h-auto lg:!w-auto lg:!h-full object-cover object-bottom md:object-center"
            ></img>
          </motion.div>
          {/* Text and Pagination */}
          <div className=" gap-500 flex flex-col w-full h-fit justify-center md:items-center lg:flex-row lg:min-w-[635px] lg:gap-800 lg:flex-1">
            {/* Pagination */}
            <NavDots />
            {/* Text */}
            <motion.div className="flex-col flex h-fit w-full gap-200 max-w-[514px] md:justify-between lg:max-w-[640px] lg:gap-300 lg:items-start" initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}>
              {/* Rank and Name */}
              <div className="flex flex-col w-full h-fit gap-200 items-center lg:items-start ">
                <p className="tp-4 uppercase opacity-50 !tracking-[0]">
                  THE TERMINOLOGY…
                </p>
                <p className="tp-3 uppercase">{info.name}</p>
              </div>
              <p className="tp-9 text-center lg:text-left text-[#D0D6F9]">
                {info.info}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Technology;
