import React from 'react'
import { BoatIcon, DiamondIcon, DiscordIcon, MaxIcon, TelegramIcon, TwitterIcon } from './Icon'
import Image1 from '../assets/images/png/monkey_1.png'
import Image2 from '../assets/images/png/monkey_2.png'
import Image3 from '../assets/images/png/monkey_3.png'

const Header = () => {
    return (
        <>
            <section className="bg-[url('/src/assets/images/png/Bg_header.png')] bg-no-repeat bg-center min-h-[815px] overflow-hidden bg-cover relative">
                <div className='absolute right-[20%] translate-x-[-10%] sm:right-[40%] lg:right-[45%] lg:translate-x-[50%] bottom-0'>
                    <img src={Image1} alt="" className='w-full' />
                </div>
                <div className='absolute right-[0%] translate-x-[30%] sm:right-[30%] sm:translate-x-[42%] lg:right-[27%] lg:translate-x-[50%] bottom-0'>
                    <img src={Image2} alt="" className='w-full' />
                </div>
                <div className='absolute hidden sm:block sm:right-[15%] sm:translate-x-[78%] lg:right-[6%] lg:translate-x-[50%] bottom-0'>
                    <img src={Image3} alt="" />
                </div>
                <div className="container min-h-[100vh]: mx-auto max-w-[1140px] relative z-10">
                    <div className="flex pt-[28px] justify-end">
                        <button className='shadow-cardShadow border-none outline-none px-6 py-4 font-Azo bg-primary hoverEffect rounded-[4px]'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            CONNECT WALLET
                        </button>
                    </div>
                    <ul className='flex gap-6 justify-center pt-[20px] sm:pt-[32px]'>
                        <li><a href="#"><TwitterIcon /></a></li>
                        <li><a href="#"><BoatIcon /></a></li>
                        <li><a href="#"><DiamondIcon /></a></li>
                        <li><a href="#"><DiscordIcon /></a></li>
                        <li><a href="#"><MaxIcon /></a></li>
                        <li><a href="#"><TelegramIcon /></a></li>
                    </ul>
                    <h1 className='font-Azo font-[400] text-xxl md:text-xxxl text-center text-white'>WELCOME <span className='md:block'> TO <span className='text-secondary relative before:absolute before:w-full before:h-[5px] before:bg-primary before:bottom-[0px]'>DOMPKONG</span></span></h1>
                    <p className='text-white text-center pt-[12px] font-Montserrat '>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. <span className='lg:block'>Erat nam molestie. Vita</span></p>
                    <div className="flex flex-col sm:flex-row pt-[30px] justify-center sm:gap-[20px] md:gap-[32px]">
                        <div className='flex justify-center'> <button className='shadow-cardShadow border-none outline-none px-6 py-4 max-w-auto font-Azo bg-primary uppercase rounded-[4px] hoverEffect'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Whitepaper</button></div>
                        <div className='flex justify-center mt-4 sm:mt-0'><button className='shadow-cardShadow border-none outline-none px-6  py-4 font-Azo bg-primary uppercase rounded-[4px] hoverEffect'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Mint</button></div>
                        <div className='flex justify-center mt-4 sm:mt-0'><button className='shadow-cardShadow border-none outline-none px-6  py-4 font-Azo bg-primary uppercase rounded-[4px] hoverEffect'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Opensea</button></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header