import React from 'react'
import { ProductsCard } from './Helper';

const Utilities = () => {
    return (
        <>
            <section className='bg-black'>
                <div className="container mx-auto max-w-[1140px] pb-[20px] sm:pb-[80px] md:pb-[120px]">
                    <h2 className='font-Azo text-white text-center text-xxl lg:text-xxxl'>Utilities</h2>
                    <div className='flex flex-wrap justify-center pt-[8px] sm:pt-[18px] md:pt-[38px]'>
                        {ProductsCard.map((data) => {
                            return (
                                <div className='w-full sm:w-1/2 md:w-1/3 px-3 py-4'>
                                    <div className='relative overflow-hidden cursor-pointer border-[1px] border-solid border-borderColor rounded-[16px] bg-bgborderColor hover:bg-primary text-white hover:text-black hover:shadow-cardShadow'>
                                        <div className="w-[91px] h-[91px] rounded-full bg-white absolute top-[-30px] right-[-30px] blur-[76px] "></div>
                                        <div className="w-[91px] h-[91px] rounded-full bg-white absolute bottom-[0px] left-[0px] blur-[94px] "></div>
                                        <div className="relative z-20 p-[20px] ">
                                            <div className="flex justify-center">
                                                <img src={data.img} alt="img" />
                                            </div>
                                            <h3 className=' font-Montserrat text-center font-[600] text-xl py-4'>{data.heading}</h3>
                                            <p className='font-Montserrat text-center font-[400] '>{data.para}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Utilities