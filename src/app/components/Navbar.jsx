"use client";
import React from "react";
import {
  FaChevronCircleDown,
  FaChevronDown,
  FaUser,
} from "react-icons/fa";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu, Image,
} from "@nextui-org/react";
import Link from "next/link";
import {IoLibrary} from "react-icons/io5";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Books", "Notices", "Contact", "About"];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="bg-red-600">
      <NavbarContent className="text-white">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className='flex items-center' href='/'>
            <IoLibrary color="white"/>
            <p className="font-bold text-inherit ml-2" style={{fontStyle: 'italic', color: 'white'}}>
              KRANTIKARI LIBRARY
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
        <Link href="#" aria-current="page" className="text-white">
            Books
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" className="text-white">
            Notices
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-white" href='/login'>
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            href='/register'
            as={Link}
            variant="solid"
            color="default"
          >
            Signup
            <FaUser />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
        <Link href="#" aria-current="page" size='lg'>
            Books
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            Notices
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/contact" size="lg">
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            About
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
