import React from 'react'
import { Navbar3, Button } from '../components'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { BiCog } from 'react-icons/bi'
import { AiFillGift } from 'react-icons/ai'

const Files = () => {

    const { state } = useLocation()

    const { username } = state
    return (
        <div className='text-white h-[100vh]'>
            <div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
                <Navbar3 />
            </div>


            <div className='sm:flex justify-between w-full'>
                <div className='sm:p-20 px-10 py-20'>
                    <h1 className='text-[26px] mt-2'>Hi, {username} 🖐.</h1>
                    <p className='text-[#5f5f5f] mt-3'>Join or create a room to share files</p>
                </div>


                <div className='p-20 sm:flex hidden'>
                    <Button

                        title=' + Add room'
                        styles='mt-8 px-7 py-4 rounded-[100px]  bg-[#1dc071] text-[20px]'
                    />
                </div>

            </div>


            {/*<div className='p-20 sm:hidden flex items-center justify-center'>
                <Button
                    title='+ Add room'
                    styles='rounded-[100px] px-5 py-3 bg-[#1dc071] text-[20px] float-bottom mb-[-15rem]'
                />
            </div>


            <div className='sm:hidden flex justify-between p-10 pb-10 xx'>
                <RxDashboard className='text-[25px]' />
                <BiCog className='text-[25px]' />
                <AiFillGift className='text-[25px]' />
            </div>*/}



        </div>
    )
}

export default Files