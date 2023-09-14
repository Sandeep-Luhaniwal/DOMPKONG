import React, { useState } from 'react'
import mintNft from '../assets/images/png/Mint.png'
import gradian1 from '../assets/images/png/gradian_top.png'
import gradian2 from '../assets/images/png/gradian_bottom.png'

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
            <div className="bg-[url('/src/assets/images/png/Bg_mint.png')] bg-no-repeat bg-center bg-cover relative overflow-hidden">
                <div className='absolute w-full top-0'>
                    <img src={gradian1} alt="gradian" />
                </div>
                <div className='absolute w-full bottom-0'>
                    <img src={gradian2} alt="gradian" />
                </div>
                <div className="w-[173px] h-[173px] rounded-full bg-primary absolute top-[90px] left-0 blur-[146px] "></div>
                <div className="w-[296px] h-[296px] rounded-full bg-primary absolute top-[40%] right-[-30px] blur-[146px] "></div>
                <div className='container mx-auto max-w-[1140px] relative z-20'>
                    <div className="flex flex-wrap pt-[30px] sm:pt-[45px] md:pt-[70px] md:pb-[50px] items-center">
                        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                            <img className='max-h-[800px] h-full w-full max-w-[358px]' src={mintNft} alt="mintnft" />
                        </div>
                        <div className="w-full md:w-1/2 pt-5 md:pt-0">
                            <h2 className='font-Azo font-[400] text-xxl md:text-xxxl text-center text-white'>Mint NFT</h2>
                            <div className='flex flex-col sm:flex-row justify-between pt-[20px] sm:pt-[30px] md:pt-[50px]'>
                                <p className='text-white text-center sm:text-start text-lg sm:text-xxl font-Montserrat font-[900]'>9999 <span className='block text-sm font-Montserrat font-[400]'>of 10,000 minted</span></p>
                                <p className='text-white text-center sm:text-start text-lg sm:pe-[52px] sm:text-xxl font-Montserrat font-[900] pt-4 sm:pt-0'>.2 ETH <span className='block text-sm font-Montserrat font-[400]'>per NFT</span></p>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between pt-[16px] md:pt-[30px]'>
                                <p className='text-white text-center sm:text-start text-lg sm:text-xxl font-Montserrat font-[900]'>Max 9 <span className='block text-sm font-Montserrat font-[400]'>NFTs per transaction</span></p>
                                <p className='text-white text-center sm:text-start text-lg sm:text-xxl font-Montserrat font-[900] pt-4 sm:pt-0'>Max 2 <span className='block text-sm font-Montserrat font-[400]'>Transaction per wallet</span></p>
                            </div>
                            <div className=' flex gap-[12px] sm:gap-[18px] justify-center md:justify-start pt-[16px] sm:pt-[32px] md:pt-[48px] '>
                                <button className='bg-white text-xxl font-Montserrat font-[900] border-0 outline-none px-[30px] rounded-[4px]' onClick={decrement}>-</button>
                                <div className='text-white text-xxl font-Montserrat font-[900] border-[1px] border-white rounded-[4px] outline-none px-[40px] sm:px-[70px]  lg:px-[136px]'>
                                    <div className='flex'><span id='SpanNone'>0</span>{count}</div>
                                </div>
                                <button className='bg-white text-xxl font-Montserrat font-[900] border-0 outline-none px-[30px] rounded-[4px]' onClick={increment}>+</button>
                            </div>
                            <div className="flex justify-center md:justify-start pt-[22px] md:pt[30px] ">
                                <button className='shadow-cardShadow border-none outline-none px-[100px] sm:px-[138px] lg:px-[209px] py-[16px] font-Azo bg-primary  rounded-[4px]'>MINT NOW</button>
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