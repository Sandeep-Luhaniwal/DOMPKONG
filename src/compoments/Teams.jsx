import React from 'react'
import { TeamMember } from './Helper';
import { InstagramIcon, TwitterIcon2 } from './Icon';

const Teams = () => {
    return (
        <>
            <section className='bg-black'>
                <div className="cotainer mx-auto max-w-[1140px] px-3 relative z-20 md:pt-8">
                    <h2 className='font-Azo font-[400] text-xxl md:text-xxxl text-center text-white pb-[10px] sm:pb-[20px] md:pb-[30px]'>Meet The Team</h2>
                    {TeamMember.map((team) => {
                        return (
                            <div className='w-full flex flex-wrap relative'>
                                <div className='w-[100%] relative z-10 h-[1px] bg-primary shadow-topShadow'>
                                </div>
                                <div className='sm:w-1/2 pt-[18px] md:pt-[34px]'>
                                    <h3 className='text-white text-xl font-Montserrat font-[700]'>{team.name}</h3>
                                    <p className='text-white text-md font-Montserrat font-[400] pt-1 sm:pt-3'>{team.course}</p>
                                    <img className='mt-[12px] sm:mt-[32px] sm:mb-[64px] rounded-[20px]' src={team.img} alt="team member" />
                                </div>
                                <div className='sm:w-1/2 pt-3 sm:pt-[18px] md:pt-[34px]'>
                                    <a href="#" className='text-white text-xl font-Montserrat font-[600]'>{team.link}</a>
                                    <p className='text-white text-md font-Montserrat font-[400] pt-1 sm:pt-3'>{team.model}</p>
                                    <p className='text-white text-sm font-Montserrat font-[400] pt-2 sm:pt-4 md:pt-8'>{team.comment1}</p>
                                    <p className='text-white text-sm font-Montserrat font-[400] pt-3'>{team.comment2}</p>
                                    <ul className='flex pt-5 pb-5 md:pb-0 gap-4'>
                                        <li><a href="#" className=''><InstagramIcon className=" blur-[3px]]" /></a></li>
                                        <li><a href="#"><TwitterIcon2 /></a></li>
                                    </ul>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </section>
        </>
    )
}

export default Teams