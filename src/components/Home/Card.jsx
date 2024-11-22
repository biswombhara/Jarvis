import * as React from 'react';
import Card from '@mui/material/Card';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Typography from '@mui/material/Typography';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FestivalIcon from '@mui/icons-material/Festival';
import AnimationIcon from '@mui/icons-material/Animation';
import "./Card.css";
import { Context } from '../../context/Context';

export default function Cards() {
  const { search } = React.useContext(Context)
  let arr = [
    {
      des: "Say about festivals celebrated in India !",
      icon: <AutoFixHighIcon className='text-white text-[1rem]' />,
      idx: 1
    },
    {
      des: "Print hello world in java ?",
      icon: <TipsAndUpdatesIcon className='text-white text-[1rem]' />,
      idx: 2
    },
    {
      des: "Tell me some tourist places in Odisha.",
      icon: <FestivalIcon className='text-white text-[1rem]' />,
      idx: 3
    },
    {
      des: "What is React js ?",
      icon: <AnimationIcon className='text-white text-[1rem]' />,
      idx: 4
    },
  ]
  return (<>
    
      <div className='flex Card sm:w-[90vw]'>
      {
        arr.map((data, idx) => (
          <Card onClick={()=>search(data.des)} key={idx}  className='!bg-[#1e1f20] card rounded h-[190px] mr-2' sx={{ width: 190 }}>
            <div className='p-4 flex items-center'>              
            <Typography variant="body2" className='text-white'>
                  {data.des}
                </Typography>
                <br />
                <div className='bg-black h-10 w-10 rounded-full flex justify-center items-center sm:hidden absolute right-2 top-36'>
                {data.icon}
                </div>
                <div className="iconHidden hidden sm:inline sm:scale-75">
                {data.icon}
                </div>
            </div>
          </Card>
        ))
      }
    </div>
    
  </>
  )
}
