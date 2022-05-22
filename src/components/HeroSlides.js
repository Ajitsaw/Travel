import SwiperBox from "./ui/SwiperBox"

export default function HeroSlides(props) {
    return (
        <SwiperBox>
            <div className="single">
                <div className="img">
                    <img src={`../images/${props.img}`} alt={props.title} />
                </div>
                <div className="text">
                    <h5>
                        {props.subtitle}
                    </h5>
                    <h2>
                       {props.title}
                    </h2>
                    <button className='button button--blue'>View Trip</button>
                </div>
            </div>
        </SwiperBox>
    )
}

HeroSlides.displayName = 'SwiperSlide';