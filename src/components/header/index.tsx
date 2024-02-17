import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar isBordered className="m-0 p-0" maxWidth={'full'} > 
      <NavbarBrand className="m-0 p-0">
        <p className="font-bold text-inherit">Abhisarga</p>
      </NavbarBrand>
      <NavbarContent 
        justify="end" 
        className={`m-0 px-0 md:flex ${isOpen ? 'block' : 'hidden'}`} 
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            FAQ'S
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Accommodation
          </Link>
        </NavbarItem>
      </NavbarContent>
      <div className="md:hidden">
        <Button
          flat
          auto
          onClick={toggleMenu}
          className="text-inherit hover:bg-opacity-10 focus:bg-opacity-10"
        >
          Menu
        </Button>
      </div>
    </Navbar>
  );
}
