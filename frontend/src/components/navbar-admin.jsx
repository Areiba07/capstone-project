import React from 'react'; 
import { Button, Navbar } from 'flowbite-react'; 
import { Link } from 'react-router-dom'; 
import Logo from "../components/logo"; 

export default function navbarAdmin() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="/home"> 
        <Logo />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          HanapBuhay
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button as={Link} to="/home" gradientDuoTone="purpleToPink" className="mr-2"> 
          Logout
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/admin-home/admin-manage-services"> 
          SERVICES
        </Navbar.Link>
        <Navbar.Link as={Link} to="/admin-home/admin-manage-users"> 
          USERS
        </Navbar.Link>        
        <Navbar.Link as={Link} to="/admin-home/admin-review-service-request">
          PENDING SERVICES
        </Navbar.Link>
        <Navbar.Link as={Link} to="/admin-home/admin-review-feedback">
          REVIEW FEEDBACKS
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
