import {
  Card,
  CardFooter,
  Image,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import logo from "../../assets/SponsorLogos/logo.png";
import { Flex, Box } from "@chakra-ui/react";

import { SimpleGrid } from "@chakra-ui/react";

const sponsorData = [
  {
    category: "Associate Title Sponsor",
    sponsors: [
      {
        photo: "/sponsorsLogos/City_Union_Bank - Abhisarga Sponsors IIITS.jpg",
        title: "City Union Bank",
      },
    ],
  },
  {
    category: "Platinum Sponsor",
    sponsors: [
      {
        photo:
          "/sponsorsLogos/INDIAN BANK Alahabad LOGO-01 - Abhisarga Sponsors IIITS.jpg",
        title: "Indian Bank",
      },
    ],
  },
  {
    category: "Event Partner",
    sponsors: [
      {
        photo: "/sponsorsLogos/TM_Design - ConnexIon IoT Club.PNG",
        title: "Smart Transportation Research Group",
      },
      {
        photo:
          "/sponsorsLogos/UNIVERSAL_ELECTRICALS-removebg-preview - NIRVANA Club IIITS.png",
        title: "Universal Electrical",
      },
      {
        photo:
          "/sponsorsLogos/Anabia_Saloon-removebg-preview - NIRVANA Club IIITS.png",
        title: " Anabia Salon",
      },
      {
        photo:
          "/sponsorsLogos/MOBILES-removebg-preview - NIRVANA Club IIITS.png",
        title: "Bhavani Mobiles",
      },
      {
        photo: "/sponsorsLogos/Unstop - Abhisarga Sponsors IIITS.png",
        title: "Unstop",
      },
      {
        photo:
          "/sponsorsLogos/Foodie_Box-removebg-preview (1) - NIRVANA Club IIITS.png",
        title: "Foodie Box",
      },
      {
        photo: "/sponsorsLogos/IMG-20240229-WA0019 - ABHINAV MARS.jpg",
        title: "Rocket Mandi",
      },
    ],
  },
  {
    category: "Event Title Sponsor",
    sponsors: [
      {
        photo:
          "/sponsorsLogos/5466089b-dee1-4196-a529-4bd63d70f413 - EPOCH.jpeg",
        title: "Biryani Hub",
      },
      {
        photo:
          "/sponsorsLogos/Picsart_24-02-29_10-34-16-556 - NIRVANA Club IIITS.png",
        title: "Satyam Stationary",
      },
      {
        photo:
          "/sponsorsLogos/Bloom Biryani - Kalyan Chakravarthy Bezawada.png",
        title: "Blooms Biryani",
      },
      {
        photo: "/sponsorsLogos/Vils Logo - RAHUL AGARWAL.jpg",
        title: "Vils.ai",
      },
    ],
  },
  {
    category: "Education Partner",
    sponsors: [
      {
        photo:
          "/sponsorsLogos/School_Name-removebg-preview - NIRVANA Club IIITS.png",
        title: "S.V. English Medium School",
      },
    ],
  },
  {
    category: "Food and Beverages Partner",
    sponsors: [
      {
        photo: "/sponsorsLogos/tatasmartfoodz - Abhisarga Sponsors IIITS.jpg",
        title: "Tata SmartFoodz Limited",
      },
    ],
  },
  {
    category: "Hospitality Partner",
    sponsors: [
      {
        photo: "/sponsorsLogos/mangores - Abhisarga Sponsors IIITS.png",
        title: "Mango Resort",
      },
    ],
  },
  {
    category: "Media and Digital Partner",
    sponsors: [
      {
        photo: "/sponsorsLogos/ams logo - Abhisarga Sponsors IIITS.PNG",
        title: "Abhinandana Media Services",
      },
    ],
  },
];

const SponsorCard = ({ photo, title }) => {
  return (
    <div className={`sponsor-card`}>
      <Card className="py-4 w-100 h-[300px] flex items-center">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{title}</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex items-center justify-center">
          <Image
            alt="Card background"
            className="object-contain rounded-xl"
            src={photo}
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
        <div className="bg-white p-8 mt-4 rounded-md m-12 flex justify-end ml-40 flex-col items-center gap-2 padding-20">
        <Card className="py-4 w-100 h-[300px] flex items-center">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Canara Bank</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex items-center justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/sponsorsLogos/Canara_Bank - Abhisarga Sponsors IIITS.jpg"
                width={270}
              />
            </CardBody>
          </Card>
          <h1 className="text-4xl font-bold justify-center items-center">
            Title Sponsor
          </h1>
        </div>
      </section>
      <section className="container mx-auto mt-8 flex justify-center items-center flex-col gap-4 w-full">
        {sponsorData.map((category, index) => (
          <div
            className="bg-gray-100 p-8 items-center flex flex-col w-full"
            key={index}
          >
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {category.sponsors.map((sponsor, index) => (
                <Box
                  key={category.category}
                  width={{ base: "100%", md: "23%" }}
                  mb={4}
                >
                  <SponsorCard
                    key={`${category.category}-${index}`}
                    photo={sponsor.photo}
                    title={sponsor.title}
                  />
                </Box>
              ))}
            </div>
            <h1 className="text-4xl font-bold justify-center items-center mt-4">
              {category.category}
            </h1>
          </div>
        ))}
      </section>
    </>
  );
}
