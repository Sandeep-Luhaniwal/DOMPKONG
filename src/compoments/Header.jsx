import React from 'react'
import { BoatIcon, DiamondIcon, DiscordIcon, MaxIcon, TelegramIcon, TwitterIcon } from './Icon'
import Image1 from '../assets/images/webp/monkey_1.webp'
import Image2 from '../assets/images/webp/monkey_2.webp'
import Image3 from '../assets/images/webp/monkey_3.webp'
import Image4 from '../assets/images/webp/header-left.webp'
import Image5 from '../assets/images/webp/header-right.webp'

const Header = () => {
    return (
        <>
            <section className="bg-[url('/src/assets/images/webp/Bg_header.webp')] bg-no-repeat bg-center min-h-[815px] overflow-hidden bg-cover relative">
                <div className='absolute right-[20%] translate-x-[-10%] sm:right-[40%] lg:right-[45%] lg:translate-x-[50%] bottom-0 headerMonkey'>
                    <img src={Image1} alt="" className='w-full' />
                </div>
                <div className='absolute right-[0%] translate-x-[30%] sm:right-[30%] sm:translate-x-[42%] lg:right-[27%] lg:translate-x-[50%] bottom-0  headerMonkey2'>
                    <img src={Image2} alt="" className='w-full' />
                </div>
                <div className='absolute hidden sm:block sm:right-[15%] sm:translate-x-[78%] lg:right-[6%] lg:translate-x-[50%] bottom-0 headerMonkey3'>
                    <img src={Image3} alt="" />
                </div>
                <div className='absolute top-[-5%] sm:top-[-10%] md:top-[-4%] lg:top-0 left-[-5%] lg:left-0 headershadow'>
                    <img src={Image4} alt="" className='w-full max-h-[185px]' />
                </div>
                <div className='absolute hidden sm:block sm:top-[-10%] md:top-0 right-[-5%] md:right-[-10%]  lg:right-0 headershadow2'>
                    <img src={Image5} alt="" className='w-full max-h-[185px]' />
                </div>
                <div className="container min-h-[100vh]: mx-auto max-w-[1140px] relative z-10 ">
                    <div className="flex pt-[28px] justify-end pe-1">
                        <button className='shadow-cardShadow border-none outline-none px-6 py-4 font-Azo bg-primary hoverEffect inline-block duration-[0.5s] scale-[1] rounded-[4px] hover:bg-btnHover hover:text-primary hover:scale-[1.1] hover:rotate-[-2deg]'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            CONNECT WALLET
                        </button>
                    </div>
                    <div className='loder'>
                        <ul className='flex gap-6 justify-center py-[16px] sm:pt-[32px]'>
                            <li className='iconColor'><a href="https://twitter.com/" target='/'><TwitterIcon /></a></li>
                            <li className='iconColor'><a href="https://www.boat-lifestyle.com/" target='/'><BoatIcon /></a></li>
                            <li className='iconColor'><a href="https://www.caratlane.com/" target='/'><DiamondIcon /></a></li>
                            <li className='iconColor'><a href="https://discord.com/" target='/'><DiscordIcon /></a></li>
                            <li className='iconColor'><a href="https://www.maxfashion.in/in/en/" target='/'><MaxIcon /></a></li>
                            <li className='iconColor'><a href="https://telegram.org/" target='/'><TelegramIcon /></a></li>
                        </ul>
                        <h1 className='font-Azo font-[400] text-xxl md:text-xxxl text-center text-white'>WELCOME <span className='md:block mt-[-20px]'> TO <span className='text-secondary relative before:absolute before:w-full before:h-[5px] before:bg-primary before:bottom-[0px]' >DOMPKONG</span></span></h1>
                        <p className='text-white text-center pt-[12px] font-Montserrat '>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. <span className='lg:block'>Erat nam molestie. Vita</span></p>
                        <div className="flex flex-col sm:flex-row pt-[28px] justify-center sm:gap-[20px] md:gap-[32px]">
                            <div className='flex justify-center'> <button className='shadow-cardShadow border-none outline-none px-6 py-4 max-w-auto font-Azo bg-primary uppercase rounded-[4px] hoverEffect inline-block duration-[0.5s] scale-[1] hover:bg-btnHover hover:text-primary hover:scale-[1.1] hover:rotate-[-2deg]'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Whitepaper</button></div>
                            <div className='flex justify-center mt-4 sm:mt-0'><button className='shadow-cardShadow border-none outline-none px-6  py-4 font-Azo bg-primary uppercase rounded-[4px] hoverEffect inline-block duration-[0.5s] scale-[1] hover:bg-btnHover hover:text-primary hover:scale-[1.1] hover:rotate-[-2deg]'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Mint</button></div>
                            <div className='flex justify-center mt-4 sm:mt-0'><button className='shadow-cardShadow border-none outline-none px-6  py-4 font-Azo bg-primary uppercase rounded-[4px] hoverEffect inline-block duration-[0.5s] scale-[1] hover:bg-btnHover hover:text-primary hover:scale-[1.1] hover:rotate-[-2deg]'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Opensea</button></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header