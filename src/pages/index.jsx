import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useGetRequest } from "../hooks/fetcher";
import schema from "../utils/schema";
import { Link } from "@nextui-org/react";
import { useLocation, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const MIN_SCALE_VAR = 4;

const Cards = () => {
  const ref = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  const navigate = useNavigate();
  const { data: clubAndEventData, isLoading } = useGetRequest(
    schema.queries.allEventsAndClubs
  );

  clubAndEventData?.AllClubs?.data?.forEach((club) => {
    club.cards = clubAndEventData?.AllEvents?.data?.filter(
      (event) => event.club === club._id
    );
    club.cards.push({
      _id: club._id,
      isClub: true,
      poster: club.logo,
    });
  });

  console.log("data", clubAndEventData?.AllClubs?.data);

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
    if (scrollPosition > 9900) {
      window.scrollTo(0, 0);
    }
  }, [scrollPosition]);

  useEffect(() => {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#cards",
          start: "top top",
          end: "+=10000",
          pin: true,
          scrub: true,
        },
      });

      tl.to("#abhisarga", {
        opacity: 0,
      });

      tl.to("#events-text", {
        opacity: 1,
        scale: 1.5,
      });

      tl.to("#events-text", {
        opacity: 0,
        scale: 0,
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
            zIndex: (club?.cards?.length - (index + 1)) * -1,
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

      // scroller
      gsap.to("#scroller", {
        y: -60,
        opacity: 0,
        duration: 1,
        repeat: -1,
        repeatDelay: 3,
      });
    },
    { scope: ref, dependencies: [isLoading] }
  );

  return (
    <>
      <div id="root" ref={ref}>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="fixed right-0 top-0 w-screen bg-cover"
        >
          <source src="/the_background_-_22126 (720p).mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div id="cards" className="min-h-screen relative">
          <div
            className="absolute h-screen w-screen flex items-center justify-center -z-10"
            id="abhisarga"
          >
            <h1 className="text-8xl font-extrabold">
              <img src="/Logos/AbhisargaLogo.png" alt="Abhisarga" />
            </h1>
            <div
              id="scroller"
              className="fixed bottom-0 left-1/2 z-10 text-center text-color1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11 m-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <p className="font-bold">Scroll up</p>
            </div>
          </div>
          <div
            className="absolute h-screen w-screen flex items-center justify-center -z-10 opacity-0"
            id="events-text"
          >
            <h1 className="text-7xl font-extrabold text-color1">EVENTS</h1>
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
                    className={`items-center justify-center w-10 h-auto absolute flex rounded-sm ${
                      index % 2 === 0
                        ? "left-1/3 bg-orange-400"
                        : "right-1/3 bg-yellow-300"
                    }`}
                    style={{
                      transform: `scale(${
                        (MIN_SCALE_VAR - (index + 1)) * 3 + 2
                      })`,
                      zIndex: club?.cards?.length - (index + 1),
                    }}
                  >
                    <Link
                      onClick={() =>
                        navigate(
                          card?.isClub
                            ? `/details/${card._id}`
                            : `/event/${card._id}`
                        )
                      }
                    >
                      <img
                        src={
                          card?.isClub
                            ? `/Logos/${card.poster}`
                            : `/posters/${card.poster}`
                        }
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