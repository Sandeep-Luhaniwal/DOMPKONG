import React, { useState } from 'react'
import firstimage from "../assets/images/webp/img_1.webp";
import secondimage from "../assets/images/webp/mokey.webp";
import thirdimage from "../assets/images/webp/mokey2.webp";
import fourthimage from "../assets/images/webp/mokey3.webp";
import fifthimage from "../assets/images/webp/mokey4.webp";
import siximage from "../assets/images/webp/img_6.webp";
import sevenimage from "../assets/images/webp/img_7.webp";
import eightimage from "../assets/images/webp/mokey8.webp";
import nineimage from "../assets/images/webp/mokey9.webp";
import tenimage from "../assets/images/webp/mokey10.webp";
import firstcenter from "../assets/images/webp/img_1_center.webp";
import secondcenter from "../assets/images/webp/img_2_center.webp";
import thirdcenter from "../assets/images/webp/monkey3.webp";
import fouthcenter from "../assets/images/webp/monkey4.webp";
import fivecenter from "../assets/images/webp/img_5_center.webp";
import sixcenter from "../assets/images/webp/img_6_center.webp";
import sevencenter from "../assets/images/webp/img_7_center.webp";
import eightcenter from "../assets/images/webp/img_8_center.webp";
import ninecenter from "../assets/images/webp/img_9_center.webp";
import tencenter from "../assets/images/webp/img_10_center.webp";
import kongs from "../assets/images/webp/Kongs.webp";


