import React from "react";
import "./TopBar.css"
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Avatar, Badge } from "@material-tailwind/react";
import { Link } from "react-router-dom";


export default function TopBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="h-fit rounded-none bg-[#000814] border-0 Nav px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
        <Typography
          as="a"
          href="https://jarvis-masterbisup.netlify.app/"
          variant="h6"
          className="mr-4 text-2xl text-white flex items-center cursor-pointer py-1.5 lg:ml-2"
        >
          <img className="w-8 mr-1.5" src="https://bit.ly/4d0u72E" alt="" />
          Jarvis
        </Typography>
        </Link>
        <div className="flex tony">
        <div className="gap-2 sm:scale-75 flex">
          <Link to={"/plan"}>
          <Button className="flex mr-2" variant="gradient">
            <img className="w-4 mr-1.5" src="https://bit.ly/4d0u72E" alt="" />Try Jarvis Pro
          </Button>
          </Link>
        </div>
        <div className="sm:scale-75">
        <Badge placement="top-end" overlap="circular" color="green" withBorder>
        <Avatar
          src="https://wellgroomedgentleman.com/wp-content/uploads/2023/10/tony-stark-beard.original.jpg"
          alt="avatar"
        />
      </Badge>
        </div>
        </div> 
      </div>
    </Navbar>
  );
}