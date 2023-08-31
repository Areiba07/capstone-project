import React from 'react'; // Make sure to import React
import { Button, Navbar } from 'flowbite-react'; // Assuming you have 'flowbite-react' installed
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import Logo from "../components/logo"; // Make sure this path is correct

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="/home"> {/* Use 'as={Link}' for routing */}
        <Logo />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          HanapBuhay
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button as={Link} to="/login" gradientDuoTone="purpleToPink"> {/* Use 'as={Link}' for routing */}
          Login
        </Button>
        <span className="self-center text-md font-semibold mr-2 ml-2 dark:text-white">
          OR
        </span>
        <Button as={Link} to="/signup" gradientDuoTone="purpleToPink" className="mr-2"> {/* Use 'as={Link}' for routing */}
          SignUp
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/home"> {/* Use 'as={Link}' for routing */}
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about"> {/* Use 'as={Link}' for routing */}
          About
        </Navbar.Link>        
        <Navbar.Link as={Link} to="/service"> {/* Use 'as={Link}' for routing */}
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} to="/serviceBoard"> {/* Use 'as={Link}' for routing */}
          Service Board
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
