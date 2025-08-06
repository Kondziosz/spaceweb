import {
  NavLink,
  useLoaderData,
  useParams,
  useLocation,
} from "react-router-dom";
import { color, motion } from "framer-motion";
const crewMembers = {
  douglas: {
    name: "Douglas Hurley",
    image: "/image-douglas-hurley.png",
    route: "douglas",
    info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    rank: "Commander",
  },
  mark: {
    name: "Mark Shuttleworth",
    image: "/image-mark-shuttleworth.png",
    route: "mark",
    info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    rank: "Mission Specialist",
  },
  victor: {
    name: "Victor Glover",
    image: "/image-victor-glover.png",
    route: "victor",
    info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    rank: "Pilot",
  },
  anousheh: {
    name: "Anousheh Ansari",
    image: "/image-anousheh-ansari.png",
    route: "anousheh",
    info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    rank: "Flight Engineer",
  },
};

export async function crewLoader({ params }) {
  const info = crewMembers[params.name?.toLowerCase()];
  if (!info) throw new Response("Not Found", { status: 404 });
  return info;
}
const MotionNavLink = motion.create(NavLink);
function NavDots() {
  const { pathname } = useLocation();
  return (
    <nav className="w-full h-fit flex justify-center gap-200 lg:mt-auto lg:justify-start lg:pb-600 lg:gap-500">
      {Object.values(crewMembers).map((m) => 
{
        const isActive = pathname.startsWith(`/crew/${m.route}`);
        return (
          <MotionNavLink
            key={m.route}
            to={`/crew/${m.route}`}
            className="relative w-[10px] h-[10px] rounded-full bg-white opacity-[0.1744]"
            whileHover={!isActive ? { opacity: 0.5 } : undefined}
            animate={isActive ? { opacity: 1 } : { opacity: 0.1744 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
          >
            {" "}
            {isActive && (
              <span className="absolute w-full h-full rounded-full  bg-white opacity-100" />
            )}
          </MotionNavLink>
        );
      })}
    </nav>
  );
}
function Crew() 
{
  const info = useLoaderData();
  const { name } = useParams();
  return (
    <div className="gap-100 flex flex-1 overflow-hidden p-300 lg:justify-center md:p-500 lg:p-0 lg:py-600 md:gap-[8px]">
      <div className="flex flex-1 flex-col gap-300 justify-between lg:max-w-[1110px]">
        {/* meet the crew */}
        <div className="flex w-full h-fit gap-300 justify-center md:justify-start">
          <p className="tp-8b !text-[16px] md:!text-[20px] lg:!text-[28px] !tracking-[0.15em] opacity-25">
            02
          </p>
          <p className="tp-6 md:tp-5 !font-['Barlow_Condensed'] !tracking-[0.15em] lg:!tracking-[4px]">
            MEET YOUR CREW
          </p>
        </div>
        {/* crew members */}
        <div className="flex flex-col flex-1 gap-400 min-h-0 md:min-h-[auto] lg:min-h-0 lg:min-w-0 md:items-center lg:flex-row">
          {/* text */}
          <div className="flex flex-col h-fit w-full gap-500 max-w-[514px] justify-between lg:min-w-[445px] lg:flex-1 lg:h-full">
            <motion.div
              className="flex flex-col w-full h-fit gap-300 pt-500 lg:flex-1 lg:max-w-[640px] lg:p-0 lg:justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-300 max-w-[640px] w-full h-fit justify-start">
                {/*rank and name */}
                <div className="flex flex-col w-full h-fit gap-100 items-center lg:items-start">
                  <p className="tp-4 uppercase opacity-50 !tracking-[0]">
                    {info.rank}
                  </p>
                  <p className="tp-3 uppercase">{info.name}</p>
                </div>
                {/* description */}
                <p className="tp-9 text-[#D0D6F9] text-center lg:text-left">
                  {info.info}
                </p>
              </div>
            </motion.div>
            {/* NavDots */}
            <NavDots />
          </div>
          {/*image */}
          <motion.div
            className="flex flex-1 min-h-0 md:min-h-[auto] lg:min-h-0 lg:min-w-0 px-[27.88px] py-[5px] lg:py-[29px] justify-center items-center lg:h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              className="max-h-full h-auto w-auto max-w-full object-contain   [-webkit-mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_60%,rgba(255,255,255,0)_100%)]  lg:[-webkit-mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_60%,rgba(255,255,255,0)_100%)] md:p-0"
              src={info.image}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Crew;
