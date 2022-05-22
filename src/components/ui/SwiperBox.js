
import { SwiperSlide } from 'swiper/react';

export default function SwiperBox(props) {
    return (
        <SwiperSlide>
            {props.children}
        </SwiperSlide>
    )
}