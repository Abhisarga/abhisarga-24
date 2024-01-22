import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar isBordered className="m-0 p-0" maxWidth={'full'} > 
      <NavbarBrand className="m-0 p-0">
        <p className="font-bold text-inherit">Abhisarga</p>
      </NavbarBrand>
      <NavbarContent justify="end" className="m-0 px-0">
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
            Accomodation
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
