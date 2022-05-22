export default function BlogPost(props) {
    return (
        <div className="single">
            <div className="bg">
                <img src={`../images/${props.img}`} alt={props.title} />
            </div>
            <div className="text">
                <h4>{props.title}</h4>
                {props.description}
            </div>
        </div>
    )
}