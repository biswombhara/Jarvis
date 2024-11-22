import React, { createContext, useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { Card, Typography, List, ListItem, ListItemPrefix, Alert} from "@material-tailwind/react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Context } from "../../context/Context";
import  "./SideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const {newChat} = createContext(Context);

  return (
    <Card className="h-screen sideBar !text-white rounded-0 bg-[#161515] w-full max-w-[17rem] p-1 shadow-xl shadow-blue-gray-900/5">
      <div className="flex flex-column mx-4">
      <MenuIcon className="my-3"/>
        <a onClick={()=>newChat} className="p-3 bg-[#000814] rounded-[2rem] w-36 text-white" href="">
          <AddIcon className="mr-2 text-white" />
          New Chat
        </a>
      </div>
      <div className="relative top-[30rem]">
      <List className="text-white ">
      <Link to={"/help"}>
        <ListItem className="hover:text-black p-1">
          <ListItemPrefix>
            <HelpIcon className="h-5 w-5" />
          </ListItemPrefix>
          Help
        </ListItem>
        </Link>
        <Link to={"/about"}>
        <ListItem className="hover:text-black p-1">
          <ListItemPrefix>
            <InfoIcon className="h-5 w-5" />
          </ListItemPrefix>
          About
        </ListItem>
        </Link>        
        <Link to={"/settings"}>
        <ListItem className="hover:text-black  p-1">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        </Link>
      </List>
      </div>
      <Alert open={openAlert} className="mt-auto bg-[#000814] w-64 p-4 mb-4" onClose={() => setOpenAlert(false)}>
        <div>
          <img className="w-12 mb-4" src="../src/assets/Logo.gif" alt="" />
          <Typography variant="h6" className="mb-1">
            Upgrade to PRO
          </Typography>
          <Typography variant="small" className="font-normal opacity-80">
            Upgrade to <b>JARVIS PRO</b> and get even more advanced features
            and premium.
          </Typography>
          <div className="mt-4 flex gap-3">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="font-medium opacity-80"
              onClick={() => setOpenAlert(false)}
            >
              Dismiss
            </Typography>
            <Link to={"/plan"} >
            <Typography as="a" href="#" variant="small" className="font-medium">
              Upgrade Now
            </Typography>
            </Link>
          </div>
        </div>
      </Alert>
    </Card>
  );
}
