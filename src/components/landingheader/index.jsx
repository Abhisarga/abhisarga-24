import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useGetRequest } from "../../hooks/fetcher";
import schema from "../../utils/schema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import PopoverComp from "./PopoverComp";

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
  const btnRef = React.useRef();
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const [selectedClub, setSelectedClub] = useState(0);

  const { data: clubAndEventData, isLoading } = useGetRequest(
    schema.queries.allEventsAndClubs
  );

  clubAndEventData?.AllClubs?.data?.forEach((club) => {
    club.cards = clubAndEventData?.AllEvents?.data?.filter(
      (event) => event.club === club._id
    );
  });

  console.log(clubAndEventData?.AllClubs?.data);

  return (
    <>
      <Link
        color="foreground"
        href="#"
        className="fixed right-0 z-20 p-6 rounded-lg"
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
        <DrawerContent
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "fit-content",
            padding: "0",
            height: "fit-content",
            marginTop: "185px",
            borderRadius: "60px 0 0 60px",
            borderTop: "2px solid gray",
            borderLeft: "2px solid gray",
            borderBottom: "2px solid gray",
          }}
        >
          <DrawerBody className="flex justify-center" style={{ padding: 0 }}>
            <div className="flex flex-col gap-3 items-center rounded-l-[40px] py-10">
              <Link
                color="foreground"
                href="#"
                className="p-2 rounded hover:text-orange-300"
              >
                <div className="flex flex-col gap-2">
                  <FontAwesomeIcon icon={faHouse} className="text-white" />
                  <p className="text-white max-w-16 text-center">Home</p>
                </div>
              </Link>
              <Popover
                isOpen={isClubsOpen}
                onOpen={onClubsOpen}
                onClose={onClubsClose}
                placement="left"
              >
                <PopoverTrigger>
                  <Link color="foreground" className="p-2 rounded">
                    <div className="flex flex-col gap-2">
                      <FontAwesomeIcon
                        icon={faHotel}
                        style={{ color: "#fff" }}
                      />
                      <p className="text-white max-w-16 text-center">Clubs</p>
                    </div>
                  </Link>
                </PopoverTrigger>
                <PopoverContent
                  bg="gray.700"
                  color="white"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "150px",
                    borderRadius: "15px",
                    margin: "6px",
                    outline: "none",
                  }}
                >
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader
                    style={{ fontWeight: "bold", cursor: "default" }}
                  >
                    Clubs
                  </PopoverHeader>
                  <PopoverBody>
                    <div className="flex flex-col gap-3 cursor-pointer">
                      {clubAndEventData?.AllClubs?.data?.map((club, index) => (
                        <PopoverComp
                          key={index}
                          club={club}
                          index={index}
                          selectedClub={selectedClub}
                          setSelectedClub={setSelectedClub}
                        />
                      ))}
                    </div>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Link color="foreground" href="/faq" className="p-2 rounded">
                <div className="flex flex-col gap-2">
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    style={{ color: "#fff" }}
                  />
                  <p className="text-white max-w-16 text-center">FAQ</p>
                </div>
              </Link>
              <Link color="foreground" href="#" className="p-2 rounded">
                <div className="flex flex-col gap-2">
                  <FontAwesomeIcon icon={faHotel} style={{ color: "#fff" }} />
                  <p className="text-white max-w-16 text-center">
                    Accomodation
                  </p>
                </div>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
