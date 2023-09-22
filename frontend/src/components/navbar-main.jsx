import React from 'react'; 
import { Button, Navbar } from 'flowbite-react'; 
import { Link } from 'react-router-dom'; 
import Logo from "../components/logo"; 

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="/home"> 
        <Logo />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          HanapBuhay
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button as={Link} to="/login" gradientDuoTone="purpleToPink"> 
          Login
        </Button>
        <span className="self-center text-md font-semibold mr-2 ml-2 dark:text-white">
          
        </span>
        <Button as={Link} to="/signup" gradientDuoTone="purpleToPink" className="mr-2"> 
          SignUp
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/home"> 
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about"> 
          About
        </Navbar.Link>        
        <Navbar.Link as={Link} to="/serviceBoard">
          Service Board
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
