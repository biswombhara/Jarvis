import React, { useState } from "react";
import TopBar from "../Home/TopBar";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "./Payment.css";
import Video from "./Video";

function Payment() {
  const [pay, setPay] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const [play, setPlay] = React.useState("");
  const handleOpen = () => {
    setOpen("autoplay");
    setPlay(<Video/>);
    setTimeout(() => {
      setOpen(false);
      setRedirect(true);
      setPay(true);
    }, 12000);
  };
  let [sec, setSec] = useState(60);
  let [min, setMin] = useState(4);
  setTimeout(() => {
    if (min != 0) {
      if (sec != 0) {
        setSec(sec - 1);
      } else if (sec == 0) {
        setSec(59);
        setMin(min - 1);
      }
    } else if (min == 0) {
      if (sec != 0) {
        setSec(sec - 1);
      }
    }
  }, 1000);
  return (
    <>
      <TopBar />      
      {!pay ? (
        <>
          <div className="flex flex-col w-[100vw] items-center justify-center my-4">
            <img className="w-[15rem] sm:w-[10rem] mx-4" src="/code.png" alt="" />
            <p className="text-white text-2xl">
              {min}:{sec}
            </p>
            <div className="my-2 sm:scale-90 sm:!mt-[0.5rem] sm:flex flex-col">
              <label className="text-white text-xl mx-2" htmlFor="tname">
                Your Name:
              </label>
              <input id="tname" type="text" />
              <br />
              <label className="text-white text-xl mx-2" htmlFor="tid">
                UPI Transaction ID:
              </label>
              <input id="tid" type="text" />
            </div>
            <div className="my-2">
              <Link to={"/plan"}>
                <button type="button" className="btn btn-outline-primary mx-2">
                  Return
                </button>
              </Link>
              <button
                onClick={handleOpen}
                type="button"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {!redirect ? (
        <div className="">
           <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={open}
        >
          <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#00000094]">
          <CircularProgress color="inherit" />
          <br />
          Please do not refresh
          </div>
           {/* {play} */}
        </Backdrop> 
        </div>
      ) : (
        <div className="flex sm:scale-95 flex-col items-center justify-center sm:mt-12 mt-32">
          <h1 className="text-white text-center text-3xl">
            Payment is under processing...
          </h1>
          <img
            className="h-[3rem] m-4"
            src="https://media.tenor.com/-7LKYbNbLiIAAAAi/vodafone-greece-vodafone.gif"
            alt=""
          />
          <p className="text-white text-center text-lg">Your details has submitted successfully. Please wait for 2 to 3 working days. <br />After payment verification you will be  notified via your registered email. <br /> Till then you can use the free version of Jarvis.</p>
          <p className="text-white m-4 text-center text-lg">
            <a className="text-blue-900 mx-1 font-semibold underline" href="/">click here</a> to go back to home page
          </p>
        </div>
      )}
    </>
  );
}

export default Payment;
