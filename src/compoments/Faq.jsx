import { Accordion } from 'flowbite-react'
import React from 'react'
import { BoatIcon, DiamondIcon, DiscordIcon, MaxIcon, TelegramIcon, TwitterIcon } from './Icon';

const Faq = () => {
    return (
        <>
            <section className="bg-[url('/src/assets/images/png/bg_faq.png')] relative bg-no-repeat bg-cover overflow-hidden" >
                <div className="w-[132px] h-[132px] rounded-full bg-primary absolute top-[30%] left-[50%] blur-[136px] "></div>
                <div className="w-[247px] h-[247px] rounded-full bg-primary absolute bottom-[-60px] left-[-60px] blur-[146px] "></div>
                <div className="cotainer mx-auto max-w-[1140px] px-3 relative z-20 pt-[30px] sm:pt-[70px] md:pt-[100px]">
                    <h2 className='font-Azo font-[400] text-xxl md:text-xxxl text-center text-white pb-[10px] sm:pb-[20px] md:pb-[30px]'>FAqs</h2>
                    <Accordion className='max-w-[896px] mx-auto'>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-primary before:bottom-0 !before:shadow-faqShadow before:blur-[1px] pt-6 pb-4'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Arcu faucibus diam feugiat magna etiam.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-primary before:bottom-0 !before:shadow-faqShadow pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Fermentum tortor aenean.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-primary before:bottom-0 !before:shadow-faqShadow pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Dictum est amet sollicitudin.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4 '>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-primary before:bottom-0 !before:shadow-faqShadow pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Sed vulputate mi faucibus.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-primary before:bottom-0 !before:shadow-faqShadow pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Commodo placerat ultricies.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-primary before:bottom-0 !before:shadow-faqShadow pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Nunc amet cursus morbi donec.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                    </Accordion>
                </div >
                <div className='pt-[100px] relative z-20 sm:pt-[200px] md:pt-[300px] lg:pt-[350px] pb-[20px] sm:pb-[27px]'>
                    <div className="cotainer mx-auto max-w-[1140px] px-3 relative z-20">
                        <ul className='flex justify-center gap-5 sm:gap-6'>
                            <li><a href="" className='color'><TwitterIcon /></a></li>
                            <li><a href="" className='color'><BoatIcon /></a></li>
                            <li><a href="" className='color'><DiamondIcon /></a></li>
                            <li><a href="" className='color'><DiscordIcon /></a></li>
                            <li><a href="" className='color'><MaxIcon /></a></li>
                            <li><a href="" className='color'><TelegramIcon /></a></li>
                        </ul>
                    </div>
                </div>
                <div className=' relative before:absolute before:h-[1px] before:w-[100%] before:bg-white pb-[30px] sm:pb-[56px] ' ></div>
            </section >
            
        </>
    )
}

export default Faq