"use client";
import React from "react";
import {

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
} from "@nextui-org/react";
import Link from "next/link";
import {IoLibrary} from "react-icons/io5";
import {usePathname} from "next/navigation";

const NavbarComponent = () => {
    const pathname = usePathname();
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
                <NavbarItem isActive={pathname === '/books'}>
                    <Link href="/books" aria-current="page"
                          className={`${pathname.startsWith('/books') ? 'text-white underline underline-offset-8' : "text-white"}`}>
                        Books
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/notices'}>
                    <Link href="/notices" aria-current="page"
                          className={`${pathname.startsWith('/notices') ? 'text-white underline underline-offset-8' : "text-white"}`}>
                        Notices
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/contact'}>
                    <Link
                        className={`${pathname === '/contact' ? ' text-white underline underline-offset-8' : "text-white"}`}
                        href="/contact">
                        Contact
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/about'}>
                    <Link
                        className={`${pathname === '/about' ? 'text-white underline underline-offset-8' : "text-white"}`}
                        href="/about">
                        About
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link className={`${pathname === '/login' ? 'text-white underline underline-offset-8' : "text-white"}`} href='/login'>
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
                        <FaUser/>
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link href="/books" aria-current="page" size='lg'>
                        Books
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="w-full" href="/notices" size="lg">
                        Notices
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="w-full" href="/contact" size="lg">
                        Contact
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="w-full" href="/about" size="lg">
                        About
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default NavbarComponent;