const Kongs = () => {
    const [activetab, setActiveTab] = useState(true);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className='bg-black md:min-h-[1040px] min-h-[670px] sm:min-h-[920px] overflow-x-hidden py-3'>
                <div className='flex flex-col justify-center items-center relative'>
                    <h2 className='font-Azo font-[400] text-xxl md:text-[60px] lg:text-xxxl text-center text-white pt-[10px] sm:pt-[20px] md:pt-[30px]'>tHE kONGS</h2>
                    <div className="flex flex-col md:flex mt-3 sm:mt-0">
                        <ul className='mb-0 px-2 md:px-0 bg-black z-20 flex gap-3'>
                            <li onClick={() => handleTabClick("First")} className="cursor-pointer">
                                <span className={`md:absolute md:top-0 md:left-1 lg:left-[-20px] z-20 ${activetab === "First" ? "" : ""}`}>
                                    <img src={firstimage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05] transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Second")} className="cursor-pointer">
                                <span className={`md:absolute md:top-[210px] md:left-[4px] lg:left-[64px] z-20 ${activetab === "Second" ? "" : ""}`}>
                                    <img src={secondimage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05] transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Thrid")} className="cursor-pointer">
                                <span className={`md:absolute md:top-[420px] md:left-[4px] lg:left-[174px] z-20 ${activetab === "Thrid" ? "" : ""}`}>
                                    <img src={thirdimage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05] transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Fourth")} className="cursor-pointer">
                                <span className={`md:absolute md:top-[630px] md:left-[4px] lg:left-[64px] z-20 ${activetab === "Fourth" ? "" : ""}`}>
                                    <img src={fourthimage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05] transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Five")} className="cursor-pointer">
                                <span className={`md:absolute md:top-[840px] md:left-[4px] lg:left-[-20px] z-20 ${activetab === "Five" ? "" : ""}`}>
                                    <img src={fifthimage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05] transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Six")} className="cursor-pointer hidden md:block">
                                <span className={`md:absolute md:md:right-1 lg:right-[-20px] top-0 z-20 ${activetab === "Six" ? " " : ""}`}>
                                    <img src={siximage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05] transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Seven")} className="cursor-pointer hidden md:block">
                                <span className={`md:absolute md:top-[210px] md:right-1 lg:right-[64px] z-20 ${activetab === "Seven" ? "" : ""}`}>
                                    <img src={sevenimage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05] transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Eight")} className="cursor-pointer hidden md:block">
                                <span className={`md:absolute md:top-[420px] md:right-1 lg:right-[174px] z-20 ${activetab === "Eight" ? "" : ""}`}>
                                    <img src={eightimage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05] transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Nine")} className="cursor-pointer hidden md:block">
                                <span className={`md:absolute md:top-[630px] md:right-1 lg:right-[64px] z-20 ${activetab === "Nine" ? "" : ""}`}>
                                    <img src={nineimage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05] transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Ten")} className="cursor-pointer hidden md:block">
                                <span className={`md:absolute md:top-[840px] md:right-1 lg:right-[-20px] z-20 ${activetab === "Ten" ? "" : ""}`}>
                                    <img src={tenimage} alt="" className='w-full max-w-[180px] hover:shadow-hoverimgShadow hover:scale-[1.05]  transition-all duration-500 rounded-[8px] border-[4px] border-primary' />
                                </span>
                            </li>
                        </ul>
                        <div className='relative md:hidden'>
                            <ul className='px-2 z-20 flex gap-3 absolute bottom-[-350px] sm:bottom-[-550px] h-full'>
                                <li onClick={() => handleTabClick("Six")} className="cursor-pointer ">
                                    <span className={`md:absolute md:md:right-1 lg:right-[-20px] top-0 z-20 ${activetab === "Six" ? " " : ""}`}>
                                        <img src={siximage} alt="" className='w-full max-w-[180px] rounded-[8px] border-[4px] border-primary' />
                                    </span>
                                </li>
                                <li onClick={() => handleTabClick("Seven")} className="cursor-pointer">
                                    <span className={`md:absolute md:top-[210px] md:right-1 lg:right-[64px] z-20 ${activetab === "Seven" ? "" : ""}`}>
                                        <img src={sevenimage} alt="" className='w-full max-w-[180px] rounded-[8px] border-[4px] border-primary' />
                                    </span>
                                </li>
                                <li onClick={() => handleTabClick("Eight")} className="cursor-pointer">
                                    <span className={`md:absolute md:top-[420px] md:right-1 lg:right-[174px] z-20 ${activetab === "Eight" ? "" : ""}`}>
                                        <img src={eightimage} alt="" className='w-full max-w-[180px] rounded-[8px] border-[4px] border-primary' />
                                    </span>
                                </li>
                                <li onClick={() => handleTabClick("Nine")} className="cursor-pointer">
                                    <span className={`md:absolute md:top-[630px] md:right-1 lg:right-[64px] z-20 ${activetab === "Nine" ? "" : ""}`}>
                                        <img src={nineimage} alt="" className='w-full max-w-[180px] rounded-[8px] border-[4px] border-primary' />
                                    </span>
                                </li>
                                <li onClick={() => handleTabClick("Ten")} className="cursor-pointer">
                                    <span className={`md:absolute md:top-[840px] md:right-1 lg:right-[-20px] z-20 ${activetab === "Ten" ? "" : ""}`}>
                                        <img src={tenimage} alt="" className='w-full max-w-[180px] rounded-[8px] border-[4px] border-primary' />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=' w-full flex justify-center'>
                        <div className='flex justify-center relative'>
                            <div className="flex justify-center items-center absolute top-[0px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] ">
                                <img src={kongs} alt="" className='lg:max-w-[786px] md:max-w-[600px] w-full' />
                            </div>
                            {activetab === "First" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center'>
                                        <img src={firstcenter} alt="" className='w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                            {activetab === "Second" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center'>
                                        <img src={secondcenter} alt="" className='w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                            {activetab === "Thrid" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center '>
                                        <img src={thirdcenter} alt="" className='w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                            {activetab === "Fourth" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center'>
                                        <img src={fouthcenter} alt="" className='w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                            {activetab === "Five" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center'>
                                        <img src={fivecenter} alt="" className='w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                            {activetab === "Six" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center'>
                                        <img src={sixcenter} alt="" className='w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                            {activetab === "Seven" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center'>
                                        <img src={sevencenter} alt="" className='w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                            {activetab === "Eight" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center'>
                                        <img src={eightcenter} alt="" className='md:max-w-[512px] w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                            {activetab === "Nine" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center'>
                                        <img src={ninecenter} alt="" className='w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                            {activetab === "Ten" && (
                                <div className="flex justify-center items-center absolute top-[0px] md:left-[-420px] w-[330px] sm:w-[600px] md:w-[786px] md:h-[700px] bg-black">
                                    <div className='flex justify-center'>
                                        <img src={tencenter} alt="" className='w-full lg:min-w-[600px]' />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kongs