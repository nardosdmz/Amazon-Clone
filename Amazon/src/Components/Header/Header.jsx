import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import {
	Container,
	Form,
	Nav,
	NavDropdown,
	Navbar,
	Row,
} from "react-bootstrap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../firebase";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import usFlag from "../../assets/image/us-flag.jpg";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<>
			<Navbar
				style={{ backgroundColor: "#131921" }}
				variant="dark"
				className="p-0"
			>
				<Container fluid>
					<div className="header">
						<Navbar.Brand href="/" className="hov">
							<img
								className="header__logo  m-0 mt-4"
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="Amazone logo"
							/>
						</Navbar.Brand>
						<Nav className="me-auto my-2 my-lg-0">
							<Link className="header__deliveryAddress d-flex hov" href="/">
								<div>
									<LocationOnIcon className="mt-2 pt-1" />
								</div>

								<div>
									<div className="header__optionLineOne">Deliver to</div>

									<div className="header__optionLineTwo"> Choose location</div>
								</div>
							</Link>

							{/* <Form className="header__search">
					<Form.Control
						className="header__searchInput"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onChange={(e) => setsearch(e.target.value)}
					/>
					<SearchIcon className="header__searchIcon" />
				</Form> */}
						</Nav>

						<Form className="header__search ms-3">
							<NavDropdown title="All" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#">All Departments</NavDropdown.Item>
								<NavDropdown.Item href="#">Alexa Skills</NavDropdown.Item>

								<NavDropdown.Item href="#">Amazon Devices</NavDropdown.Item>
								<NavDropdown.Item href="#">App & Games</NavDropdown.Item>
								<NavDropdown.Item href="#">Books</NavDropdown.Item>
								<NavDropdown.Item href="#">
									Clothing, Shoes, Jewerly
								</NavDropdown.Item>
								<NavDropdown.Item href="#">Computers</NavDropdown.Item>
								<NavDropdown.Item href="#">Sports & Outdoor</NavDropdown.Item>
							</NavDropdown>
							<input
								className="header__searchInput py-3"
								type="text"
								placeholder="Search Amazon"
							/>
							<button className="header__searchIcon me-3">
								<SearchIcon />
							</button>
						</Form>

						<div className="header__nav">
							<Link className="hov pt-1">
								<span>
									<img className="flag " src={usFlag} alt="USA Flag" />{" "}
								</span>
								<select
									className="fw-bold"
									style={{
										backgroundColor: "#131921",
										color: "white",
										fontSize: "14px",
										border: "none",
									}}
								>
									<option>EN</option>
									<option>ES</option>
								</select>
							</Link>
							<Link to={!user && "/login"} className="header__clearlink hov">
								<div onClick={handleAuthenticaton} className="header__option">
									<span className="header__optionLineOne">
										Hello {!user ? "Guest" : user.email}
									</span>
									<span className="header__optionLineTwo">
										{user ? "Sign Out" : "Sign In"}
									</span>
								</div>
							</Link>
							<Link to="/orders" className="header__clearlink hov">
								<div className="header__option">
									<span className="header__optionLineOne">Returns</span>
									<span className="header__optionLineTwo">& Orders</span>
								</div>
							</Link>
							<div className="header__option hov">
								<span className="header__optionLineOne">Your</span>
								<span className="header__optionLineTwo">Prime</span>
							</div>
							<Link to="/checkout" className="header__clearlink hov">
								<div className="header__optionBasket">
									<ShoppingCartIcon className="mt-2" />
									<span className="header__optionLineTwo header__basketCount ms-2 ">
										{basket.length}
									</span>
								</div>
							</Link>
						</div>
					</div>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
