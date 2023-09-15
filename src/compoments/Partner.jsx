import React from 'react'
import Image1 from '../assets/images/webp/Partner_1.webp'
import Image2 from '../assets/images/webp/Partner_2.webp'
import Image3 from '../assets/images/webp/Partner_3.webp'
import Image4 from '../assets/images/webp/Partner_4.webp'
import Slider from 'react-slick'




const Partner = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 0,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        pouseonhover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    };
    return (
        <>
            <section className='bg-black'>

                <div className="cotainer mx-auto max-w-[1140px] px-3 overflow-hidden py-[40px] sm:py[60] md:py-[90px]">
                    <h2 className='font-Azo font-[400] text-xxl md:text-xxxl text-center text-white pb-[10px] sm:pb-[20px] md:pb-[40px] lg:pb-[50px]'>Partners</h2>
                    <Slider {...settings} className='flex gap-8 lg:mx-[-18px]'>
                        <div className=' flex justify-center items-center px-6'>
                            <img className='h-[135px] w-full cursor-poiner' src={Image1} alt="bitcoin" />
                        </div>
                        <div className=' flex justify-center items-center px-6'>
                            <img className='h-[135px] w-full cursor-poiner' src={Image2} alt="bitcoin" />
                        </div>
                        <div className=' flex justify-center items-center px-6'>
                            <img className='h-[135px] w-full cursor-poiner' src={Image3} alt="bitcoin" />
                        </div>
                        <div className=' flex justify-center items-center px-6'>
                            <img className='h-[135px] w-full cursor-poiner ' src={Image4} alt="bitcoin" />
                        </div>
                        <div className=' flex justify-center items-center px-6'>
                            <img className='h-[135px] w-full cursor-poiner ' src={Image1} alt="bitcoin" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}


export default Partner