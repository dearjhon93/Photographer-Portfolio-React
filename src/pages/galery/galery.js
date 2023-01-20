import React, {useState, useEffect} from 'react';

import './galery-style.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const Galery = () => {

    // const [character, setCharacter] = useState([]);
    // //Servicio para consumir api usando Fech and hooks
    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data.results);
    //             setCharacter(data.results);
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // }, []);

    return(
        <>

        <div className='galery_content'>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
            <img src="https://static-cse.canva.com/blob/691411/00gross_IG_hubs_adriansava.7536b79e.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1556642389-0cd5fd882f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://kevsbest.com/wp-content/uploads/2020/05/5-Best-Photographers-in-Charlotte-1024x694.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt=''/>
            </SwiperSlide>
        </Swiper>
        </div>

        {/* Comentar todo que es de portafolio */}
        {/* <div className="wrapper">
            <div className='title'>
            <h1>GALERíA</h1>
            <div className="line"></div>
            </div>

            
        </div> */}

        </>
    )
}
export default Galery;