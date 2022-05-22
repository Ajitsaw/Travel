
export default function Navbar() {
    return (
        <nav className="app--nav">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-auto"> 
                        <div className="logo">
                            <img src="../images/logo.webp" alt="logo" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="app--nav__items">
                            {/* <div className="search">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
                            </div>
                            <div className="kart">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"/></svg>
                                <div className="kart__count">
                                    0
                                </div>
                            </div> */}
                            <button className="button button--secondary">Join Our Trip</button>
                        </div>
                        
                    </div> 
                </div>
                
                
            </div>
            
        </nav>
    )
}