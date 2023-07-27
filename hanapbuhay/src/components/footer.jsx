
import { Footer } from 'flowbite-react';
import Logo from "../components/logo";
import { Link } from "react-router-dom";



export default function FooterWithLogo() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          
          <div className="flex items-center">
            <Logo
            
            alt="Flowbite Logo"
            href="https://flowbite.com"
            name="Flowbite"
            src="https://flowbite.com/docs/images/logo.svg"
            /> 
            <h1 className=" text-purple-700 font-bold ">HanapBuhaybuhay</h1>
          </div>
          <Footer.LinkGroup>
            <Link to={"/about"}> 
            <Footer.Link href="#">
              About
            </Footer.Link>
            </Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          by="HanapBuhay"
          href="#"
          year={2023}
        />
      </div>
    </Footer>
  )
}


