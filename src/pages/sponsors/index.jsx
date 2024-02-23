import {
  Card,
  CardFooter,
  Image,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import logo from "../../assets/SponsorLogos/logo.png";

import { SimpleGrid } from "@chakra-ui/react";

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
  }
];

const GoldSponsorCards = [
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
  }
]

const SilverponsorCards = [
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
  }
]

const SponsorCard = ({ photo, title }) => {
  return (
    <div className={`sponsor-card`}>
      <Card className="py-4">
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

  return (
    <>
      <section className="container mx-auto mt-8 flex justify-center items-center flex-wrap">
        <div>
          <h1 className="text-4xl justify-center items-center">
            Abhisarga'24 <br /> Sponsors
          </h1>{" "}
        </div>
        <div className="bg-white p-8 mt-4 rounded-md m-12 flex justify-end ml-40 flex-col items-center gap-2 padding-20 bg-[#eeebe5] rounded-md">
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
      <section className="container mx-auto mt-8 flex justify-center items-center flex flex-col gap-4 w-full">
      <div className="bg-gray-100 p-8 items-center flex flex-col bg-[#eeebe5]">
        <SimpleGrid
          spacing={4}
          columns={{ base: 1, md: 4 }}
          className="w-full"
        >
          {PlatinumSponsorCards.map((card, index) => (
            <SponsorCard key={index} photo={card.photo} title={card.title} />
          ))}
        </SimpleGrid>
        <h1 className="text-4xl font-bold justify-center items-center mt-4">
          Platinum Sponsors
        </h1>
      </div>
      </section>
      <section className="container mx-auto mt-8 flex justify-center items-center flex flex-col gap-4 w-full">
      <div className="bg-gray-100 p-8 items-center flex flex-col bg-[#eeebe5]">
        <SimpleGrid
          spacing={4}
          columns={{ base: 1, md: 4 }}
          className="w-full"
        >
          {GoldSponsorCards.map((card, index) => (
            <SponsorCard key={index} photo={card.photo} title={card.title} />
          ))}
        </SimpleGrid>
        <h1 className="text-4xl font-bold justify-center items-center mt-4">
          Gold Sponsors
        </h1>
      </div>
      </section>
      <section className="container mx-auto mt-8 flex justify-center items-center flex flex-col gap-4 w-full">
      <div className="bg-gray-100 p-8 items-center flex flex-col bg-[#eeebe5]">
        <SimpleGrid
          spacing={4}
          columns={{ base: 1, md: 4 }}
          className="w-full"
        >
          {SilverponsorCards.map((card, index) => (
            <SponsorCard key={index} photo={card.photo} title={card.title} />
          ))}
        </SimpleGrid>
        <h1 className="text-4xl font-bold justify-center items-center mt-4">
          Silver Sponsors
        </h1>
      </div>
      </section>
    </>
  );
}
