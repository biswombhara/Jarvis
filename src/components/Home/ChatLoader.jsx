import { Typography } from "@material-tailwind/react";
 
export default function ChatLoader() {
  return (
    <div className="w-[40vw] sm:w-[80vw] mt-2 animate-pulse">
      <Typography
        as="div"
        variant="h1"
        className="mb-2 h-4 w-[40vw] sm:w-[70vw] rounded-full bg-[#96e1ff]"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="h1"
        className="mb-2 h-4 w-[40vw] sm:w-[70vw] rounded-full bg-[#96e1ff]"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="h1"
        className="mb-2 h-4 w-[40vw] sm:w-[70vw] rounded-full bg-[#96e1ff]"
      >
        &nbsp;
      </Typography>
    </div>
  );
}