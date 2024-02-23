import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useGetRequest } from "../../hooks/fetcher";
import schema from "../../utils/schema";
import { Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const ref = useRef(null);
  const MIN_SCALE_VAR = 4;
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigate = useNavigate();
  // const { data: clubData } = useGetRequest(schema.queries.club.all);
  // const { data: eventData } = useGetRequest(schema.queries.event.all);
  const { data: clubAndEventData, isLoading } = useGetRequest(
    schema.queries.allEventsAndClubs
  );

  clubAndEventData?.AllClubs?.data?.forEach((club) => {
    club.cards = clubAndEventData?.AllEvents?.data?.filter(
      (event) => event.club === club._id
    );
  });

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 4900) {
      window.scrollTo(0, 0);
    }
  }, [scrollPosition]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#cards",
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: true,
        },
      });

      tl.to("#abhisarga", {
        opacity: 0,
      });

      clubAndEventData?.AllClubs?.data?.forEach((club, index) => {
        tl.to(
          `#club-${club._id}`,
          {
            opacity: 1,
            scale: 1,
            ease: "power2.inOut",
          },
          "<"
        );

        tl.to(`#club-heading-${club._id}`, {
          opacity: 0,
          scale: 0,
          ease: "power2.inOut",
        });

        club?.cards?.forEach((card, index) => {
          const direction = index % 2 === 0 ? "left" : "right";
          tl.to(
            `#card-${card._id}`,
            {
              opacity: 1,
              scale: 15,
              [direction]: "25%",
            },
            "<"
          );
          tl.to(`#card-${card._id}`, {
            opacity: 0,
            scale: 20,
            [direction]: "15%",
          });
        });

        tl.to(
          `#club-${club._id}`,
          {
            zIndex:
              (clubAndEventData?.AllClubs?.data?.length - (index + 1)) * -1,
          },
          "<"
        );
      });

      tl.to("#abhisarga", {
        opacity: 1,
      });
    },
    { scope: ref, dependencies: [isLoading] }
  );

  return (
    <>
      <div id="root" ref={ref}>
        <div
          id="cards"
          className="min-h-screen relative bg-gradient-to-b from-color1 to-color3"
        >
          <div
            className="absolute h-screen w-screen flex items-center justify-center -z-10"
            id="abhisarga"
          >
            <h1 className="text-8xl font-extrabold">
              <img src="/Logos/AbhisargaLogo.png" alt="Abhisarga" />
            </h1>
          </div>
          {clubAndEventData?.AllClubs?.data?.map((club, index) => (
            <div
              key={club._id}
              id={`club-${club._id}`}
              className="flex items-center min-h-screen absolute opacity-0 min-w-[100vw]"
              style={{
                transform: "scale(0.5)",
                zIndex: clubAndEventData?.AllClubs?.data?.length - (index + 1),
              }}
            >
              <h1
                id={`club-heading-${club._id}`}
                className="text-7xl text-color2 font-extrabold rounded-sm py-6 px-12 m-auto z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                {club.name}
              </h1>
              {club?.cards?.map((card, index) => {
                return (
                  <div
                    key={card._id}
                    id={`card-${card._id}`}
                    className={`items-center justify-center w-10 h-10 absolute flex rounded-sm ${
                      index % 2 === 0
                        ? "left-1/3 bg-pink-500"
                        : "right-1/3 bg-blue-500"
                    }`}
                    style={{
                      transform: `scale(${
                        (MIN_SCALE_VAR - (index + 1)) * 3 + 2
                      })`,
                      zIndex: club?.cards?.length - (index + 1),
                    }}
                  >
                    <Link onClick={() => navigate(`/event/${card._id}`)}>
                      <img
                        src={`/posters/${card.poster}`}
                        alt="img"
                        className="p-[0.1px] rounded-sm"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;