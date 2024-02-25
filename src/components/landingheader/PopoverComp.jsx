import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/react";

const PopoverComp = ({ club, index, selectedClub, setSelectedClub }) => {
  const {
    isOpen: isEventsOpen,
    onOpen: onEventsOpen,
    onClose: onEventsClose,
  } = useDisclosure();

  useEffect(() => {
    if (selectedClub !== index) {
      onEventsClose();
    }
  }, [selectedClub]);

  return (
    <Popover
      isOpen={isEventsOpen}
      onOpen={onEventsOpen}
      onClose={onEventsClose}
      placement="left"
      onClick={(e) => e.stopPropagation()}
    >
      <PopoverTrigger>
        <div
          onClick={() => {
            setSelectedClub(index);
          }}
        >
          <p className="text-white text-sm hover:text-orange-300 hover:animate-appearance-in">
            {club.name}
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent
        bg="gray.700"
        color="white"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "150px",
          borderRadius: "15px",
          margin: "5px",
        }}
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader
          style={{
            fontWeight: "bold",
            cursor: "default",
          }}
        >
          {club.name}
        </PopoverHeader>
        <PopoverBody>
          <div className="flex flex-col gap-2">
            {club.cards.map((event, index) => (
              <Link color="foreground" href={`/event/${event._id}`} key={index}>
                <p className="text-white text-sm  hover:text-orange-300 hover:animate-appearance-in">
                  {event.name}
                </p>
              </Link>
            ))}
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverComp;
