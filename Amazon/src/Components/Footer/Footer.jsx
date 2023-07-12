import React from "react";
import "./Footer.css";
// import "../../assets/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import flag from "../../assets/image/us-flag.jpg";
import { Link } from "react-router-dom";

function Footer() {
	const LinkItems = [
		{
			title: "Get to Know Us",
			items: [
				{ linkUrl: "https://www.amazon.jobs/en/", linkName: "Careers" },
				{ linkUrl: "#", linkName: "Amazon Newsletter" },
				{ linkUrl: "#", linkName: "About Amazon" },
				{ linkUrl: "#", linkName: "Accessibility" },
				{ linkUrl: "#", linkName: "Sustainability" },
				{ linkUrl: "#", linkName: "Press Center" },
				{ linkUrl: "#", linkName: "Investor Relations" },
				{ linkUrl: "#", linkName: "Amazon Devices" },
				{ linkUrl: "#", linkName: "Amazon Science" },
			],
		},

		{
			title: "Make Money with Us",

			items: [
				{ linkUrl: "#", linkName: "Sell products on Amazon" },
				{ linkUrl: "#", linkName: "Sell apps on Amazon" },
				{ linkUrl: "#", linkName: "Supply to Amazon" },
				{ linkUrl: "#", linkName: "Protect & Build Your Brand" },
				{ linkUrl: "#", linkName: "Become an Affiliate" },
				{ linkUrl: "#", linkName: "Become a Delivery Driver" },
				{ linkUrl: "#", linkName: "Start a Package Delivery Business" },
				{ linkUrl: "#", linkName: "Advertise Your Products" },
				{ linkUrl: "#", linkName: "Self-Publish with Us" },
				{ linkUrl: "#", linkName: "Host an Amazon Hub" },
				{ linkUrl: "#", linkName: "› See More Ways to Make Money" },
			],
		},

		{
			title: "Amazon Payment Products",
			items: [
				{ linkUrl: "#", linkName: "Amazon Visa" },
				{ linkUrl: "#", linkName: "Amazon Store Card" },
				{ linkUrl: "#", linkName: "Amazon Secured Card" },
				{ linkUrl: "#", linkName: "Amazon Business Card" },
				{ linkUrl: "#", linkName: "Shop with Points" },
				{ linkUrl: "#", linkName: "Credit Card Marketplace" },
				{ linkUrl: "#", linkName: "Reload Your Balance" },
				{ linkUrl: "#", linkName: "Amazon Currency Converter" },
			],
		},
		{
			title: "Let Us Help You",
			items: [
				{ linkUrl: "#", linkName: "Amazon and COVID-19" },
				{ linkUrl: "#", linkName: "Your Account" },
				{ linkUrl: "#", linkName: "Your Orders" },
				{ linkUrl: "#", linkName: "Shipping Rates & Policies" },
				{ linkUrl: "#", linkName: "Amazon Prime" },
				{ linkUrl: "#", linkName: "Returns & Replacements" },
				{ linkUrl: "#", linkName: "Manage Your Content and Devices" },
				{ linkUrl: "#", linkName: "Your Recalls and Product Safety Alerts" },
				{ linkUrl: "#", linkName: "Help" },
			],
		},
	];

	return (
		<>
			<div className="Footer">
				<div className="backToTop d-flex justify-content-center ">
					<a className="text-center text-white my-3" href="#">
						Back to top
					</a>
				</div>
				<div className="Footer__wrapper container d-flex">
					{LinkItems.map((item, i) => (
						<ul key={i} className="col col-md">
							<h6 className="mt-4 mb-3">{item.title}</h6>
							{item.items.map((links, LinksIndex) => (
								<li key={LinksIndex} className="mb-2">
									<Link to={links.linkUrl}>{links.linkName}</Link>
								</li>
							))}
						</ul>
					))}
				</div>
				<div className="Footer__lang mt-4 me-5 text-center d-flex justify-content-center">
					<Link to="#">
						<img
							className="footer__logo pt-3"
							src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt=""
						/>
					</Link>
					<div className="d-flex lang">
						<select onChange="">
							<option value="en ">🌐︎ English</option>
							<option value="es">Spanish</option>
						</select>
						<div className="border border-secondary ms-3 p-2 mx-2  ">
							<span>
								<img className="flag" src={flag} alt="USA Flag" />{" "}
							</span>
							<Link>
								<span className=""> United States</span>
							</Link>
						</div>
					</div>
				</div>
				<br />
				<br />
				<center className="build_by">
					<div className="fs-4">Build By: Nardos Moges</div>
				</center>
			</div>
		</>
	);
}

export default Footer;
