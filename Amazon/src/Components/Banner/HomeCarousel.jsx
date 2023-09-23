import React from "react";
import { Carousel } from "react-bootstrap";
import kitchen from "../../assets/image/Kitchen.jpg";
import Shop from "../../assets/image/Shop.jpg";
import Gaming from "../../assets/image/Gaming.jpg";
import Beauty from "../../assets/image/Beauty.jpg";
import Toys from "../../assets/image/Toys.jpg";
import Prime from "../../assets/image/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_ (1).jpg";

function HomeCarousel() {
	return (
		<>
			<div className="carousel-container">
				<Carousel fade={true} pause={false} indicators={false} className="thanks">
					<Carousel.Item interval={4000}>
						<img
							className="home__image d-block w-100"
							src={Prime}
							alt="First slide"
						/>
					</Carousel.Item>
	
					<Carousel.Item interval={3000}>
						<img
							className="home__image d-block w-100"
							src={kitchen}
							alt="Second slide"
						/>
					</Carousel.Item>

					<Carousel.Item interval={3000}>
						<img
							className="home__image d-block w-100"
							src={Shop}
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img
							className="home__image d-block w-100"
							src={Gaming}
							alt="Fourth slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img
							className="home__image d-block w-100"
							src={Beauty}
							alt="Fifth slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img
							className="home__image d-block w-100"
							src={Toys}
							alt="Sixth slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
}

export default HomeCarousel;
