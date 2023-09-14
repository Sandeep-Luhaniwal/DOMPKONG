import React from 'react'
import Image1 from '../assets/images/png/boats.png'
import Image2 from '../assets/images/png/cars.png'
import Image3 from '../assets/images/png/watchs.png'

const About = () => {
    return (
        <>
            <section className='bg-black'>
                <div className="cotainer mx-auto max-w-[1140px] px-3">
                    <div className="flex flex-wrap pt-[130px] pb-[90px] overflow-hidden">
                        <div className="md:w-1/2">
                            <h2 className='font-Azo font-[400] text-xxl md:text-xxxl text-white mb-0'>about</h2>
                            <p className='text-white text-sm font-Montserrat font-[400] !pt-[-10px]'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                        </div>
                        <div className='w-full md:w-1/2 pt-[100px] pb-[150px] md:py-0'>
                            <section id="slideshow" className='w-full'>
                                <div class="entire-content">
                                    <div class="content-carrousel">
                                        <figure class="shadow"><img src={Image1} alt="" /></figure>
                                        <figure class="shadow"><img src={Image2} alt="" /></figure>
                                        <figure class="shadow"><img src={Image3} alt="" /></figure>
                                        <figure class="shadow"><img src={Image1} alt="" /></figure>
                                        <figure class="shadow"><img src={Image2} alt="" /></figure>
                                        <figure class="shadow"><img src={Image3} alt="" /></figure>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About