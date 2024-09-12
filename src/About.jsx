import React from 'react'
import TopBar from './components/TopBar'

function About() {
    return (
        <div>
            <TopBar />
            <div className='text-white'>
                <h1>Hello Users!</h1>
                <p>This is a demo mini project. Developers tried to make an AI ChatBot. Now you can only chat with JARVIS. Unfortunately JARVIS is not updated with recent informations.Due to this the informations may inaccurate. Therefore double check informations again with latest technologies. Further we will try to add more features.
                </p>
                <h4>We have used only <b>ReactJS</b> for fronted. For styling used <b>Tailwind CSS</b>. Used <b>MaterialUI</b> for components</h4>
                <h3>We also provide Software as a Service. Connect with us to create your responsive website NOW...</h3>
            </div>
        </div>
    )
}

export default About
