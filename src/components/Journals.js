import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import JournalPost from "./JournalPost"

// Data 

import Jdata from "../data/journal" 

const journal = Jdata.map(data => {
    return (
        <JournalPost
            key={data.id}
            {...data}
        />
    )
})

export default function Journals(props) {
    
    return (
        <div className="app--journals">
            <div className="bg">
                <img src="../images/map.webp" alt="map" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="content">
                            <h5>Explore the World!</h5>
                            <h2 className="">
                                Lifestyle
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            modules={[Navigation, Autoplay, Pagination]}
                            pagination={{
                                el: '.bullets',
                                bulletActiveClass: 'active',
                                bulletClass: 'slide',
                                modifierClass: '',
                                clickable: true
                            }}
                            speed={600}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            slidesPerView="auto"
                            >
                            {journal}
                            
                        </Swiper>
                        <div className="bullets"></div>
                    </div>
                </div>
            </div>
            <div className="cloud">
                <img src="../images/clouds_slider_1.png" alt="cloud" />
            </div>
        </div>
    )
}