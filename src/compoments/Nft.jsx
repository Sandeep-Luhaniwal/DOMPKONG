import React, { useState } from 'react'
import mintNft from '../assets/images/webp/Mint.webp'
import gradian1 from '../assets/images/webp/gradian_top.webp'
import gradian2 from '../assets/images/webp/gradian_bottom.webp'

const Nft = () => {
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 1)
            setCount(count - 1);
    }
    if (count == 10) {
        document.getElementById("SpanNone").style.display = "none"
    } else if (count == 9) {
        document.getElementById("SpanNone").style.display = "block"
    }

    return (
        <>
            <section className='md:pt-[90px] bg-black'>
                <div className="bg-[url('/src/assets/images/webp/bgmint.webp')] bg-no-repeat bg-center bg-cover relative overflow-hidden">
                    <div className='absolute w-full top-0'>
                        <img src={gradian1} alt="gradian" />
                    </div>
                    <div className='absolute w-full bottom-0'>
                        <img src={gradian2} alt="gradian" />
                    </div>
                    <div className="w-[173px] h-[173px] rounded-full bg-primary absolute top-[90px] left-0 blur-[146px] "></div>
                    <div className="w-[296px] h-[296px] rounded-full bg-primary absolute top-[40%] right-[-30px] blur-[146px] "></div>
                    <div className='container mx-auto max-w-[1140px] relative z-20'>
                        <div className="flex flex-wrap justify-center pt-[30px] sm:pt-[45px] md:pt-[70px] md:pb-[50px] items-center">
                            <div className="w-2/3 md:w-1/2 flex justify-center md:justify-start" data-aos="fade-right" data-aos-duration="1000">
                                <img className='max-h-[800px] h-full w-full max-w-[358px]' src={mintNft} alt="mintnft" />
                            </div>
                            <div className="w-full md:w-1/2 pt-5 md:pt-0" data-aos="fade-left" data-aos-duration="1000">
                                <h2 className='font-Azo font-[400] text-xxl md:text-xxxl text-center text-white'>Mint NFT</h2>
                                <div className='flex justify-between pt-[20px] sm:pt-[30px] md:pt-[50px]'>
                                    <p className='text-white text-lg sm:text-xxl font-Montserrat font-[900]'>9999 <span className='block text-sm font-Montserrat font-[400]'>of 10,000 minted</span></p>
                                    <p className='text-white text-lg pe-[52px] sm:text-xxl font-Montserrat font-[900]'>.2 ETH <span className='block text-sm font-Montserrat font-[400]'>per NFT</span></p>
                                </div>
                                <div className='flex justify-between pt-[16px] md:pt-[30px]'>
                                    <p className='text-white text-lg sm:text-xxl font-Montserrat font-[900]'>Max 9 <span className='block text-sm font-Montserrat font-[400]'>NFTs per transaction</span></p>
                                    <p className='text-white text-lg ps-[52px] sm:text-xxl font-Montserrat font-[900]'>Max 2 <span className='block text-sm font-Montserrat font-[400]'>Transaction per wallet</span></p>
                                </div>
                                <div className=' flex gap-[12px] sm:gap-[18px] justify-center md:justify-start pt-[16px] sm:pt-[32px] md:pt-[48px] '>
                                    <button className='bg-white text-xxl font-Montserrat font-[900] border-0 outline-none px-[30px] rounded-[4px] hover:text-primary hover:bg-[#046fb7]' onClick={decrement}>-</button>
                                    <div className='text-white text-xxl font-Montserrat font-[900] border-[1px] border-white rounded-[4px] outline-none px-[40px] sm:px-[70px]  lg:px-[136px]'>
                                        <div className='flex'><span id='SpanNone'>0</span>{count}</div>
                                    </div>
                                    <button className='bg-white text-xxl font-Montserrat font-[900] border-0 outline-none px-[30px] rounded-[4px] hover:text-primary hover:bg-[#046fb7]' onClick={increment}>+</button>
                                </div>
                                <div className="flex justify-center md:justify-start pt-[22px] md:pt[30px] pb-8 md:pb-0">
                                    <button className='shadow-cardShadow border-none outline-none px-[100px] sm:px-[138px] lg:px-[209px] py-[16px] font-Azo bg-primary  rounded-[4px]  hoverEffect hover:scale-[1]'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        MINT NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nft