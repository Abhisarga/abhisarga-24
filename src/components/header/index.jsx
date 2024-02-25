import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return ( // you have to make navbar bigger
    <Navbar isBordered className="m-0 p-0" maxWidth={'full'}> 
      <NavbarBrand className="m-0 p-0">
        <Link href={'/'}>
          <Image
            src="/Logos/Abhisargalogo2.png"
            alt="Logo"
            width={120}
            layout="fixed"
            className="m-0 p-0"
            />
          </Link>
      </NavbarBrand>
      <NavbarContent 
        justify="end" 
        className={`m-0 px-0 md:flex ${isOpen ? 'block' : 'hidden'}`} 
      >
        <NavbarItem>
          <Link color="foreground" className="font-bold" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="font-bold" href="/contacts">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="font-bold" href="/faq">
            FAQ'S
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="font-bold" href="#">
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
