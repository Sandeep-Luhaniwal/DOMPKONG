import React from 'react'
import Image1 from '../assets/images/webp/boats.webp'
import Image2 from '../assets/images/webp/cars.webp'
import Image3 from '../assets/images/webp/watchs.webp'

const About = () => {
    return (
        <>
            <section className='bg-black relative'>
                <div className=' w-[216px] h-[216px] rounded-full bg-primary absolute blur-[131px] top-1/2 right-1/2 md:top-1/3 md:right-1/4 ' ></div>
                <div className="cotainer mx-auto max-w-[1140px] relative px-3">
                    <div className="flex flex-wrap pt-8 sm:pt-[60px] md:pt-[130px] pb-[90px] overflow-hidden">
                        <div className="md:w-1/3 lg:w-1/2" data-aos="fade-right" data-aos-duration="1500">
                            <h2 className='font-Azo font-[400] text-xxl md:text-xxxl text-white mb-0'>about</h2>
                            <p className='text-white text-sm font-Montserrat font-[400] !pt-[-10px]'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                        </div>
                        <div className='w-full md:w-2/3 lg:w-1/2 pt-[100px] pb-[150px] md:py-0'>
                            <div className='w-full m-auto box-border ms-[25px] md:ms-[35px] !rotate-[18deg]' data-aos="zoom-in-up" data-aos-duration="1000">
                                <div class="entire-content m-auto w-[170px] relative pt-[25px] md:pt-[35px] cursor-pointer">
                                    <div class="content-carrousel w-full absolute float-right">
                                        <figure class="border-[3px] border-primary rounded-[8px] w-[228px] h-[155px] overflow-hidden absolute"><img src={Image1} alt="" /></figure>
                                        <figure class="border-[3px] border-primary rounded-[8px] w-[228px] h-[155px] overflow-hidden absolute"><img src={Image2} alt="" /></figure>
                                        <figure class="border-[3px] border-primary rounded-[8px] w-[228px] h-[155px] overflow-hidden absolute"><img src={Image3} alt="" /></figure>
                                        <figure class="border-[3px] border-primary rounded-[8px] w-[228px] h-[155px] overflow-hidden absolute"><img src={Image1} alt="" /></figure>
                                        <figure class="border-[3px] border-primary rounded-[8px] w-[228px] h-[155px] overflow-hidden absolute"><img src={Image2} alt="" /></figure>
                                        <figure class="border-[3px] border-primary rounded-[8px] w-[228px] h-[155px] overflow-hidden absolute"><img src={Image3} alt="" /></figure>
                                        <figure class="border-[3px] border-primary rounded-[8px] w-[228px] h-[155px] overflow-hidden absolute"><img src={Image2} alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About