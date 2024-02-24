import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useGetRequest } from "../../hooks/fetcher";
import schema from "../../utils/schema";

export default function MenuBar() {
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();
  const {
    isOpen: isClubsOpen,
    onOpen: onClubsOpen,
    onClose: onClubsClose,
  } = useDisclosure();
  const {
    isOpen: isEventsOpen,
    onOpen: onEventsOpen,
    onClose: onEventsClose,
  } = useDisclosure();
  const btnRef = React.useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [selectedClub, setSelectedClub] = useState(0);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const { data: clubAndEventData, isLoading } = useGetRequest(
    schema.queries.allEventsAndClubs
  );

  clubAndEventData?.AllClubs?.data?.forEach((club) => {
    club.cards = clubAndEventData?.AllEvents?.data?.filter(
      (event) => event.club === club._id
    );
  });

  console.log(clubAndEventData?.AllClubs?.data);

  const clubs = [
    {
      name: "Club1",
      events: [
        {
          name: "event1",
        },
        {
          name: "event2",
        },
      ],
    },
    {
      name: "Club2",
      events: [
        {
          name: "event1",
        },
        {
          name: "event2",
        },
      ],
    },
  ];

  return (
    <>
      <Link
        color="foreground"
        href="#"
        className="absolute right-0 z-20 m-4 px-6 py-4 rounded-lg"
        onClick={onMenuOpen}
      >
        <>
          <label className="hamburger">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </>
      </Link>
      <Drawer
        isOpen={isMenuOpen}
        placement="right"
        onClose={() => {
          onMenuClose();
          toggleCheckbox();
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <DrawerCloseButton />
          <DrawerHeader style={{color:"#fff"}}>Menu</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col gap-3 ml-3">
              <Link
                color="foreground"
                href="#"
                className="bg-[#dedcdc] p-2 rounded"
              >
                Home
              </Link>
              <Link
                color="foreground"
                href="#"
                className="bg-[#dedcdc] p-2 rounded"
              >
                About
              </Link>
              <Link
                color="foreground"
                href="#"
                className="bg-[#dedcdc] p-2 rounded"
              >
                FAQ'S
              </Link>
              <Link
                color="foreground"
                href="#"
                className="bg-[#dedcdc] p-2 rounded"
              >
                Accommodation
              </Link>
              <Link
                color="foreground"
                href="#"
                className="bg-[#dedcdc] p-2 rounded"
                onClick={onClubsOpen}
              >
                <div className="flex flex-row justify-between w-full">
                  Clubs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </Link>
              <Drawer
                isOpen={isClubsOpen}
                placement="right"
                onClose={onClubsClose}
                finalFocusRef={btnRef}
              >
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Clubs</DrawerHeader>
                  <DrawerBody>
                    <div className="flex flex-col gap-3 ml-3">
                      {clubAndEventData?.AllClubs?.data.map((club, index) => (
                        <>
                          <Link
                            color="foreground"
                            href="#"
                            className="bg-[#dedcdc] p-2 rounded"
                            onClick={() => {
                              onEventsOpen();
                              setSelectedClub(index);
                            }}
                            key={index}
                          >
                            {club.name}
                          </Link>
                          <Drawer
                            isOpen={isEventsOpen}
                            placement="right"
                            onClose={onEventsClose}
                            finalFocusRef={btnRef}
                          >
                            <DrawerContent>
                              <DrawerCloseButton />
                              <DrawerHeader>Events</DrawerHeader>
                              <DrawerBody>
                                <div className="flex flex-col gap-3 ml-3">
                                  {clubAndEventData?.AllClubs?.data[
                                    selectedClub
                                  ].cards.map((event, index) => (
                                    <Link
                                      color="foreground"
                                      href={`event/${event._id}`}
                                      className="bg-[#dedcdc] p-2 rounded"
                                      key={index}
                                    >
                                      {event.name}
                                    </Link>
                                  ))}
                                  <Link
                                    color="foreground"
                                    href={`details/${clubAndEventData?.AllClubs?.data[selectedClub]._id}`}
                                    className="bg-[#dedcdc] p-2 rounded"
                                  >
                                    Go to Club Details
                                  </Link>
                                </div>
                              </DrawerBody>
                            </DrawerContent>
                          </Drawer>
                        </>
                      ))}
                    </div>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
