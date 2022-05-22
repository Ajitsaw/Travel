import advData from "../data/adventure"

const data = advData.map(adv => {
    return (
        <div className="container" key={adv.id}>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="image">
                        <img src={`../images/${adv.img}`} alt={adv.title} />
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                    <div className="text">
                        <h2>
                            {adv.title}
                        </h2>
                        <h5>
                            {adv.subtitle}
                        </h5>
                        <p>
                            {adv.description1}
                        </p>
                        <p>
                            {adv.description1}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default function Adventure(props) {
    return (
        <div className="app--adventure">
            {data}
        </div>
    )
}