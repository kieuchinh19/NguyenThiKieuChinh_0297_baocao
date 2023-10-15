import dataslide from '../../../datatest/Slidershow.json';
function Slidershow() {
    const listSlide = dataslide.data;
    return (
        <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner">
                {listSlide.map(function (slide, index) {
                    if (index === 0) {
                        return (
                            <div className="carousel-item active">
                                <img src={slide.image} className="d-block w-100" alt={slide.name} />
                            </div>);
                    }
                    else {
                        return (
                            <div className="carousel-item">
                                <img src={slide.image} className="d-block w-100" alt={slide.name} />
                            </div>);
                    }
                })}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default Slidershow;