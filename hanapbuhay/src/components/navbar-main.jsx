'use client';

import { Button, Navbar } from 'flowbite-react';
import Logo from "../components/logo";


export default function NavbarWithCTAButton() {
  return (

    
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <Logo />
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          HanapBuhay
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="/login" gradientDuoTone="purpleToPink">
          Login
        </Button>
        <br />
        <span className="self-center text-md font-semibold mr-2 ml-2 dark:text-white">
          OR
        </span>
        <br />
        <Button href="/signup" gradientDuoTone="purpleToPink" className="mr-2">
        SignUp
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href=""
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="/home">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">
          About
        </Navbar.Link>        
        <Navbar.Link href="/service">
          Services
        </Navbar.Link>
        <Navbar.Link href="/serviceBoard">
          Service Board
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


