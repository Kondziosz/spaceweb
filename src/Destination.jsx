import {
  NavLink,
  useLoaderData,
  useParams,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, color, motion } from "framer-motion";
const planets = {
  moon: {
    name: "Moon",
    image: "/image-moon.png",
    route: "moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travel: "3 DAYS",
  },
  mars: {
    name: "Mars",
    image: "/image-mars.png",
    route: "mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travel: "9 MONTHS",
  },
  europa: {
    name: "Europa",
    image: "/image-europa.png",
    route: "europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travel: "3 YEARS",
  },
  titan: {
    name: "Titan",
    image: "/image-titan.png",
    route: "titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travel: "7 YEARS",
  },
};

export async function destinationLoader({ params }) {
  const info = planets[params.planet?.toLowerCase()];
  if (!info) throw new Response("Not Found", { status: 404 });
  return info;
}

const MotionNavLink = motion.create(NavLink);

function NavLinkPlanet() {
  const { pathname } = useLocation();
  return (
    <nav className="flex flex-none h-fit gap-400 justify-center">
      {Object.values(planets).map((p) => 
{
        const isActive = pathname.startsWith(`/destination/${p.route}`);
        return (
          <MotionNavLink
            key={p.route}
            to={`/destination/${p.route}`}
            className={`relative h-[32px] w-fit border-b-[3px] border-b-transparent`}
            animate={
              isActive
                ? { borderBottomColor: "rgba(255,255,255,1)" }
                : { borderBottomColor: "rgba(255,255,255,0)" }
            }
            whileHover={
              !isActive
                ? { borderBottomColor: "rgba(255,255,255,0.5)" }
                : undefined
            }
            transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
          >
            <div className="h-fit w-fit">
              <p className="tp-8 text-[#D0D6F9] uppercase">{p.name}</p>
            </div>
          </MotionNavLink>
        );
      })}
    </nav>
  );
}

function Destination() {
  const info = useLoaderData();
  const { planet } = useParams();

  return (
    <>
      <div className="gap-100 flex flex-1 overflow-auto p-300 lg:justify-center md:p-500 lg:p-0 lg:py-600">
        <div className="flex flex-1 flex-col gap-300 justify-between lg:max-w-[1110px]">
          <div className="flex w-full h-fit gap-300 justify-center py-[1px] md:justify-start">
            <p className="tp-8b !text-[16px] md:!text-[20px] lg:!text-[28px] !leading-[1] !tracking-[0.15em] opacity-25  ">
              01
            </p>
            <p className="tp-6 md:tp-5 !font-['Barlow_Condensed'] !leading-[1] !tracking-[0.15em]  ">
              PICK YOUR DESTINATION
            </p>
          </div>
          <motion.div
            className="flex flex-col gap-400 min-h-0 flex-1 lg:flex-row lg:justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-center flex-shrink-[10] h-full min-h-0 lg:flex-shrink-0">
              <img
                src={info.image}
                className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px]  max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex gap-500 flex-shrink-0 min-h-0 md:min-w-[445px] md:w-full md:justify-center lg:flex-1 lg:justify-center lg:items-center">
              <div className="flex flex-1 flex-col max-w-[514px] gap-300 flex-shrink-0 lg:flex-1 lg:items-start">
                <NavLinkPlanet />
                <div className="flex w-full flex-col h-fit gap-200 items-center lg:items-start">
                  <p className="tp-2 uppercase">{info.name}</p>
                  <p className="tp-9 text-center lg:text-start text-[#D0D6F9]">
                    {info.description}
                  </p>
                </div>
                <div className="w-full h-[1px] opacity-25 bg-white" />
                <div className="flex flex-col w-full h-fit gap-300 items-center justify-between md:flex-row">
                  <div className="flex flex-col w-full h-fit gap-[12px] items-center lg:items-start">
                    <p className="tp-7 text-[#D0D6F9]">AVG. DISTANCE</p>
                    <p className="tp-6 !text-[28px]">{info.distance}</p>
                  </div>
                  <div className="flex flex-col w-full h-fit gap-[12px] items-center">
                    <p className="tp-7 text-[#D0D6F9]">EST. TRAVEL TIME</p>
                    <p className="tp-6 !text-[28px]">{info.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default Destination;

/* <div className="flex flex-none h-fit gap-400 justify-center">
									<div className="h-[32px] w-fit border-b-[3px]"><div className="h-fit w-fit"><p className="tp-8">MOON</p></div></div>
									<div className="h-[32px] w-fit "><div className="h-fit w-fit"><p className="tp-8 text-[#D0D6F9]">MARS</p></div></div>
									<div className="h-[32px] w-fit "><div className="h-fit w-fit"><p className="tp-8 text-[#D0D6F9]">EUROPA</p></div></div>
									<div className="h-[32px] w-fit "><div className="h-fit w-fit"><p className="tp-8 text-[#D0D6F9]">TITAN</p></div></div>
							</div>) */
