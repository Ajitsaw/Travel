import SwiperBox from "./ui/SwiperBox"

export default function JournalPost(props) {
    console.log(props)
    return (
        <SwiperBox>
            <div className="single">
                <div className="img">
                    <img src={`../images/${props.img}`} alt={props.title} />
                </div>
                <div className="text">
                    <div className="pin">
                        <img src="../images/pin.png" alt="pin" />
                        {props.location}
                    </div>
                    <h4>{props.title}</h4>
                    <div className="info">
                        {props.date}
                    </div>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </SwiperBox>
    )
}

JournalPost.displayName = 'SwiperSlide';