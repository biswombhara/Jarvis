import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Setting() {
    return (
        <div className='text-4xl h-screen text-white flex flex-column items-center justify-center'>
            <img className='h-20 sm:h-12' src="https://bit.ly/4d0u72E" alt="" />
            Currently working on it...
            <Link to={"/"}>
                <Button className='my-4' variant="gradient">Go Back
                </Button>
            </Link>
        </div>
    )
}

export default Setting
