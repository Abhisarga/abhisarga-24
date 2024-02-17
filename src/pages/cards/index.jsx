import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const ref = useRef();
  const TOTAL_CARDS_PER_CLUB = 4;

  const [scrollPosition, setScrollPosition] = useState(0);
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

  const data = [
    {
      clubName: "club1",
      id: 1,
      cards: [
        {
          id: 1,
          image: "https://source.unsplash.com/random/200x200",
          number: 1,
        },
        {
          id: 2,
          image: "https://source.unsplash.com/random/200x200",
          number: 2,
        },
        // {
        //   id: 3,
        //   image: "https://source.unsplash.com/random/200x200",
        //   number: 3,
        // },
        // {
        //   id: 4,
        //   image: "https://source.unsplash.com/random/200x200",
        //   number: 4,
        // },
      ],
    },
    {
      clubName: "club2",
      id: 2,
      cards: [
        {
          id: 5,
          image: "https://source.unsplash.com/random/200x200",
          number: 1,
        },
        {
          id: 6,
          image: "https://source.unsplash.com/random/200x200",
          number: 2,
        },
        {
          id: 7,
          image: "https://source.unsplash.com/random/200x200",
          number: 3,
        },
        {
          id: 8,
          image: "https://source.unsplash.com/random/200x200",
          number: 4,
        },
      ],
    },
  ];

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

      data.forEach((club) => {
        tl.to(`#club-${club.id}`, {
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
        });

        tl.to(`#club-heading-${club.id}`, {
          opacity: 0,
          scale: 0,
          ease: "power2.inOut",
        });

        club.cards.forEach((card) => {
          const direction = card.number % 2 === 0 ? "right" : "left";
          tl.to(
            `#card-${card.id}`,
            {
              opacity: 1,
              scale: 15,
              [direction]: "25%",
            },
            "<"
          );
          tl.to(`#card-${card.id}`, {
            opacity: 0,
            scale: 20,
            [direction]: "15%",
          });
        });
      });
    },
    { scope: ref }
  );

  return (
    <div id="root" ref={ref}>
      <div
        id="cards"
        className="min-h-screen relative bg-gradient-to-b from-black to-color1"
      >
        {data.map((club) => (
          <div
            key={club.id}
            id={`club-${club.id}`}
            className="flex items-center min-h-screen absolute opacity-0 min-w-[100vw]"
            style={{ transform: "scale(0.5)" }}
          >
            <h1
              id={`club-heading-${club.id}`}
              className="text-7xl text-color2 font-extrabold rounded-sm py-6 px-12 m-auto z-10"
            >
              {club.clubName}
            </h1>
            {club.cards.map((card, index) => {
              return (
                <div
                  key={card.id}
                  id={`card-${card.id}`}
                  className={`items-center justify-center w-10 h-10 absolute flex rounded-sm ${
                    card.id % 2 !== 0
                      ? "card-left left-1/3 bg-green-400"
                      : "card-right right-1/3 bg-red-400"
                  }`}
                  style={{
                    transform: `scale(${
                      (TOTAL_CARDS_PER_CLUB - (index + 1)) * 3 + 2
                    })`,
                    zIndex: TOTAL_CARDS_PER_CLUB - (index + 1),
                  }}
                >
                  <img
                    src={card.image}
                    alt="img"
                    className="p-[0.1px] rounded-sm"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
