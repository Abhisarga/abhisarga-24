import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useGetRequest } from "../../hooks/fetcher";
import schema from "../../utils/schema";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
    const ref = useRef(null);
    const MIN_SCALE_VAR = 4;
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    // const { data: clubData } = useGetRequest(schema.queries.club.all);
    // const { data: eventData } = useGetRequest(schema.queries.event.all);
    const { data: clubAndEventData } = useGetRequest(schema.queries.allEventsAndClubs)
    console.log(clubAndEventData)

    
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
            clubName: "Hey, there!",
            id: 1,
            cards: [
                {
                    id: 1,
                    image: "https://source.unsplash.com/random/200x200",
                },
                {
                    id: 2,
                    image: "https://source.unsplash.com/random/200x200",
                },
            ],
        },
        {
            clubName: "club2",
            id: 2,
            cards: [
                {
                    id: 5,
                    image: "https://source.unsplash.com/random/200x200",
                },
                {
                    id: 6,
                    image: "https://source.unsplash.com/random/200x200",
                },
                {
                    id: 7,
                    image: "https://source.unsplash.com/random/200x200",
                },
                {
                    id: 8,
                    image: "https://source.unsplash.com/random/200x200",
                },
                {
                    id: 9,
                    image: "https://source.unsplash.com/random/200x200",
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

                club.cards.forEach((card, index) => {
                    const direction = index % 2 === 0 ? "left" : "right";
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
                className="min-h-screen relative bg-gradient-to-b from-black to-gray-800"
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
                                    className={`items-center justify-center w-10 h-10 absolute flex rounded-sm ${index % 2 === 0
                                        ? "left-1/3 bg-pink-500"
                                        : "right-1/3 bg-blue-500"
                                        }`}
                                    style={{
                                        transform: `scale(${(MIN_SCALE_VAR - (index + 1)) * 3 + 2
                                            })`,
                                        zIndex: club.cards.length - (index + 1),
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
