import React from "react";
import { Carousel } from "react-bootstrap";
import kitchen from "../../assets/image/Kitchen.jpg";
import Shop from "../../assets/image/Shop.jpg";
import Gaming from "../../assets/image/Gaming.jpg";
import Beauty from "../../assets/image/Beauty.jpg";
import Toys from "../../assets/image/Toys.jpg";

function HomeCarousel() {
	return (
		<Carousel fade={true} pause={false} indicators={false}>
			<Carousel.Item interval={3000}>
				<img
					className="home__image d-block w-100"
					src={kitchen}
					alt="First slide"
				/>
			</Carousel.Item>

			<Carousel.Item interval={3000}>
				<img
					className="home__image d-block w-100"
					src={Shop}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="home__image d-block w-100"
					src={Gaming}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="home__image d-block w-100"
					src={Beauty}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="home__image d-block w-100"
					src={Toys}
					alt="First slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
}

export default HomeCarousel;
