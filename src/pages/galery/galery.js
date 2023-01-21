// import React, {useState, useEffect} from 'react';
import React from 'react';

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
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/wedding-rings_C1ZAW5IMSC.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/girl-outdoor_XILJACKELC.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/husky-animal_SLL65ROOYO.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/dog-puppy_X8VPPWVKKY.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/dog-puppy_S7MVXDAAI7.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/urban-fashion_TQAKNY0XO2.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/couple-wedding_MMHT9YFRTF.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/woman-urban_F7CW0ZYZD0.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/female-portrait_FLUSUJWTGU.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/bride-groom_DTKNL1GBYT.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/insect-flower_XUHRMUP6FH.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/architecture-column_HLGWGKQBMR.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/sea-ocean_5AQ9OI606F.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/people-man_9AM5RS6ZNC.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/squirrel-nature_KCUEBZJ8DB.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/bride-wedding_ZWY6ZBRNAM.jpg" alt=''/>
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