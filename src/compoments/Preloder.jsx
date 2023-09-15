import React, { useEffect, useState } from 'react'
import reloder_img from '../assets/images/png/img_1.png'

function Preloder() {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 2500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <>
            {loder ? (
                <section className="bg-black top-0 z-[999] start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="flex justify-center">
                        <div className=" relative flex justify-center items-center">
                            <img className="w-9/12 xs:w-6/12 md:w-7/12 Preloader_img animation_preloader mx-auto " src={reloder_img} alt="" />
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </>
    );
}

export default Preloder
