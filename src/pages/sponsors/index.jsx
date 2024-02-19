import {
  Card,
  CardFooter,
  Image,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import logo from "../../assets/SponsorLogos/logo.png";
import Header from "../../components/Header";

const PlatinumSponsorCards = [
  {
    photo: logo,
    title: "Title",
  },
  {
    photo: logo,
    title: "Title",
  },
  {
    photo: logo,
    title: "Title",
  },
  {
    photo: logo,
    title: "Title",
  },
];

const SponsorCard = ({ photo, title }) => {
  return (
    <div className={`sponsor-card`}>
      <Card className="py-4" style={{width:"300px"}}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Sponsor Title</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={logo}
            height={300}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default function Sponsors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % PlatinumSponsorCards.length
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <Header/>
      <section className="container mx-auto mt-8 flex justify-center items-center">
        <div>
          <h1 className="text-4xl justify-center items-center">
            Abhisarga'24 <br /> Sponsors
          </h1>{" "}
        </div>
        <div className="bg-white p-8 mt-4 rounded-md m-12 flex justify-end ml-40 flex-col items-center gap-2 padding-20 bg-color:#fff">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Sponsor Title</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={logo}
                width={270}
              />
            </CardBody>
          </Card>
          <h1 className="text-4xl font-bold justify-center items-center">
            Title Sponsor
          </h1>
        </div>
      </section>
      <section className="container mx-auto mt-8 flex justify-center items-center flex flex-col gap-4">
        <div className="flex flex-row justify-center items-center gap-2 cards overflowx-scroll w-70">
          {PlatinumSponsorCards.map((card, index) => (
            <SponsorCard key={index} photo={card.photo} title={card.title} />
          ))}
        </div>
        <h1 className="text-4xl font-bold justify-center items-center">
          Platinum Sponsors
        </h1>
      </section>
      <section className="container mx-auto mt-8 flex justify-center items-center flex flex-col gap-4">
        <div className="flex flex-row justify-center items-center gap-2 cards overflowx-scroll w-70">
          {PlatinumSponsorCards.map((card, index) => (
            <SponsorCard key={index} photo={card.photo} title={card.title} />
          ))}
        </div>
        <h1 className="text-4xl font-bold justify-center items-center">
          Gold Sponsors
        </h1>
      </section>
      <section className="container mx-auto mt-8 flex justify-center items-center flex flex-col gap-4">
        <div className="flex flex-row justify-center items-center gap-2 cards overflowx-scroll w-70">
          {PlatinumSponsorCards.map((card, index) => (
            <SponsorCard key={index} photo={card.photo} title={card.title} />
          ))}
        </div>
        <h1 className="text-4xl font-bold justify-center items-center">
          Silver Sponsors
        </h1>
      </section>
    </>
  );
}