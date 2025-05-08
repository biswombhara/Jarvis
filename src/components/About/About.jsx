import React from 'react'
import TopBar from '../Home/TopBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function About() {
    let devs = [{
        naam: "Biswaranjan Samantaray",
        kaam: "Planned to build the AI ChatBot. Named it to JARVIS.",
        linkedIn: "https://www.linkedin.com/in/biswaranjan-samantaray-478185267/"
    }, {
        naam: "Gouranga Ch. Murmu",
        kaam: "Gathered all requirements & Designed web app.",
        linkedIn: "https://www.linkedin.com/in/gouranga-murmu-134392321/"
    }, {
        naam: "Biswombhara Patra",
        kaam: "Converted designed UI to Codes & tested JARVIS",
        linkedIn: "https://www.linkedin.com/in/biswombhara-patra/"
    }, {
        naam: "Rakesh Pradhan",
        kaam: "Deployed enitire web app on Nettlify.",
        linkedIn: "https://www.linkedin.com/in/rakesh-pradhan-a168aa320/"
    },];
    return (
        <div>
            <TopBar />
            <div className='text-white text-center'>
                <h1 className='text-4xl mb-2 font-semibold'>Hello Users!</h1>
                <p>This is a demo mini project. Developers tried to make an AI ChatBot. Now you can only chat with JARVIS. Unfortunately JARVIS is not updated with recent informations.Due to this the informations may inaccurate. Therefore double check informations again with latest technologies. Further we will try to add more features.
                </p>
                <h4 className='text-xl mb-2'>We have used only <b>ReactJS</b> for fronted. For styling used <b>Tailwind CSS</b>. Used <b>MaterialUI</b> for components</h4>
                <h3 className='text-[#00ff51] mb-2'>We also provide Software as a Service. Connect with us to create your responsive website NOW...</h3>
                <a href="https://buymeacoffee.com/biswombhara">
                <button className="btn btn-success my-4">Buy a cup of coffee 🍵 for developers...</button>
                </a>
                <div className='flex scale-[0.95]'>
                {devs.map((el, idx) => (
                    <div className='flex items-center'>
                        <Card key={idx} className='m-2' sx={{ width: 345 }}>
                            <CardContent className='h-28'>
                                <Typography gutterBottom variant="h5" component="div">
                                    {el.naam}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {el.kaam}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href={el.linkedIn}>
                                <Button size="small">Connect</Button>
                                </a>
                            </CardActions>
                        </Card>
                        <div>
                        {el.naam != "Rakesh Pradhan" ?
                            <img className='h-20 rotate-[-70deg]' src="https://png.pngtree.com/png-clipart/20230118/original/pngtree-down-arrow-icon-3d-directions-png-image_8920999.png" alt="" /> : null
                        }
                        </div>                        
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default About

