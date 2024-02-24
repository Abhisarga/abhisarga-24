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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faCircleQuestion} from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <>
      <Link
        color="foreground"
        href="#"
        className="fixed right-0 z-20 m-4 px-6 py-4 rounded-lg"
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
        <DrawerContent style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' , width: '6vw' , padding:'0'}}>

          <DrawerBody className="flex p-5 mr-30 justify-center">
            <div className="flex flex-col gap-3 items-center">
              <Link
                color="foreground"
                href="#"
                className="p-2 rounded"
              >
                <div className="flex flex-col gap-2">
                <FontAwesomeIcon icon={faHouse} style={{color:"#fff"}}/>
                <p className="text-[#fff] text-l">Home</p>
                </div>
              </Link>
              <Link
                color="foreground"
                href="/faq"
                className="p-2 rounded"
              >
                <div className="flex flex-col gap-2">
                <FontAwesomeIcon icon={faCircleQuestion} style={{color:"#fff"}}/>
                <p className="text-[#fff] text-l">FAQ</p>
                </div>
              </Link>
              <Link
                color="foreground"
                href="#"
                className="p-2 rounded"
              >
                <div className="flex flex-col gap-2">
                <FontAwesomeIcon icon={faHotel} style={{color:"#fff"}}/>
                <p className="text-[#fff] text-xs">Accomodation</p>
                </div>
              </Link>
              {/* <Link
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
              </Link> */}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}